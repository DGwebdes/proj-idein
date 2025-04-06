import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: "https://464deb8a518be599981d4a83a630deec@o4509095957626880.ingest.de.sentry.io/4509095962083408",
});

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const API_URL = import.meta.env.VITE_CLERK_API_URL;
const DEV_KEY = import.meta.env.VITE_PUBLISHABLE_CLERK_KEY_DEV;
const DEV_URL = import.meta.env.VITE_CLERK_API_URL;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Clerk key");
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} frontendAPI={API_URL}>
            <App />
        </ClerkProvider>
    </StrictMode>,
);
