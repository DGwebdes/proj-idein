import React, { useState } from "react";
import {
    Info,
    X,
    Mic,
    Save,
    Download,
    HelpCircle,
    AlertTriangle,
} from "lucide-react";

const InfoGuide = () => {
    const [isOpen, setIsOpen] = useState();

    return (
        <>
            {/* Floating help button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 p-3 rounded-full bg-[#72C9A1] text-white shadow-lg hover:bg-[#5DB892] transition-all duration-300 z-40"
                aria-label="How to use"
            >
                <HelpCircle size={24} />
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center p-6 border-b">
                            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <Info size={24} className="text-[#72C9A1]" />
                                How to Use Idein
                            </h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Step 1 */}
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-[#72C9A1]/20 flex items-center justify-center mb-4">
                                        <Mic
                                            size={32}
                                            className="text-[#72C9A1]"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">
                                        1. Record
                                    </h3>
                                    <p className="text-gray-600">
                                        Click the "Start" button and begin
                                        speaking. Your words will appear as text
                                        in real-time.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-[#72C9A1]/20 flex items-center justify-center mb-4">
                                        <Save
                                            size={32}
                                            className="text-[#72C9A1]"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">
                                        2. Save
                                    </h3>
                                    <p className="text-gray-600">
                                        Click "Stop" when finished. Your note
                                        will be automatically saved with the
                                        title you've entered.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-[#72C9A1]/20 flex items-center justify-center mb-4">
                                        <Download
                                            size={32}
                                            className="text-[#72C9A1]"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">
                                        3. Export
                                    </h3>
                                    <p className="text-gray-600">
                                        Access your notes anytime. Download them
                                        as text files or delete ones you no
                                        longer need.
                                    </p>
                                </div>
                            </div>

                            {/* Voice Commands */}
                            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                <h3 className="text-lg font-bold mb-2 text-gray-800">
                                    Voice Commands
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    You can use these voice commands while
                                    recording:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-1 bg-[#72C9A1]/10 text-[#72C9A1] rounded font-mono">
                                            "stop"
                                        </span>
                                        <span className="text-gray-700">
                                            End recording and save
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-1 bg-[#72C9A1]/10 text-[#72C9A1] rounded font-mono">
                                            "clear"
                                        </span>
                                        <span className="text-gray-700">
                                            Clear current text
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-1 bg-[#72C9A1]/10 text-[#72C9A1] rounded font-mono">
                                            "save"
                                        </span>
                                        <span className="text-gray-700">
                                            Save current note
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Browser Compatibility */}
                            <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200">
                                <h3 className="text-lg font-bold mb-2 text-amber-800 flex items-center gap-2">
                                    <AlertTriangle
                                        size={20}
                                        className="text-amber-500"
                                    />
                                    Browser Compatibility
                                </h3>
                                <p className="text-amber-700 mb-2">
                                    For the best experience, we recommend:
                                </p>
                                <ul className="list-disc list-inside text-amber-700 space-y-1">
                                    <li>Google Chrome browser</li>
                                    <li>Desktop or laptop computer</li>
                                    <li>
                                        A quiet environment for better voice
                                        recognition
                                    </li>
                                </ul>
                                <p className="mt-4 text-amber-700 text-sm">
                                    Note: Voice recognition may have limited
                                    functionality on mobile devices and in
                                    browsers other than Chrome.
                                </p>
                            </div>

                            <div className="mt-8 text-center">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-6 py-2 bg-[#72C9A1] text-white rounded-full hover:bg-[#5DB892] transition-all duration-300"
                                >
                                    Got it!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default InfoGuide;
