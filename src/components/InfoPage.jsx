import React from "react";
import { motion } from "motion/react";

const InfoPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-br from-[#72C9A1] to-[var(--color-primary)] text-white overflow-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 flex flex-col items-center p-8 md:p-12 shadow-xl bg-[#FCFCFD] text-gray-900 rounded-3xl border border-gray-300 max-w-4xl mx-auto my-auto"
            >
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#72C9A1] to-[var(--color-primary)] bg-clip-text text-transparent">
                        Welcome to Idein
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                        Your personal voice-to-text note-taking assistant
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
                    <FeatureCard
                        icon="🎙️"
                        title="Record"
                        description="Capture your thoughts with simple voice commands"
                    />
                    <FeatureCard
                        icon="💾"
                        title="Save"
                        description="Automatically save and organize your notes"
                    />
                    <FeatureCard
                        icon="📥"
                        title="Export"
                        description="Download your notes as text files anytime"
                    />
                </div>

                {/* Call to Action */}
                <div className="text-center mt-4 mb-8">
                    <p className="text-lg mb-6 text-gray-700 max-w-2xl">
                        Sign in to access your personalized notes and start
                        recording right away.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => (window.location.href = "/sign-in")}
                        className="px-8 py-4 text-xl font-semibold rounded-full transition-all duration-300 shadow-lg 
                               bg-[#72C9A1] hover:bg-[#5DB892] text-white focus:ring-4 focus:ring-[#72C9A1] focus:ring-opacity-50 transform hover:-translate-y-1"
                    >
                        Sign In to Continue
                    </motion.button>
                </div>

                {/* Footer Note */}
                <p className="text-sm text-gray-500 mt-4">
                    New to Idein?{" "}
                    <a
                        href="/sign-up"
                        className="text-[#72C9A1] hover:underline font-medium"
                    >
                        Create an account
                    </a>
                </p>
            </motion.div>
        </div>
    );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-[#72C9A1]">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default InfoPage;
