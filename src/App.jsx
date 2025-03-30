import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
    return (
        <div className="w-full flex flex-col justify-center items-center h-screen">
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
