import { Link } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
    const { isSignedIn } = useUser();
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/home");
    };

    return (
        <div className="w-full py-4 px-8 bg-[var(--color-primary)] text-[var(--color-secondary)] flex justify-between items-center shadow-md">
            <div className="text-2xl font-bold text-[var(--color-mint-500)]">
                <Link to="/" className="hover:text-[var(--color-accent)]">
                    Idein
                </Link>
            </div>
            <div className="flex items-center gap-6">
                {isSignedIn ? (
                    <>
                        <button
                            onClick={goToHome}
                            className="bg-[var(--color-accent)] text-[var(--color-primary)] px-6 py-2 rounded-lg hover:bg-[var(--color-mint-500)] transition duration-300"
                        >
                            <FaHome className="inline-block mr-2" />
                            Home
                        </button>
                        <UserButton />
                    </>
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
