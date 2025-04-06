import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import BannerCompatible from "./ui/BannerCompatible.jsx";
import InfoGuide from "./ui/InfoGuide.jsx";
import PremiumFeatureTeaser from "./ui/Premium.jsx";

const Landing = () => {
    const { isSignedIn } = useUser();
    const navigate = useNavigate();

    // Handle the button click to go to the home page
    const goToHome = () => {
        navigate("/home");
    };

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[var(--color-primary)]">
            <button
                onClick={() => {
                    throw new Error("This is your first error!");
                }}
            >
                Break the world
            </button>
            ;
            <BannerCompatible />
            <InfoGuide />
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--color-mint-500)] opacity-10 blur-3xl"></div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[var(--color-accent)] opacity-10 blur-3xl"></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--color-mint-500)] opacity-5 blur-2xl"></div>
            </div>
            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl text-center px-6 py-12 rounded-3xl backdrop-blur-sm bg-[var(--color-primary)]/30 border border-[var(--color-secondary)]/10 z-10 overflow-auto"
            >
                {isSignedIn ? (
                    // If user is logged in, show welcome message and button to home
                    <>
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-[var(--color-mint-500)]"
                        >
                            Welcome Back to{" "}
                            <span className="text-[var(--color-accent)] inline-block">
                                Idein
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-2xl mb-8 text-[var(--color-secondary)] max-w-2xl mx-auto"
                        >
                            Your notes and ideas are waiting for you. Continue
                            your creative journey!
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <button
                                onClick={goToHome}
                                className="px-10 py-4 bg-gradient-to-r from-[var(--color-mint-500)] to-[var(--color-accent)] text-[var(--color-primary)] text-xl font-bold rounded-full shadow-lg hover:shadow-xl transform transition duration-300 hover:-translate-y-1 focus:ring-4 focus:ring-[var(--color-mint-500)]/50"
                            >
                                Go to Dashboard
                            </button>
                        </motion.div>
                    </>
                ) : (
                    // If user is not logged in, show login/signup option
                    <>
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-[var(--color-mint-500)]"
                        >
                            Welcome to{" "}
                            <span className="text-[var(--color-accent)] inline-block">
                                Idein
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-2xl mb-8 text-[var(--color-secondary)] max-w-2xl mx-auto"
                        >
                            Capture your notes effortlessly. Transform your
                            ideas into organized text with just a click.
                        </motion.p>

                        {/* Feature highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
                        >
                            <FeatureHighlight
                                icon="🎙️"
                                title="Voice Recording"
                                description="Capture your thoughts hands-free"
                            />
                            <FeatureHighlight
                                icon="✨"
                                title="Instant Transcription"
                                description="See your words appear as you speak"
                            />
                            <FeatureHighlight
                                icon="🔄"
                                title="Easy Management"
                                description="Organize and access your notes anywhere"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8"
                        >
                            <Link
                                to="/sign-up"
                                className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[var(--color-mint-500)] to-[var(--color-accent)] text-[var(--color-primary)] text-xl font-bold rounded-full shadow-lg hover:shadow-xl transform transition duration-300 hover:-translate-y-1 focus:ring-4 focus:ring-[var(--color-mint-500)]/50"
                            >
                                Create Account
                            </Link>
                            <Link
                                to="/sign-in"
                                className="w-full md:w-auto px-10 py-4 bg-[var(--color-primary)] text-[var(--color-secondary)] text-xl font-bold rounded-full shadow-lg border border-[var(--color-secondary)]/20 hover:bg-[var(--color-secondary)]/10 transform transition duration-300 hover:-translate-y-1 focus:ring-4 focus:ring-[var(--color-secondary)]/30"
                            >
                                Sign In
                            </Link>
                        </motion.div>
                    </>
                )}
            </motion.div>
            {/* Footer */}
            {/* Premium Feature */}
            <PremiumFeatureTeaser />
            <div className="absolute bottom-4 text-[var(--color-secondary)]/60 text-sm">
                © {new Date().getFullYear()} Idein. All rights reserved.
            </div>
        </div>
    );
};

const FeatureHighlight = ({ icon, title, description }) => (
    <div className="bg-[var(--color-primary)]/50 backdrop-blur-sm p-6 rounded-xl border border-[var(--color-secondary)]/10 hover:border-[var(--color-mint-500)]/30 transition-all duration-300">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-[var(--color-mint-500)]">
            {title}
        </h3>
        <p className="text-[var(--color-secondary)]/80">{description}</p>
    </div>
);

export default Landing;
