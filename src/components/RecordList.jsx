import React from "react";

const RecordList = ({ records, onDelete }) => {
    return (
        <div className="h-full flex-1 flex flex-col rounded border p-2">
            <h2 className="mb-5 text-center text-2xl">Record List</h2>
            <ul className="list-disc pl-4 flex flex-col gap-2">
                {records.map((entry, i) => (
                    <li
                        key={i}
                        className="list-none border py-1 px-2 rounded-xl bg-gray-800 text-white hover:bg-gray-600"
                    >
                        <div className="">
                            <strong>{entry.title}</strong>
                            <p>{entry.text}</p>
                        </div>
                        <button
                            className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
                            onClick={() => onDelete(entry.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecordList;
