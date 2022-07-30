import React from "react";
import vanilla from "../img/vanillasJS.png";
import react from "../img/react.png";
import TitleComponent from "./TitleComponent";

const MySkills = () => {
  const skillsArray = [
    {
      src: vanilla,
      text: "Like many people who start learning javascript, I started usingvanilla js to learn the basics of this language.",
    },
    {
      src: react,
      text: "As I felt more and more confident, I started learning to program in react and I was impressed by how much different, more difficult, but still much simpler programming in react is.",
    },
    {
      src: "",
      text: "asdasdasdasdas asd asd as dasd as das das das das ",
    },
    {
      src: "",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nisi perferendis pariatur, voluptatum enim ducimus illo officiis dolorem commodi natus.",
    },
  ];

  return (
    <div className="mySkillsSection">
      <TitleComponent title={"My Skills"} />
      <div className="skillsContainer">
        {skillsArray.map((skill, index) => (
          <div key={index} className="skillCard">
            <img src={skill.src} alt={skill.src} />
            <h4>{skill.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
