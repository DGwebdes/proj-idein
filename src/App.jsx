import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Home from "./components/Home";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import SignInPage from "./components/ui/SignInPage";
import SignUpPage from "./components/ui/SignUpPage";
// import About from "./test/About";

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
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
