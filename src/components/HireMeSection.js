import React from "react";

const HireMeSection = () => {
  return (
    <div className="mainl">
      <div className="hiremain">
        <div className="main2l">
          <div className="innmain">
            <p className="fw-bold">Hire Me!</p>
            <div className="d-flex mt-3 gap-3">
              <button
                className="btn upworkk d-flex align-items-center"
                style={{
                  width: "115px",
                  fontSize: "14px",
                  padding: "8px 12px",
                }}
                onClick={() =>
                  (window.location.href =
                    "https://www.upwork.com/freelancers/dhavalb17")
                }
              >
                <div className="mainiconn">
                  <i className="fa-brands fa-upwork iconupp"></i>
                </div>
                <span>Upwork</span>
              </button>
              <button
                className="btn btn-contraa"
                style={{
                  width: "110px",
                  fontSize: "14px",
                  padding: "2px 12px",
                }}
                onClick={() =>
                  (window.location.href =
                    "https://contra.com/dhaval_bhimani_1?utm_campaign=HireMeOnContra&utm_medium=9c861776-37b4-4f23-85e3-d3394b2ecfda")
                }
              >
                <img
                  src="./img/contra-icon.svg"
                  alt="Contra Icon"
                  className="img-fluid imgcontraa"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMeSection;
