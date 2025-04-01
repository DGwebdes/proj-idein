import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const { isSignedIn } = useUser();
    const navigate = useNavigate();

    // Handle the button click to go to the home page
    const goToHome = () => {
        navigate("/home");
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-[var(--color-primary)] text-[var(--color-secondary)]">
            <div className="max-w-3xl text-center">
                {isSignedIn ? (
                    // If user is logged in, show welcome message and button to home
                    <>
                        <h1 className="text-5xl font-extrabold leading-tight mb-4 text-[var(--color-mint-500)]">
                            Welcome Back to{" "}
                            <span className="text-[var(--color-accent)]">
                                Idein
                            </span>
                        </h1>
                        <p className="text-2xl mb-6">
                            Your notes and ideas are waiting!
                        </p>
                        <button
                            onClick={goToHome}
                            className="px-8 py-3 bg-[var(--color-mint-500)] text-[var(--color-primary)] rounded-lg shadow-lg hover:bg-[var(--color-accent)] transition duration-300"
                        >
                            Go to Dashboard
                        </button>
                    </>
                ) : (
                    // If user is not logged in, show login/signup option
                    <>
                        <h1 className="text-5xl font-extrabold leading-tight mb-4 text-[var(--color-mint-500)]">
                            Welcome to{" "}
                            <span className="text-[var(--color-accent)]">
                                Idein
                            </span>
                        </h1>
                        <p className="text-2xl mb-6">
                            Sign up or log in to start recording.
                        </p>
                        <div className="md:flex justify-around">
                            <Link
                                to="/sign-up"
                                className="px-8 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg shadow-lg hover:bg-[var(--color-mint-500)] transition duration-300"
                            >
                                Create Account
                            </Link>
                            <Link
                                to="/sign-in"
                                className="px-8 py-3 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-lg shadow-lg hover:bg-[var(--color-accent)] hover:text-primary transition duration-300"
                            >
                                Login
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Landing;
