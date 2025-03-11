import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import contraIcon from "../assets/contra-icon.svg"; // Correct path

const AboutSection = () => {
  return (
    <div className="container-fluid py-5 mainabout" id="about">
      <div className="container">
        {/* About Me Title */}
        <div className="text-center mb-4">
          <h1>
            About <span>Me</span>
          </h1>
        </div>

        {/* About Me Content */}
        <div className="row">
          <div className="col-lg-12 text-center text-lg-start">
            <h3>
              I’m <span> Dhaval Bhimani,</span> Mobile Application Designer & Developer
            </h3>
            <p>
              Welcome to my profile! As a UI/UX designer and mobile app developer, I specialize in
              creating user-friendly and visually appealing applications for iOS and Android.
            </p>
            <p>
              With over 7.5 years of experience, I deliver high-quality solutions from concept to execution, 
              aligning with your vision and business objectives. I prioritize clear communication and 
              collaboration, ensuring your satisfaction at every step.
            </p>
            <p>
              My skill set includes a strong focus on design and robust development, supported by a keen 
              eye for detail. I use tools like Figma and Photoshop for design, and for development, 
              I work with Swift and SwiftUI for iOS, Kotlin for Android, and Flutter for cross-platform solutions.
            </p>
            <p>Let’s work together to turn your ideas into impactful mobile experiences!</p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <button
            className="btn upworkk d-flex align-items-center"
            onClick={() => window.location.href = "https://www.upwork.com/freelancers/dhavalb17"}
          >
            <div className="mainiconn">
              <i className="fa-brands fa-upwork iconupp"></i>
            </div>
            <span>Upwork</span>
          </button>
          
          <button
            className="btn btn-contraa"
            onClick={() => window.location.href = "https://contra.com/dhaval_bhimani_1?utm_campaign=HireMeOnContra&utm_medium=9c861776-37b4-4f23-85e3-d3394b2ecfda"}
          >
            <img src={contraIcon} alt="Contra Icon" className="img-fluid imgcontraa" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="row border rounded-3 py-4 text-center mt-5">
  <div className="col-md-3 col-sm-6 col-6 mb-3">
    <div className="card1">
      <h1>7.5+</h1>
      <p>Years Experience</p>
    </div>
  </div>
  <div className="col-md-3 col-sm-6 col-6 mb-3">
    <div className="card1">
      <h1>110+</h1>
      <p>Happy Clients</p>
    </div>
  </div>
  <div className="col-md-3 col-sm-6 col-6 mb-3">
    <div className="card1">
      <h1>75+</h1>
      <p>Projects Done</p>
    </div>
  </div>
  <div className="col-md-3 col-sm-6 col-6 mb-3">
    <div className="card1">
      <h1>04</h1>
      <p>Awards</p>
    </div>
  </div>
</div> 

    </div>
    </div>
  );
};

export default AboutSection;
