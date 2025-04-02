import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.jsx";
import { ClerkProvider, RedirectToSignIn } from "@clerk/clerk-react";
import { auth } from "../config/firebaseConfig.js";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const API_URL = import.meta.env.VITE_CLERK_API_URL;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Clerk key");
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ClerkProvider
            publishableKey={PUBLISHABLE_KEY}
            frontendAPI={API_URL}
            tokenCache={{ firebase: auth }}
        >
            <App />
        </ClerkProvider>
    </StrictMode>,
);
