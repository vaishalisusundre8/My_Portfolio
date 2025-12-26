import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <div
        className="d-flex flex-column min-vh-100 text-light"
        style={{
          background:
            "radial-gradient(circle at top, #0f172a 0%, #020617 65%)",
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow-1 d-flex flex-column">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
