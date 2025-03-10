import React from "react";
// import "./Portfolio.css"; // Make sure to add your CSS styles

const portfolioItems = [
  { logo: "./img/images/logo-1.png", name: "Faras", stores: ["appstore", "playstore"] },
  { logo: "./img/images/logo-2.png", name: "Hinotes", stores: ["appstore"] },
  { logo: "./img/images/logo-3.png", name: "AppatMe", stores: ["appstore"] },
  { logo: "./img/images/logo-4.png", name: "Tomoh", stores: [] },
  { logo: "./img/images/logo-5.png", name: "Site Note", stores: ["appstore"] },
  { logo: "./img/images/logo-6.png", name: "Uphabit", stores: ["appstore", "playstore"] },
  { logo: "./img/images/logo-7.png", name: "GoFriends", stores: ["appstore"] },
  { logo: "./img/images/logo-8.png", name: "Golfswings", stores: [] },
  { logo: "./img/images/logo-20.png", name: "SOS", stores: [] },
  { logo: "./img/images/logo-10.png", name: "Listen2Ai", stores: [] },
  { logo: "./img/images/logo-11.png", name: "Outgoer", stores: ["appstore", "playstore"] },
  { logo: "./img/images/logo-12.png", name: "MeetUrFriends", stores: ["appstore", "playstore"] },
  { logo: "./img/images/logo-13.png", name: "Insight Timer", stores: ["appstore", "playstore"] },
  { logo: "./img/images/logo-14.png", name: "Mimizaur", stores: ["appstore", "playstore"] },
  { logo: "./img/images/logo-15.png", name: "Fitness for Kids", stores: ["appstore", "playstore"] },
  { logo: "./img/images/logo-16.png", name: "Quiz App", stores: [] },
  { logo: "./img/images/logo-17.png", name: "Meangene", stores: [] },
  { logo: "./img/images/logo-18.png", name: "Lenz", stores: ["appstore", "playstore"] },
  { logo: "./img/images/logo-19.png", name: "iNomad", stores: ["playstore"] },
];

const Portfolio = () => {
  return (
    <div className="container text-center mt-5" id="portfolio">
      <h1 className="fw-bold">
        Take A Look At My <span>Latest Portfolio</span>
      </h1>
      <p className="mt-3 text-muted">
      Welcome to my mobile app portfolio! It's proud for me to craft innovative and user-centric mobile applications that cater to various needs and industries. My portfolio represents a diverse range of projects I have successfully delivered, combining cutting-edge technology with exceptional user experiences.
      </p>

      <div className="custom-carousel-container mt-5">
        <button className="custom-carousel-btn custom-prev">&#10094;</button>
        <div className="custom-carousel-wrapper">
          {portfolioItems.map((item, index) => (
            <div className="custom-testimonial-card" key={index}>
              <img src={item.logo} alt={`${item.name} Logo`} className="custom-app-logo" />
              <span>{item.name}</span>
              <div className="custom-store-icons d-flex">
                {item.stores.includes("appstore") && (
                  <img src="./img/images/appstore.svg" alt="Apple Store" />
                )}
                {item.stores.includes("playstore") && (
                  <img src="./img/images/playstore.svg" alt="Google Play" />
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="custom-carousel-btn custom-next">&#10095;</button>
      </div>
    </div>
  );
};

export default Portfolio;
