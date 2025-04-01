import React from "react";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-primary">
            <SignIn />
        </div>
    );
};

export default SignInPage;
