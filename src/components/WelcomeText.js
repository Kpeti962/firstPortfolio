import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { titleAnim, nameAnim } from "../animations";
import styled from "styled-components";
import Lines from "./Lines";

const WelcomeText = () => {
  return (
    <StyledPres>
      <StyledSummary variants={titleAnim} initial="hidden" animate="show">
        <StyledNameAndJob variants={nameAnim} initial="hidden" animate="show">
          Hello, I'm Péter Koncz,
        </StyledNameAndJob>
        <StyledNameAndJob variants={nameAnim} initial="hidden" animate="show">
          and I am going to be a Junior Frontend Developer
        </StyledNameAndJob>
      </StyledSummary>
      <Lines />
    </StyledPres>
  );
};

const StyledPres = styled.div`
  width: 100%;
  height: calc(100vh - 9px);
  transform: translateY(-20px);
  /* background: #242933; */
`;
const StyledSummary = styled(motion.div)`
  font-size: larger;
`;

const StyledNameAndJob = styled(motion.h2)`
  color: #000000;
  text-align: center;
`;

export default WelcomeText;
