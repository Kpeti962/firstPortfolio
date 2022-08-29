import React, { useEffect } from "react";
import me1 from "../img/me1.png";
import { selfImgAnim, selfShortStoryAnim } from "../animations";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import styled from "styled-components";
import TitleComponent from "./TitleComponent";

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="aboutMeSection">
      <TitleComponent title={"About me"} />
      <div className="shortStoryAndImg">
        <div className="selfImg">
          <img src={me1} />
        </div>
        <div className="shortStory">
          <h3>
            I graduated in tourism and hospitality in January 2021 during the
            covid period, so I couldn't take part in an internship and I worked
            in a completely different position for a year after that, as an
            administrator in a great team and already in the meantime I was
            planning that I would have to change, because I didn't feel that
            hospitality could bring change in my life ever and I decided to
            learn to program. I have been learning to be a frontend developer
            since May 2022 under the influence of one of my friends, and I
            completed a frontend developer online training at EPAM Systems Inc.
            The more I delved deeper into its mysteries, the more I liked this
            profession. I know I still have a long way to go, but I think I'm on
            the right track. In this portfolio I try to show everything I've
            learned so far.
            <h2>And the journey continues...</h2>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
