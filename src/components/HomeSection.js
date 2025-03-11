import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import wavingHand from "../assets/waving-hand.png";
import contraIcon from "../assets/contra-icon.svg";
import upworkBadge from "../assets/upwork-top-rated-plus-badge.png";
import dhavalBhimani from "../assets/dhaval-bhimani.png";
import "../HomeSection.css";

const HomeSection = () => {
    return (
      <div className="container-fluid mainsection d-flex align-items-center justify-content-center" id="home">
        <div className="row align-items-center d-md-flex w-85">
          <div className="col-lg-6 col-md-6   text-center text-lg-start order-2 order-md-1">
            <div className="containfirst ">
              <h1 className="hello">
                Hello <img src={wavingHand} alt="Waving Hand" /><br />
                I'm <span>Dhaval Bhimani</span>
              </h1>
              <h4 className="mobile">Mobile Application Designer & Developer</h4>
              <p className="welcome">
                Welcome to my profile! I am a highly skilled and experienced mobile app freelancer ready to bring your ideas to life.
                With a deep understanding of mobile app design & development, I specialize in creating innovative and user-friendly applications
                for iOS and Android platforms.
              </p>
              <p>
                In addition to development, I also have strong UI/UX design skills, ensuring that each app is not only functional but
                also visually appealing and intuitive for users. As a freelancer, I offer flexibility, professionalism, and a commitment
                to delivering top-notch results. Let’s work together to create an exceptional mobile experience!
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 buttonss">
                <button className="btn upworkk d-flex align-items-center">
                  <div className="mainiconn">
                    <i className="fa-brands fa-upwork iconupp"></i>
                  </div>
                  <span>Upwork</span>
                </button>
                <button className="btn btn-contraa">
                  <img src={contraIcon} alt="Contra Icon" className="img-fluidcontra imgcontraa" />
                </button>
              </div>
              <div className="text-center text-lg-start">
                <img src={upworkBadge} alt="Upwork Badge" className="img-fluid toprated" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-5 text-center order-1 order-md-2">
            <img src={dhavalBhimani} alt="Dhaval Bhimani" className="img-fluid secondimg" />
          </div>
        </div>
      </div>
    );
  };

export default HomeSection;
