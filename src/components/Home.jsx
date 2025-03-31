import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import RecordList from "./RecordList";
import {
    db,
    collection,
    addDoc,
    getDocs,
    query,
    where,
    doc,
    deleteDoc,
} from "../../config/firebaseConfig";

const Home = () => {
    const { user } = useUser();
    const [title, setTitle] = useState("");
    const [talk, setTalk] = useState([]);
    const { transcript, listening, resetTranscript } = useSpeechRecognition();
    const commands = [
        {
            command: "clear",
            callback: resetTranscript,
        },
        {
            command: "start",
            callback: () =>
                SpeechRecognition.startListening({ continuous: true }),
        },
        {
            command: "stop",
            callback: () => handleStop(),
        },
        {
            command: "save",
            callback: () => handleSave(),
        },
    ];
    useSpeechRecognition({
        commands,
    });

    useEffect(() => {
        const fetchNotes = async () => {
            if (!user?.id) return;

            const q = query(
                collection(db, "notes"),
                where("userId", "==", user.id),
            );
            const snapshot = await getDocs(q);

            const userNotes = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTalk(userNotes);
        };

        fetchNotes();
    }, [user?.id]);

    if (!SpeechRecognition || !SpeechRecognition.startListening) {
        return <h1>Your browser does not support speech recognition.</h1>;
    }

    const handleRecord = () => {
        if (!listening) {
            SpeechRecognition.startListening({ continuous: true });
        } else {
            handleStop();
        }
    };

    const handleStop = () => {
        SpeechRecognition.stopListening();
        handleSave();
    };
    const handleSave = async () => {
        if (transcript.trim()) {
            const words = transcript.trim().split(" ");
            words.pop();
            const cleanTranscript = words.join(" ");
            if (cleanTranscript) {
                const newRecord = {
                    title,
                    text: cleanTranscript,
                    userId: user.id,
                    timeStamp: new Date().toLocaleDateString(),
                };

                try {
                    const docRef = await addDoc(
                        collection(db, "notes"),
                        newRecord,
                    );
                    console.log("Document written with ID: ", docRef.id);
                    setTalk((prev) => [...prev, newRecord]);
                } catch (err) {
                    console.log("Error occurred: ", err);
                }
            }
            resetTranscript();
        }
    };

    const handleDelete = async (noteId) => {
        const confirmDelete = window.confirm(
            "Your about to delete a note! Confirm?",
        );
        if (!confirmDelete) return;
        try {
            await deleteDoc(doc(db, "notes", noteId));
            setTalk((prev) => prev.filter((note) => note.id !== noteId));
            console.log("Note deleted");
        } catch (error) {
            console.log("Error deleting note", error);
        }
    };
    const sanitizeFilename = (title) => {
        return title.replace(/[<>:"/\\|?*]+/g, "_"); // Replace unsafe characters with underscores
    };

    const handleDownload = (note) => {
        const title = note.title || "Untitled";
        const fileName = `${sanitizeFilename(title)}.txt`;
        const content = note.text;

        const blob = new Blob([content], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
    };

    return (
        <div className="w-full h-screen flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
            <div className="flex-1 flex flex-col items-center p-6 shadow-lg bg-white text-gray-900 rounded-2xl border border-gray-300">
                <input
                    type="text"
                    placeholder="Note Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full mb-4 p-3 text-lg border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
                />
                <button
                    onClick={handleRecord}
                    className="w-40 h-16 text-2xl font-semibold rounded-full transition-all duration-300 shadow-md 
                               bg-blue-500 hover:bg-blue-700 text-white"
                >
                    {listening ? "Stop" : "Start"}
                </button>
                <div className="mt-4">
                    {listening ? (
                        <h1 className="text-2xl font-bold text-red-500 animate-pulse">
                            Recording...
                        </h1>
                    ) : (
                        <h1 className="text-3xl font-bold">Ready to Record</h1>
                    )}
                </div>
                <div className="mt-4 p-4 w-full bg-gray-100 rounded-lg min-h-[100px] border border-gray-300">
                    <p className="text-lg text-gray-700 whitespace-pre-wrap">
                        {transcript || "Your recorded text will appear here..."}
                    </p>
                </div>
            </div>

            <RecordList
                records={talk}
                onDelete={handleDelete}
                onDownload={handleDownload}
            />
        </div>
    );
};

export default Home;
