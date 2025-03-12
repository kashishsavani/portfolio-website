import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../ServicesSection.css";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState("uiux");

  const services = [
    {
      id: "uiux",
      icon: "fas fa-pen",
      name: "UI/UX Design",
      description:
        "Enhance your digital presence with my UI/UX design services. I specialize in creating visually appealing and user-friendly interfaces that engage users and improve their experience. With a focus on user behavior and attention to detail, I offer tailored designs for consumer apps, enterprise platforms, and innovative web solutions. From wireframing to final implementation, I prioritize your goals and user needs. Let’s turn your ideas into impactful designs—contact me today!",
    },
    {
      id: "ios",
      icon: "fab fa-apple",
      name: "iOS Development",
      description:
        "Unleash the power of iOS with my top-notch development services. I specialize in Swift and Objective-C to deliver robust and intuitive apps. Let me transform your iOS app idea into reality—contact me today! ",
    },
    {
      id: "android",
      icon: "fab fa-android",
      name: "Android Development",
      description:
        "Harness the power of Android with our expert development services. I'm specialize in creating dynamic and user-centric Android applications tailored to your specific needs. With our deep understanding of Android technologies and frameworks, I'll deliver high-quality apps that engage users and drive business growth. From ideation and design to development, testing, and deployment, I'm following a systematic approach to ensure exceptional results. I'll leverages the latest tools and programming languages, such as Java and Kotlin, to build robust and scalable applications. Let me bring your Android app idea to life and unlock its full potential. Contact me today for top-notch Android development services.",
    },
    {
      id: "flutter",
      icon: "fas fa-code",
      name: "Flutter Development",
      description:
        "Unlock the potential of cross-platform app development with our Flutter expertise. I'm specialize in creating beautiful and high-performing applications using the Flutter framework. Whether you need an app for iOS, Android, or both, Flutter allows me to build seamless experiences that delight users on every platform. With Flutter's rich set of widgets, I'll create visually stunning interfaces and deliver exceptional performance. I'm following best practices and stays up-to-date with the latest features and enhancements. Let me bring your app idea to life with Flutter and deliver a truly cross-platform masterpiece. Contact me today for top-notch Flutter development services.",
    },
  ];

  return (
    <div className="container-fluid servicess" id="services">
      <div className="container mainservices">
        {/* Title Section */}
        <div className="text-center mb-4">
          <h3 className="myservices">My Services</h3>
          <h1 className="provide">
            I Provide Awesome <span className="toyou">Service</span> To You
          </h1>
        </div>

        {/* Services Menu and Content */}
        <div className="d-flex inservices">
          {/* Sidebar Menu */}
          <div className="sidebar">
            {services.map((service) => (
              <div
                key={service.id}
                className={`menu-item ${
                  activeService === service.id ? "active" : ""
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <i className={service.icon}></i> <span>{service.name}</span>{" "}
                <i className="fas fa-chevron-right"></i>
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="content">
            {services.map((service) => (
              <div
                key={service.id}
                className={`content-section ${
                  activeService === service.id ? "active" : ""
                }`}
              >
                <h2 className="fw-bold d-flex justify-content-start fs-4">
                  {service.name}
                </h2>
                <p className="enhance ">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
