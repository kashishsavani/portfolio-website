import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const skillsData = [
  {
    category: "UI/UX Design",
    skills: ["Figma", "XD", "Illustrator", "Photoshop"],
  },
  {
    category: "iOS Development",
    skills: [
      "MVVM",
      "Swift",
      "Objective-C",
      "XIB",
      "Storyboard",
      "iOS Framework",
      "API Integration",
      "App Store Guidelines",
    ],
  },
  {
    category: "Android Development",
    skills: [
      "MVVM",
      "Retrofit",
      "RxJava",
      "Dagger",
      "Jetpack",
      "Android Framework",
      "Kotlin",
      "Version Control",
    ],
  },
  {
    category: "Flutter Development",
    skills: [
      "GetX",
      "Provider",
      "Bloc",
      "Riverpod",
      "Drift",
      "Firebase Integration",
      "Testing and Debugging",
    ],
  },
];

const SkillsSection = () => {
  return (
    <div className="skillcontainer">
      <div className="container mt-4">
        {/* Heading */}
        <h2 className="skills-heading">
          My <span>Skills</span>
        </h2>

        <div className="row">
          {/* Skills List */}
          <div className="col-md-6">
            {skillsData.map((skillSet, index) => (
              <div className="skill-box mb-3" key={index}>
                <h5>{skillSet.category}</h5>
                <div className="skill-tags gap-3">
                  {skillSet.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Image */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src="./img/skills.svg"
              alt="Skills Illustration"
              className="img-fluid"
              style={{ maxWidth: "80%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
