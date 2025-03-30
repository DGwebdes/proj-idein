import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { SignedIn, SignedOut, SignUp } from "@clerk/clerk-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <SignedOut>
                            <Landing />
                        </SignedOut>
                    }
                />
                <Route
                    path="/home"
                    element={
                        <SignedIn>
                            <Home />
                        </SignedIn>
                    }
                />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
