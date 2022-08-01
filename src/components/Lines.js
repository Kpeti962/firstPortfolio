import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { linesAnim } from "../animations";

const Lines = () => {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width="3585.248"
      height="1746.789"
      viewBox="0 0 3585.248 1746.789"
    >
      <g
        id="Group_1"
        data-name="Group 1"
        transform="translate(-108.484 -112.197)"
      >
        <motion.line
          variants={linesAnim}
          initial="hidden"
          animate="show"
          id="Line_1"
          data-name="Line 1"
          y1="433"
          x2="2104"
          transform="translate(-963.5 166.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
        <motion.line
          variants={linesAnim}
          initial="hidden"
          animate="show"
          id="Line_2"
          data-name="Line 2"
          x1="1978"
          y1="810"
          transform="translate(593.5 24.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
        <motion.line
          variants={linesAnim}
          initial="hidden"
          animate="show"
          id="Line_3"
          data-name="Line 3"
          x2="1515"
          y2="1052"
          transform="translate(520.5 -10.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
        <motion.line
          variants={linesAnim}
          initial="hidden"
          animate="show"
          id="Line_4"
          data-name="Line 4"
          x1="418"
          y2="1409"
          transform="translate(2502.5 204.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
        <motion.line
          variants={linesAnim}
          initial="hidden"
          animate="show"
          id="Line_5"
          data-name="Line 5"
          x2="2268"
          y2="80"
          transform="translate(6.5 237.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
        <motion.line
          variants={linesAnim}
          initial="hidden"
          animate="show"
          id="Line_6"
          data-name="Line 6"
          x2="375"
          y2="469"
          transform="translate(423.5 204.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
        <motion.line
          variants={linesAnim}
          initial="hidden"
          animate="show"
          id="Line_7"
          data-name="Line 7"
          x1="1812"
          y2="58"
          transform="translate(108.5 466.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
        <motion.line
          variants={linesAnim}
          initial="hidden"
          animate="show"
          id="Line_8"
          data-name="Line 8"
          x2="2802"
          y2="670"
          transform="translate(289.5 388.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
        <motion.line
          variants={linesAnim}
          initial="hidden"
          animate="show"
          id="Line_9"
          data-name="Line 9"
          x2="1144"
          y2="1301"
          transform="translate(981.5 12.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
        <motion.line
          variants={linesAnim}
          initial="hidden"
          animate="show"
          id="Line_10"
          data-name="Line 10"
          x2="46"
          y2="540"
          transform="translate(258.5 75.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
        <motion.line
          variants={linesAnim}
          initial="hidden"
          animate="show"
          id="Line_11"
          data-name="Line 11"
          y1="1353"
          x2="2587"
          transform="translate(106.5 -883.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
      </g>
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`

    
`


export default Lines
