import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import RecordList from "./RecordList";
import { db } from "../../firebaseConfig";
import {
    collection,
    addDoc,
    getDocs,
    query,
    where,
    doc,
    deleteDoc,
} from "firebase/firestore";

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
            const newRecord = {
                title,
                text: transcript,
                userId: user.id,
                timeStamp: new Date().toLocaleDateString(),
            };

            try {
                const docRef = await addDoc(collection(db, "notes"), newRecord);
                console.log("Document written with ID: ", docRef.id);
                setTalk((prev) => [...prev, newRecord]);
                resetTranscript();
            } catch (err) {
                console.log("Error occurred: ", err);
            }
        }
    };

    const handleDelete = async (noteId) => {
        try {
            await deleteDoc(doc(db, "notes", noteId));
            setTalk((prev) => prev.filter((note) => note.id !== noteId));
            console.log("Note deleted");
        } catch (error) {
            console.log("Error deleting note", error);
        }
    };

    return (
        <div className="w-full md:flex gap-2 p-2 justify-around items-center h-screen overflow-auto">
            <div className="border-2 flex-1 h-full flex flex-col justify-center items-center">
                <input
                    type="text"
                    placeholder="Note Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={`border p-2 rounder mb-2 rounded-xl`}
                />
                <div className="rounded-4xl border p-4 text-5xl hover:bg-amber-300 hover:cursor-pointer">
                    <button onClick={handleRecord}>
                        {listening ? "Stop Recording" : "Start"}
                    </button>
                </div>
                <div className="">
                    {listening ? (
                        <h2>Recording...</h2>
                    ) : (
                        <h2>Start Recording</h2>
                    )}
                </div>
                {/* This will be a modal! */}
                <p>{transcript}</p>
            </div>
            <RecordList records={talk} onDelete={handleDelete} />
        </div>
    );
};

export default Home;
