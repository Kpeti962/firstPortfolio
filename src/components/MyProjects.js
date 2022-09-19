import React, { useState } from "react";
import musicPlayer from "../img/musicPlayer.png";
import shoppingList from "../img/shoppingList.png";
import pizzaComparison from "../img/pizzaComparison.png";
import petipizza from "../img/petipizza.png";
import todo from "../img/todo.png";
import weather from "../img/weather.png";
import restaurant from "../img/restaurant.png";
import TitleComponent from "./TitleComponent";

const MyProjects = () => {

  const [isHoveringMusicPlayer, setIsHoveringMusicPlayer] = useState(false);
  const [isHoveringPizzaComparison, setIsHoveringPizzaComparison] =
  useState(false);
  const [isHoveringRestaurant, setIsHoveringRestaurant] =
  useState(false);
  const [isHoveringTodo, setIsHoveringTodo] = useState(false);
  const [isHoveringMeteorological, setIsHoveringMeteorological] =
  useState(false);
  const [isHoveringRestaurantApp, setIsHoveringRestaurantApp] = useState(false)

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
      text: "This is the latest relatively complex website I'm making. I intend this to be a bigger project and I'm trying to put everything I can into it, that's why this is not a finished website, it's under continuous development.",
      links: {
        projectLink: "https://kpeti962.github.io/peti_pizza",
        githubLink: "https://github.com/Kpeti962/peti_pizza",
      },
      isHovering: isHoveringRestaurant,
      setterFnc: setIsHoveringRestaurant,
    },
    {
      projectName: "Todo List",
      imgSrc: todo,
      text: "I love Todo Lists. You can include features that you can learn a lot from in terms of your later career. I mainly practiced Local Storage in this app.",
      links: {
        projectLink: "https://kpeti962.github.io/localStoreToDo/",
        githubLink: "https://github.com/Kpeti962/localStoreToDo",
      },
      isHovering: isHoveringTodo,
      setterFnc: setIsHoveringTodo,
    },
    {
      projectName: "Meteorological App",
      imgSrc: weather,
      text: "This program presents the weather of Hungary using a weather api. With this application, I practice the operation of the APIs, but basically I started doing it just for fun. It is a very rudimentary program and its line of code is long, full of unnecessary code, which I would like to shorten and make it more beautiful in the future, but it can be promising",
      links: {
        projectLink: "https://kpeti962.github.io/meteorologicalFunAppForApis/",
        githubLink: "https://github.com/Kpeti962/meteorologicalFunAppForApis",
      },
      isHovering: isHoveringMeteorological,
      setterFnc: setIsHoveringMeteorological,
    },
    {
      projectName: "Restaurant App",
      imgSrc: restaurant,
      text: "With this app I started to learn to work with Firebase and Tailwind CSS and I also make it with redux. I can also add products to the database, which only works when logged in from my e-mail address.",
      links: {
        projectLink: "https://kpeti962.github.io/restaurantWithFirebase/",
        githubLink: "https://github.com/Kpeti962/restaurantWithFirebase",
      },
      isHovering: isHoveringRestaurantApp,
      setterFnc: setIsHoveringRestaurantApp,
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
