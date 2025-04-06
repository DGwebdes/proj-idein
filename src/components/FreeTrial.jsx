// src/components/TrialMode.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import RecordList from "./RecordList";
import { localStorageService } from "../utils/localStorageService";
import { AlertTriangle, Info, Save, Clock } from "lucide-react";

const TrialMode = () => {
    const [title, setTitle] = useState("");
    const [talk, setTalk] = useState([]);
    const [storageInfo, setStorageInfo] = useState({});
    const { transcript, listening, resetTranscript } = useSpeechRecognition();

    // Load notes from localStorage on component mount
    useEffect(() => {
        const notes = localStorageService.getNotes();
        setTalk(notes);
        updateStorageInfo();
    }, []);

    // Update storage info
    const updateStorageInfo = () => {
        const info = localStorageService.getStorageInfo();
        setStorageInfo(info);
    };

    // Voice commands
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

    useSpeechRecognition({ commands });

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
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

    const handleSave = () => {
        if (transcript.trim()) {
            const words = transcript.trim().split(" ");
            words.pop();
            const cleanTranscript = words.join(" ");

            if (cleanTranscript) {
                const newRecord = {
                    title: title || "Untitled",
                    text: cleanTranscript,
                    userId: "trial_user",
                    timeStamp: new Date().toLocaleDateString(),
                };

                const savedNote = localStorageService.addNote(newRecord);
                if (savedNote) {
                    setTalk((prevTalk) => [...prevTalk, savedNote]);
                    updateStorageInfo();
                }
            }
            resetTranscript();
        }
    };

    const handleDelete = (noteId) => {
        const confirmDelete = window.confirm(
            "You're about to delete a note! Confirm?",
        );
        if (!confirmDelete) return;

        const success = localStorageService.deleteNote(noteId);
        if (success) {
            setTalk((prevTalk) =>
                prevTalk.filter((note) => note.id !== noteId),
            );
            updateStorageInfo();
        }
    };

    const handleDownload = (note) => {
        const title = note.title || "Untitled";
        const fileName = `${title.replace(
            /[^a-z0-9]/gi,
            "_",
        )}_${Date.now()}.txt`;
        const content = note.text;

        const blob = new Blob([content], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
    };

    return (
        <div className="w-full min-h-screen flex flex-col gap-6 p-6 bg-gradient-to-br from-[#72C9A1] to-[var(--color-primary)] text-white overflow-auto">
            {/* Trial Mode Banner */}
            <div className="bg-amber-50 text-amber-800 p-4 rounded-xl shadow-md border border-amber-200 mb-2">
                <div className="flex items-start gap-3">
                    <AlertTriangle className="text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                        <h2 className="font-bold text-lg mb-1">Trial Mode</h2>
                        <p className="mb-2">
                            You're using Idein in trial mode. Notes are stored
                            locally in your browser and will be lost if you
                            clear your browser data.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <Link
                                to="/sign-up"
                                className="px-4 py-2 bg-[#72C9A1] text-white rounded-full text-sm font-medium hover:bg-[#5DB892] transition-all"
                            >
                                Sign Up to Save Permanently
                            </Link>
                            <Link
                                to="/sign-in"
                                className="px-4 py-2 bg-white text-[#72C9A1] border border-[#72C9A1] rounded-full text-sm font-medium hover:bg-[#F5F5F5] transition-all"
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Storage Usage */}
            <div className="bg-white/90 text-gray-800 p-3 rounded-lg shadow-sm flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <Save size={18} className="text-[#72C9A1]" />
                    <span>
                        <strong>{storageInfo.notesCount || 0}</strong> notes
                        saved
                    </span>
                    <span className="text-gray-400">|</span>
                    <span>
                        Using{" "}
                        <strong>{storageInfo.formattedUsed || "0 KB"}</strong>
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock size={18} className="text-amber-500" />
                    <span className="text-amber-700 text-sm">
                        Trial session
                    </span>
                </div>
            </div>

            {/* Main Content - Similar to your Home component */}
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col items-center p-8 shadow-lg bg-[#FCFCFD] text-gray-900 rounded-3xl border border-gray-300">
                    <input
                        type="text"
                        placeholder="Note Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full mb-4 p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#72C9A1] transition-all"
                    />
                    <button
                        onClick={handleRecord}
                        className="w-40 h-16 text-2xl font-semibold rounded-full transition-all duration-300 shadow-lg 
                     bg-[#72C9A1] hover:bg-[#B8AB95] text-white focus:ring-2 focus:ring-[#B8AB95]"
                    >
                        {listening ? "Stop" : "Start"}
                    </button>
                    <div className="mt-6">
                        {listening ? (
                            <h1 className="text-2xl font-bold text-red-500 animate-pulse">
                                Recording...
                            </h1>
                        ) : (
                            <h1 className="text-3xl font-bold text-[#212C4B]">
                                Ready to Record
                            </h1>
                        )}
                    </div>
                    <div className="mt-6 p-6 w-full bg-[#F5F5F5] rounded-lg min-h-[100px] border border-gray-300">
                        <p className="text-lg text-[#212C4B] whitespace-pre-wrap">
                            {transcript ||
                                "Your recorded text will appear here..."}
                        </p>
                    </div>
                </div>

                <RecordList
                    records={talk}
                    onDelete={handleDelete}
                    onDownload={handleDownload}
                />
            </div>
        </div>
    );
};

export default TrialMode;
