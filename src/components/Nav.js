import React from "react";
import styled from "styled-components";

const Nav = () => {
  
  //Not ready for showing

/*   const navElements = [
    { name: "Welcome Text", src: "" },
    { name: "About Me ", src: "" },
    { name: "My Skills", src: "" },
    { name: "My Projects", src: "" },
    { name: "Contact", src: "" },
  ]; */

  const navElementClickHandler = (element) => {
    if (element.name === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <StyledNav>
      <div className="homeWrapper">
        <div
          className="navItem"
          onClick={() => navElementClickHandler({ name: "Home", src: "" })}
        >
          Home
        </div>
      </div>
     {/*  <ul>
        {navElements.map((element, index) => (
          <li
            className="navItem"
            key={index}
            onClick={() => navElementClickHandler(element)}
          >
            {element.name}
          </li>
        ))}
      </ul> */}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  z-index: 2;
  background: #242933;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: fixed;
  top: 0;
  cursor: pointer;
  ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
  }
  .navItem {
    padding: 8px;
    margin: 0 10px;
    list-style-type: none;
    border-radius: 10px;
    transition: all ease-in-out 0.2s;
    :hover {
      background: gray;
    }
  }
  .homeWrapper {
    width: 50%;
    display: flex;
    justify-content: center;

    div {
      width: fit-content;
    }
  }
`;

export default Nav;
