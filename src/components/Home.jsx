import React, { useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";

const Home = () => {
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
        SpeechRecognition.startListening();
        handleSave();
    };
    const handleSave = () => {
        if (transcript.trim()) {
            setTalk((prev) => [...prev, transcript]);
            resetTranscript();
        }
    };

    return (
        <div className="w-full flex gap-2 p-2 justify-around items-center h-screen">
            <div className="border-2 flex-1 h-full flex flex-col justify-center items-center">
                <div className="">
                    <button
                        className="rounded-4xl border p-4 text-5xl hover:bg-amber-300 hover:cursor-pointer"
                        onClick={handleRecord}
                    >
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
                <p>{transcript}</p>
            </div>
            <div className="h-full flex-1 flex flex-col rounded border">
                <h2>Record List</h2>
                <ul className="list-disc pl-4">
                    {talk.map((entry, i) => (
                        <li key={i}>{entry}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
