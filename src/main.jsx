import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const API_URL = import.meta.env.VITE_CLERK_API_URL;
const DEV_KEY = import.meta.env.VITE_PUBLISHABLE_CLERK_KEY_DEV;
const DEV_URL = import.meta.env.VITE_CLERK_API_URL;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Clerk key");
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ClerkProvider publishableKey={DEV_KEY} frontendAPI={DEV_URL}>
            <App />
        </ClerkProvider>
    </StrictMode>,
);
