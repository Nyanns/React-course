import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css"; // Import CSS

// Komponen Navbar untuk modularitas
function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Komponen Utama App
function App() {
  return (
    <Router>
      <Navbar /> {/* Panggil komponen Navbar */}
      {/* Konfigurasi Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <div>
                <h1>My App</h1>
                <About name="Nyann" />
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
