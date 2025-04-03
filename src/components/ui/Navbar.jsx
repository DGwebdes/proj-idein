import { useState } from "react";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const { isSignedIn } = useUser();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const goToHome = () => {
        navigate("/home");
    };

    return (
        <div className="w-full py-4 px-8 bg-[var(--color-primary)] text-[var(--color-secondary)] flex justify-between items-center shadow-md relative">
            <div className="text-2xl md:text-5xl font-bold text-[var(--color-mint-500)] font-logo">
                <Link to="/" className="hover:text-[var(--color-accent)]">
                    Idein
                </Link>
            </div>

            {/* Hamburger Menu */}
            <div
                className="absolute right-4 top-4 md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <FaTimes className="text-[var(--color-accent)] text-2xl" />
                ) : (
                    <FaBars className="text-[var(--color-accent)] text-2xl" />
                )}
            </div>

            {/* Navigation Links */}
            <div
                className={`${
                    isMenuOpen ? "block" : "hidden"
                } md:flex gap-6 items-center absolute top-16 right-0 bg-[var(--color-primary)] w-full p-4 md:w-auto md:p-0 md:static z-20`}
            >
                {isSignedIn ? (
                    <div className="flex gap-2">
                        <button
                            onClick={goToHome}
                            className="bg-[var(--color-accent)] text-[var(--color-primary)] px-6 py-2 rounded-lg hover:bg-[var(--color-mint-500)] transition duration-300"
                        >
                            <FaHome className="inline-block mr-2" />
                            Home
                        </button>
                        <UserButton />
                    </div>
                ) : (
                    <div className="flex gap-6">
                        <Link
                            to="/sign-in"
                            className="px-6 py-2 bg-[var(--color-mint-500)] text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-accent)] transition duration-300"
                        >
                            Login
                        </Link>
                        <Link
                            to="/sign-up"
                            className="px-6 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-mint-500)] transition duration-300"
                        >
                            Create Account
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
