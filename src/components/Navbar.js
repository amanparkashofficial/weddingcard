import React, { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Desktop Links */}
        <div className="nav-links desktop">
          <a href="#home">Home</a>
          <a href="#couple">Couple</a>
          <a href="#haldi">Haldi</a>
          <a href="#wedding">Wedding</a>
          <a href="#reception">Reception</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="mobile-header">
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span className={open ? "bar rotate1" : "bar"}></span>
            <span className={open ? "bar fade" : "bar"}></span>
            <span className={open ? "bar rotate2" : "bar"}></span>
          </div>
          <h2 className="mobile-welcome">Welcome</h2>
        </div>

        {/* Mobile Menu */}
        <div className={`nav-links mobile ${open ? "open" : ""}`}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#couple" onClick={() => setOpen(false)}>Couple</a>
          <a href="#haldi" onClick={() => setOpen(false)}>Haldi</a>
          <a href="#wedding" onClick={() => setOpen(false)}>Wedding</a>
          <a href="#reception" onClick={() => setOpen(false)}>Reception</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}