import React from "react";
import vanilla from "../img/vanillasJS.png";
import react from "../img/react.png";
import css from "../img/css.png";
import html from "../img/html.png";
import tailwind from "../img/tailwind.png";
import firebase from "../img/firebase.png";
import TitleComponent from "./TitleComponent";


const MySkills = () => {
  const skillsArray = [
    {
      src: html,
      text: "- Basics, Structure construction, Forms and validation ",
    },
    {
      src: css,
      text: "Basics, Responsive design basics, Flex-box, Keyframes, Animations, Framer motions, ",
    },
    {
      src: vanilla,
      text: "Like many people who start learning javascript, I started using vanilla js to learn the basics of this language. I've learnt DOM manipulation, loops, syntax and basic construct and many other cool stuff.",
    },
    {
      src: react,
      text: "As I felt more and more confident, I started learning to program in ReactJS and I was impressed by how much different, more difficult, but still much simpler programming in React is.",
    },
    {
      src: tailwind,
      text: "I like to use the Bootstrap too, but I prefer Tailwind CSS as a third party library",
    },
    {
      src: firebase,
      text: "I started to learn the backend through Firebase",
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
