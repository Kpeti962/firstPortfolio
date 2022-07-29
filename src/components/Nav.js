import React from 'react';
import styled from "styled-components";




const Nav = () => {
    return (
      <StyledNav>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>My Projects</li>
        </ul>
      </StyledNav>
    );
  };
  
  const StyledNav = styled.nav`
    background: #242933;
    padding-right: 5rem;
    display: flex;
    justify-content: right;
    align-items: center;
    color: white;
    position: sticky;
    top: 0;
    cursor: pointer;
    ul {
      display: flex;
      
      justify-content: space-around;
      li{
          margin: 0rem 3rem 0rem 3rem;
          list-style-type: none;
          
          :hover{
            background: gray;
            transition: all ease-in-out 0.2s;
            border-radius: 10px;
          }
      }
    }
  `;


export default Nav