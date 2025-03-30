import { useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";

const Home = () => {
    const { isSignedIn, user } = useUser();
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

    if (!isSignedIn) {
        return <h1>Please sign to see your data</h1>;
    }
    if (!SpeechRecognition || !SpeechRecognition.startListening) {
        return <h1>Your browser does not support speech recognition.</h1>;
    }

    const handleRecord = () => {
        if (!listening) {
            SpeechRecognition.startListening({ continuous: true });
            console.log("Recording.");
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
            const newRecord = { text: transcript, userId: user.id };
            setTalk((prev) => [...prev, newRecord]);
            resetTranscript();
        }
    };

    return (
        <div className="w-full md:flex gap-2 p-2 justify-around items-center h-screen overflow-auto">
            <div className="border-2 flex-1 h-full flex flex-col justify-center items-center">
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
            <div className="h-full flex-1 flex flex-col rounded border">
                <h2>Record List</h2>
                <ul className="list-disc pl-4">
                    {talk.map((entry, i) => (
                        <li key={i}>{entry.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
