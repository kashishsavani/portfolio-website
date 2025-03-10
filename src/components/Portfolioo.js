import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {
  const [category, setCategory] = useState("development");
  const [visibleCards, setVisibleCards] = useState(2);

  const portfolioItems = [
    { id: 1, img: "./img/portfolio-3.png", logo: "./img/images/logo-3.png", name: "AppatMe", category: "development" },
    { id: 2, img: "./img/portfolio-6.png", logo: "./img/images/logo-6.png", name: "Uphabit", category: "development" },
    { id: 3, img: "./img/portfolio-12.png", logo: "./img/images/logo-12.png", name: "Outgoer", category: "development" },
    { id: 4, img: "./img/portfolio-12 (1).png", logo: "./img/images/logo-12.png", name: "Outgoer", category: "development" },
    { id: 5, img: "./img/portfolio-14.png", logo: "./img/images/logo-12.png", name: "Outgoer", category: "development" },
    { id: 6, img: "./img/portfolio-15.png", logo: "./img/images/logo-12.png", name: "Outgoer", category: "development" },

    { id: 7, img: "./img/portfolio-1.png", logo: "./img/images/logo-1.png", name: "Faras E-commerce", category: "designing" },
    { id: 8, img: "./img/portfolio-2.png", logo: "./img/images/logo-2.png", name: "Hinotes", category: "designing" },
    { id: 9, img: "./img/portfolio-4.png", logo: "./img/images/logo-2.png", name: "Hinotes", category: "designing" },
    { id: 10, img: "./img/portfolio-5.png", logo: "./img/images/logo-2.png", name: "Hinotes", category: "designing" },
    { id: 11, img: "./img/portfolio-7.png", logo: "./img/images/logo-2.png", name: "Hinotes", category: "designing" },
    { id: 12, img: "./img/portfolio-8.png", logo: "./img/images/logo-2.png", name: "Hinotes", category: "designing" },
    { id: 13, img: "./img/portfolio-10.png", logo: "./img/images/logo-2.png", name: "Hinotes", category: "designing" },
    { id: 14, img: "./img/portfolio-11.png", logo: "./img/images/logo-2.png", name: "Hinotes", category: "designing" },
  ];

  const filteredItems = portfolioItems.filter((item) => item.category === category);
  const visibleItems = filteredItems.slice(0, visibleCards);

  return (
    <div className="portfolio">
      <h1>My <span>Portfolio</span></h1>
      <p>Discover my impressive app development portfolio, showcasing a diverse range of innovative and user-centric mobile applications. Each project exemplifies my commitment to delivering exceptional user experiences while harnessing cutting-edge technology.</p>
      
      <div className="btn-group gap-3">
        <button className={`btn btn-custom ${category === "development" ? "btn-yellow" : ""}`} onClick={() => setCategory("development")}>
          Development
        </button>
        <button className={`btn btn-custom ${category === "designing" ? "btn-yellow" : ""}`} onClick={() => setCategory("designing")}>
          Designing
        </button>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          {visibleItems.map((item) => (
            <div key={item.id} className="col-md-5 col-sm-10 mb-4">
              <div className="card custom-card">
                <img src={item.img} className="card-img-top" alt="App" />
                <div className="card-body">
                  <h5 className="card-title">
                    <div className="custom-app-card"> 
                      <img src={item.logo} alt="App Logo" className="custom-app-logo" />
                      <span className="text-start">{item.name}<br />Development</span>
                    </div>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {visibleCards < filteredItems.length && (
        <div className="d-flex justify-content-center mt-4">
          <button className="btn fw-bold px-4 py-2 load-more-btn" onClick={() => setVisibleCards(visibleCards + 2)}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;