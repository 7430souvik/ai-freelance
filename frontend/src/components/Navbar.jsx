import { ArrowRight } from "lucide-react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          Souvik<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Start a Project
          <ArrowRight size={15} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;