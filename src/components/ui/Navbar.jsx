import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full py-4 px-8 flex justify-between items-center bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg">
            <Link
                to="/"
                className="text-5xl font-bold text-white hover:text-gray-200 transition-all font-logo"
            >
                IDEIN
            </Link>
            <div className="flex items-center gap-4">
                <SignedOut>
                    <Link
                        to="/sign-in"
                        className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200"
                    >
                        Login
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton className="text-white bg-purple-500 hover:bg-purple-600 rounded-full p-2" />
                </SignedIn>
            </div>
        </div>
    );
};

export default Navbar;
