import React from "react";
import styled from "styled-components";

const TitleComponent = ({ title }) => {
 

  return (
    <StyledTitle>
      {title}
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 80px;
  position: sticky;
  top: 5px;
  color: #767779;
`;

export default TitleComponent;
