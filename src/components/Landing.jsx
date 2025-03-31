import { Link } from "react-router-dom";
import { Button } from "@heroui/react";

const Landing = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-primary">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Idein</h1>
            <p className="mb-6">Sign up or log in to start recording.</p>
            <div className="flex gap-4">
                <Link
                    to="/sign-up"
                    className="px-6 py-2 bg-blue-500 text-white rounded"
                >
                    <Button color="primary" variant="solid">
                        Create Account
                    </Button>
                </Link>
                <Link
                    to="/sign-in"
                    className="px-6 py-2 bg-gray-500 text-white rounded"
                >
                    <Button color="primary" variant="solid">
                        Login
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Landing;
