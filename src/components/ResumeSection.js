import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ResumeSection = () => {
  return (
    <div className="container-fluid">
      <div className="container resume-section">
        {/* Resume Title */}
        <h2 className="resume-title">
          My <span>Resume</span>
        </h2>

        <div className="row mt-4">
          {/* Education Section */}
          <div className="col-md-6">
            <h4 className="education">My Education</h4>
            <div className="card resumecard mb-4">
              <span className="badge">2005 - 2008</span>
              <h5 className="name">Bachelor of Computer Applications - BCA</h5>
              <p>
                <i className="fa-solid fa-building-columns"></i> VNSGU
              </p>
              <a href="https://www.vnsgu.ac.in" target="_blank" rel="noopener noreferrer" className="dark">
                <i className="fa-solid fa-globe"></i> www.vnsgu.ac.in
              </a>
            </div>

            <div className="card resumecard">
              <span className="badge">2008 - 2010</span>
              <h5 className="name">Master of Computer Applications - MCA</h5>
              <p>
                <i className="fa-solid fa-building-columns"></i> Pune University
              </p>
              <a href="https://www.puneuniversity.ac.in" target="_blank" rel="noopener noreferrer" className="dark">
                <i className="fa-solid fa-globe"></i> www.puneuniversity.ac.in
              </a>
            </div>
          </div>

          {/* Experience Section */}
          <div className="col-md-6">
            <h4 className="education">My Experience</h4>
            <div className="card resumecard mb-4">
              <span className="badge">2008 - 2016</span>
              <h5 className="name">Sr. Software Developer</h5>
              <p>
                <i className="fa-solid fa-building"></i> iOS Developer | Tunack Infotech
              </p>
            </div>

            <div className="card resumecard">
              <span className="badge">2016 - Present</span>
              <h5 className="name">Freelancing Mobile App Development Service</h5>

              {/* Buttons Section */}
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 buttonsss">
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
                  <img src="./img/contra-icon.svg" alt="Contra Icon" className="img-fluid imgcontraa" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
