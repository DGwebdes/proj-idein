import React from "react";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <SignIn />
        </div>
    );
};

export default SignInPage;
