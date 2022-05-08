import React, { useState } from "react";
import Video from "../../../src/Video/video.mp4";
import {
  Container,
  HeroBg,
  VideoBg,
  HeroText,
  Heroh1,
  Heroh2,
  HeroBtn,
  BTN,
  ArrowForward,
  ArrowRight,
} from "./heroComponents";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Container>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="Video/mp4" />
      </HeroBg>
      <HeroText>
        <Heroh1>Giving power to your design!</Heroh1>
        <Heroh2>Bring your Design to life with us</Heroh2>
        {/* <HeroBtn>
          <BTN to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Start now {hover ? <ArrowForward /> : <ArrowRight />}
          </BTN>
        </HeroBtn> */}
      </HeroText>
    </Container>
  );
};

export default HeroSection;
