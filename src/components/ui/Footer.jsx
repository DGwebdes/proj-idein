import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full py-6 px-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white flex justify-between items-center shadow-md">
            <div className="text-sm">
                <p>
                    &copy; 2025 Idein. All Rights Reserved. Developed by{" "}
                    <a href="https://dielanwebdev.pt/" target="_blank">
                        <strong>Dielan Garve</strong>
                    </a>
                </p>
            </div>
            <div className="flex gap-4">
                <a
                    href="https://github.com/dgwebdes"
                    target="_blank"
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/alangarve/"
                    target="_blank"
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://x.com/gandalfsneto"
                    target="_blank"
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                    <FaTwitter />
                </a>
            </div>
        </div>
    );
};

export default Footer;
