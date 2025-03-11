import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const redirectToUpwork = () => {
    window.location.href = "https://www.upwork.com";
  };

  return (
    <div className="container-fluid mainnav fixed-top d-flex flex-column align-items-center justify-content-center">
      <nav className="navbar navbar-expand-lg navbar-light w-100">
        <div className="container d-flex justify-content-between"><h2 className="d-md-none fw-bold">Dhaval Bhimani</h2>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <a className="nav-link active fw-bold" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#about">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#testimonials">Testimonials</a>
              </li>
            </ul>
            <div className="d-flex uppwork gap-3">
              <button className="btn upwork d-flex align-items-center" onClick={redirectToUpwork}>
                <div className="mainicon">
                  <i className="fa-brands fa-upwork iconup"></i>
                </div>
                <span>Upwork</span>
              </button>
              <button className="btn-contra d-flex justify-content-center align-items-center">
                <img src="./img/contra-icon.svg" alt="Contra" className="img-fluid" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;