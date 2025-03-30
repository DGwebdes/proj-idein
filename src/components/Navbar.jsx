import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
    const { isSignedIn } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSignedIn) {
            navigate("/home");
        }
    }, [isSignedIn, navigate]);
    return (
        <div className="w-full py-2 px-4 flex justify-between items-center bg-gray-200">
            <Link to="/" className="text-xl font-bold">
                App Logo
            </Link>
            <div>
                <SignedOut>
                    <Link
                        to="/sign-in"
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Login
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
};

export default Navbar;
