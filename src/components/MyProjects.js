import React, { useState } from "react";
import musicPlayer from "../img/musicPlayer.png";
import shoppingList from "../img/shoppingList.png";
import pizzaComparison from "../img/pizzaComparison.png";
import TitleComponent from "./TitleComponent";

const MyProjects = () => {
  const [isHoveringShoppingList, setIsHoveringShoppingList] = useState(false);
  const [isHoveringMusicPlayer, setIsHoveringMusicPlayer] = useState(false);
  const [isHoveringPizzaComparison, setIsHoveringPizzaComparison] =
    useState(false);

  const hoverHandler = (project) => {
    project.setterFnc(!project.isHovering);
  };

  const buttonClickHandler = (project, type) => {
    if (type === "project") {
      window.open(project.links.projectLink, "_blank");
    } else if (type === "code") {
      window.open(project.links.githubLink, "_blank");
    }
  };

  const projectArray = [
    {
      projectName: "Shopping List",
      imgSrc: shoppingList,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,est.",
      links: {
        projectLink: "",
        githubLink: "",
      },
      isHovering: isHoveringShoppingList,
      setterFnc: setIsHoveringShoppingList,
    },
    {
      projectName: "Music Player",
      imgSrc: musicPlayer,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,est.",
      links: {
        projectLink: "",
        githubLink: "",
      },
      isHovering: isHoveringMusicPlayer,
      setterFnc: setIsHoveringMusicPlayer,
    },
    {
      projectName: "Pizza Comparison",
      imgSrc: pizzaComparison,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,est.",
      links: {
        projectLink: "",
        githubLink: "",
      },
      isHovering: isHoveringPizzaComparison,
      setterFnc: setIsHoveringPizzaComparison,
    },
  ];
  
  return (
    <div className="myProjectsSection">
      <TitleComponent title={"My Projects"} />
      <div className="projectWrapper">
        {projectArray.map((project, index) => (
          <div key={index} className="projectCard">
            <h4>{project.projectName}</h4>
            <div
              onMouseEnter={() => hoverHandler(project)}
              onMouseLeave={() => hoverHandler(project)}
              className="projectImgWrapper"
            >
              <img src={project.imgSrc} alt={project.projectName} />
              {project.isHovering && (
                <div className="projectCardButtonWrapper">
                  <button
                    onClick={() => buttonClickHandler(project, "project")}
                  >
                    Go to project
                  </button>
                  <button onClick={() => buttonClickHandler(project, "code")}>
                    Go to code
                  </button>
                </div>
              )}
            </div>
            <h5>{project.text}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
