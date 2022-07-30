import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <div className="contactSection">
      <StyledContactType>
        <p>
          <a href="mailto: kpeti962@gmail.com">kpeti962@gmail.com</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/p%C3%A9ter-koncz-53304720b/">
            LinkedIn
          </a>
        </p>
        <p>
          <a href="tel: +36306464894">Phone number</a>
        </p>
        <p>
          <a href="https://github.com/Kpeti962">GitHub</a>
        </p>
      </StyledContactType>
    </div>
  );
};

export default Contact;

const StyledContactType = styled.div`
  display: block;
  text-align: center;
  font-size: large;
  margin: 100px 0 100px 0;

  p {
    margin: 50px 0 50px 0;
    transition: all ease-in-out 0.4s;
    font-weight: 600;
    &:hover {
      transform: scale(1.1);
      font-weight: 800;
    }
    a {
      color: black;
    }
  }
`;
