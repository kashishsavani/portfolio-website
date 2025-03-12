import React, { useState, useEffect } from "react";
import "../Testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ben T",
    review:
      "I've been hiring Freelancers for 10 years, Dhaval is by far the best freelancer I've ever worked with. He has great knowledge, great communication, and delivers on time!\n\nWe are already working on our next project for him and his team!\n\nDon't hesitate, he is worth every penny.",
  },

  {
    name: "Viktor Vucinic",
    review:
      "Dhaval delivered good work on this project. His communication was very good and his skills were reasonably strong. He finished most of the job tasks and for the part that was not done, he was very fair and refunded me. Was a pleasure working with him. Best recommendations!",
  },
  {
    name: "Mathieu T",
    review:
      "Dhaval is Simply Amazing! Do not hesitate one second before hiring him for your projects. We have been working with him for 6 months now and they have overachieved our expectation.\n\nWe are starting a new mobile app in the next couple of months and we will rehire Dhaval!\n\nWe have been using Freelancer platforms for over 10 years and this freelancer is a sure shot!",
  },
  {
    name: "Anthony Z",
    review:
      "Working with Dhaval has been an absolute pleasure. His attention to detail and dedication to the project were outstanding!\n\nDhaval is amazing to work with! He delivered exactly what was needed down to the very last detail. The project was well organized and the code was easy to follow. Dhaval is very communicative and provides an extremely fast delivery of high-quality work. I can’t recommend him enough.\n\n*** Excellent work\n\n*** Strong attention to detail\n\n*** Fast turnaround\n\n*** Great communication",
  },
  {
    name: "Anthony Z",
    review:
      "Professional, efficient, and highly skilled! I will definitely work with Dhaval again in the future.\n\nIt's always a pleasure working with Dhaval. I look forward to working with him much more in the future. He's one of the best developers you're going to find.",
  },
  {
    name: "Michel Triana",
    review:
      "Great experience! Dhaval's expertise made a huge difference in the success of our project.\n\nDhaval is one of the best and most responsive developers I've worked with.",
  },
  {
    name: "Meredith Golden",
    review:
      "Dhaval is amazing: smart, organized, efficient! He problem solved issues before I even knew that they needed to be solved. I feel lucky to have been connected with him and I will 100% work with him in the future! He is a true gem!",
  },
  {
    name: "Jimmy Knudsen",
    review:
      "I have been working with Dhaval for a long time and it has been a real pleasure. I will definitely ask him again the next time I get a similar job.",
  },
  {
    name: "Justin Hrischuk",
    review:
      "Dhaval is excellent! I would use him again in the future. He is reliable at communicating and keeping you up to date with his progress. He has an eye for details and will give you something as good, or better, than you requested.",
  },
  {
    name: "Michel Triana",
    review:
      "Dhaval has been professional and committed during our collaboration to deliver the end product. I had a great time working with Dhaval and highly recommend him to anyone looking for a talented developer.",
  },
  {
    name: "Will LeMaire",
    review:
      "Dhaval is a top notch developer and communicator - I highly recommend. He is very responsive to requests or changes, and creatively finds solutions to complex problems. He is accurate with his time estimates and delivers on time.",
  },
  {
    name: "Martin Muriithi",
    review:
      "Great talent, dedication, and the outstanding quality of their work. The patient app they crafted was visually appealing, incredibly functional, providing a seamless experience for users. The code they produced was clean, well-structured, and highly efficient. Exceeded all expectatio",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container text-center mt-5" id="testimonials">
      <h2 className="fw-bold">
        My <span style={{ color: "#e7b900" }}>Testimonials</span>
      </h2>
      <p className="mt-3 text-muted">
        My clients have faith in me. I’m always keep them ahead of their
        competitors by serving them top notch IT solutions. They have never
        diminishing faith in me, and thus, they work with me time and again.
      </p>

      <div className="custom-carousel-container mt-5">
        <div
          className="custom-carousel-wrapper"
          style={{
            display: "flex",
            overflowX: "auto",
            alignItems: "flex-start",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              className="custom-testimonial-card p-3 mx-2"
              key={index}
              style={{
                flexDirection: "column",
                height: "auto",
                minHeight: "300px",
              }}
            >
              <p className="text-start">"{testimonial.review}"</p>
              <div className="client-name d-flex mt-4">
                <div className="client-name-rating d-flex px-3">
                  <div className="client-pro">
                    <img src="./img/upwork-badge.svg" alt="" height="55px" />
                  </div>
                  <div
                    className="client-name-rating px-3"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <h5 className="fw-bold">{testimonial.name}</h5>
                    <div className="d-flex align-items-center text-warning">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
