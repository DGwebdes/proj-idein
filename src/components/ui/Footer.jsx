import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full py-6 px-8 bg-[var(--color-primary)] text-[var(--color-secondary)] flex justify-between items-center shadow-md">
            <div className="text-sm text-center text-[var(--color-accent)]">
                <p>
                    &copy; 2025 Idein. All Rights Reserved. Developed by{" "}
                    <a
                        href="https://dielanwebdev.pt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-mint-500)] hover:text-[var(--color-accent)]"
                    >
                        <strong>Dielan Garve</strong>
                    </a>
                </p>
            </div>
            <div className="flex gap-6">
                <a
                    href="https://github.com/dgwebdes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/alangarve/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://x.com/gandalfsneto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                    <FaTwitter />
                </a>
            </div>
        </div>
    );
};

export default Footer;
