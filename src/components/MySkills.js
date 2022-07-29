import React from "react";
import vanilla from "../img/vanillasJS.png";
import react from "../img/react.png";

const MySkills = () => {
  return (
    <div className="mySkillsSection">
      <div className="mySkillsTitle">My Skills</div>
      <div className="skills">
        <div className="vanillasection">
          <img src={vanilla} alt="vanilla" />
          <h4>
            Like many people who start learning javascript, I started using
            vanilla js to learn the basics of this language.
          </h4>
        </div>
        <div className="reactSection">
          <img src={react} alt="react" />
          <h4>
            As I felt more and more confident, I started learning to program in
            react and I was impressed by how much different, more difficult, but
            still much simpler programming in react is.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
