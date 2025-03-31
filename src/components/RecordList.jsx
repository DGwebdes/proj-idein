import React from "react";

const RecordList = ({ records, onDelete, onDownload }) => {
    return (
        <div className="h-full flex-1 flex flex-col rounded-lg border p-6 bg-white shadow-lg text-gray-900 overflow-auto">
            <h2 className="mb-6 text-center text-3xl font-semibold text-blue-600">
                Record List
            </h2>
            <ul className="list-none flex flex-col gap-4">
                {records.map((entry, i) => (
                    <li
                        key={i}
                        className="border border-gray-300 rounded-lg bg-gray-50 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    >
                        <div className="flex flex-col gap-2 p-4">
                            <strong className="text-xl font-bold text-blue-700">
                                {entry.title}
                            </strong>
                            <p className="text-gray-700">{entry.text}</p>
                        </div>
                        <div className="flex justify-end p-4 gap-2">
                            <button
                                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                                onClick={() => onDownload(entry)} // Trigger download
                            >
                                Download
                            </button>
                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-all duration-200"
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
