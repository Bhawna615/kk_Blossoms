import React from "react";
import schoolLogo from "./photos/K-K-Blossoms-School-png.webp"; // adjust path as per your structure
import TopBar from "./TopbarStart";

function Navbar() {
  return (
    <div className="container-fluid p-0"style={{position:"fixed",zIndex:"2"}}>
      <div>
        <TopBar/>
      </div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5"style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", // ✅ smooth shadow
        }}>
        <a href="index.html" className="navbar-brand ml-lg-3 d-flex align-items-center">
          <img
            src={schoolLogo}
            alt="KK Blossoms School"
            style={{ height: "50px", width: "50px", marginRight: "10px" }}
          />
          <h1 className="m-0 text-uppercase text-primary">
            KK Blossoms
          </h1>
        </a>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-between px-lg-3"
          id="navbarCollapse"
        >
          <div className="navbar-nav mx-auto py-0">
            <a href="/" className="nav-item nav-link">
              Home
            </a>
            <a href="/about" className="nav-item nav-link">
              About
            </a>

            <a href="/contact" className="nav-item nav-link">
              Contact
            </a>
             <a href="/academic" className="nav-item nav-link">
              Academic
            </a>
            <a href="/activities" className="nav-item nav-link">
             Activity
            </a>
            <a href="/facultypage" className="nav-item nav-link">
              Faculty
            </a>
          </div>

          <a href="/contact" className="btn btn-primary py-2 px-4 d-none d-lg-block"style={{borderRadius:"10px"}}>
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
