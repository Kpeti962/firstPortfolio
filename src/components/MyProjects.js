import React, { useState } from "react";
import musicPlayer from "../img/musicPlayer.png";
import shoppingList from "../img/shoppingList.png";
import pizzaComparison from "../img/pizzaComparison.png";
import petipizza from "../img/petipizza.png";
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
      text: "That Shopping List was my first react application. Its appearance and some functions still need to be refined, but in essence it works properly. I like the way the shopping list application is built, as there are a lot of functions that need to be used in everyday programming.",
      links: {
        projectLink: "https://kpeti962.github.io/ReactShoppingList/",
        githubLink: "https://github.com/Kpeti962/ReactShoppingList",
      },
      isHovering: isHoveringShoppingList,
      setterFnc: setIsHoveringShoppingList,
    },
    {
      projectName: "Music Player",
      imgSrc: musicPlayer,
      text: " I watch a lot of courses that I can learn from, and I created this music player application during one of the course materials. Making this was very exciting and full of obstacles, so I really enjoyed it.",
      links: {
        projectLink: "https://kpeti962.github.io/musicPlayerReact/",
        githubLink: "https://github.com/Kpeti962/musicPlayerReact",
      },
      isHovering: isHoveringMusicPlayer,
      setterFnc: setIsHoveringMusicPlayer,
    },
    {
      projectName: "Pizza Comparison",
      imgSrc: pizzaComparison,
      text: "This idea was born when I was a student, when we still had to spend a little money in the dormitory. This project is rudimentary. I would like to expand it with other types of food and additional comparison options.",
      links: {
        projectLink: "https://kpeti962.github.io/reactPizzaComparison/",
        githubLink: "https://github.com/Kpeti962/reactPizzaComparison",
      },
      isHovering: isHoveringPizzaComparison,
      setterFnc: setIsHoveringPizzaComparison,
    },
    {
      projectName: "Restaurant",
      imgSrc: petipizza,
      text: "This is the latest website I'm making. I intend this to be a bigger project and I'm trying to put everything I can into it, that's why this is not a finished website, it's under continuous development.",
      links: {
        projectLink: "https://kpeti962.github.io/peti_pizza",
        githubLink: "https://github.com/Kpeti962/peti_pizza",
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
            <h3>{project.projectName}</h3>
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
            <h4>{project.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
