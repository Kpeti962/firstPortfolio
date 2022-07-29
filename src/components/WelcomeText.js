
import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { titleAnim, nameAnim } from "../animations";
import styled from "styled-components";


const WelcomeText = () => {

    return (
        <StyledPres>
      
        <StyledSummary variants={titleAnim} initial="hidden" animate="show">
          <StyledNameAndJob
  
            variants={nameAnim}
            initial="hidden"
            animate="show"
          
          >
            Hello, I'm Péter Koncz,
          </StyledNameAndJob>
          <StyledNameAndJob variants={nameAnim} initial="hidden" animate="show">
            and I am a Junior Frontend Developer
          </StyledNameAndJob>
        </StyledSummary>
      </StyledPres>
    )
}



const StyledPres = styled.div`
  /* background: #242933; */
  transform: translateY(-20px);
`;
const StyledSummary = styled(motion.div)`
  font-size: larger;
  z-index: -100;
  
`;

const StyledNameAndJob = styled(motion.h2)`
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export default WelcomeText