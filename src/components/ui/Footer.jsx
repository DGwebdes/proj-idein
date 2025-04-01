import React from "react";

const Footer = () => {
    return (
        <div className="w-full py-6 px-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white flex justify-between items-center shadow-md">
            <div className="text-sm">
                <p>&copy; 2025 Idein. All Rights Reserved.</p>
            </div>
            <div className="flex gap-4">
                <a
                    href="https://github.com/dgwebdes"
                    target="_blank"
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                    LinkedIn
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                    Twitter
                </a>
            </div>
        </div>
    );
};

export default Footer;
