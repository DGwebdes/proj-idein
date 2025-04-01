import React from "react";

const RecordList = ({ records, onDelete, onDownload }) => {
    return (
        <div className="h-full flex-1 flex flex-col rounded-lg border p-8 bg-[#FCFCFD] shadow-lg text-[#212C4B] overflow-auto">
            <h2 className="mb-6 text-center text-4xl font-bold text-[#72C9A1]">
                My Notes
            </h2>
            <ul className="list-none flex flex-col gap-6">
                {records.map((entry, i) => (
                    <li
                        key={i}
                        className="border border-[#B8AB95] rounded-lg bg-[#F5F5F5] shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    >
                        <div className="flex flex-col gap-2 p-6">
                            <strong className="text-2xl font-bold text-[#212C4B]">
                                {entry.title}
                            </strong>
                            <p className="text-[#212C4B]">{entry.text}</p>
                        </div>
                        <div className="flex justify-end p-6 gap-4">
                            <button
                                className="bg-[#72C9A1] text-white p-3 rounded-md hover:bg-[#B8AB95] transition-colors duration-200 hover:text-primary"
                                onClick={() => onDownload(entry)} // Trigger download
                            >
                                Download
                            </button>
                            <button
                                className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-700 transition-all duration-200"
                                onClick={() => onDelete(entry.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecordList;
