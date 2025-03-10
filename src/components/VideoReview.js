import React from "react";

const VideoReview = () => {
  return (
    <div className="row d-flex justify-content-center align-items-center mt-5">
      <div className="col-12 d-flex align-items-center justify-content-center">
        <div className="videos-slider">
          <div className="video-review">
            <a
              href="https://www.youtube.com/watch?v=dnCQ_SQieVo"
              className="youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="video-container"
                style={{
                  backgroundImage: "url(./img/video-1.png)",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="./img/play-btn.svg"
                  alt="Play Button"
                  style={{
                    width: "50px",
                    height: "50px",
                    position: "absolute",
                  }}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoReview;
