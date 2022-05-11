import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoR,
  Col1,
  TextWrapper,
  MainLine,
  H1,
  Title,
  BTNContainer,
  BTN,
  Col2,
  ImgContainer,
  Img,
} from "./infoComponents";

const InfoTab = ({
  lightBg,
  id,
  imgStart,
  mainLine,
  h1,
  title,
  btnLabel,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoR imgStart={imgStart}>
            <Col1>
              <TextWrapper>
                <MainLine>{mainLine}</MainLine>
                <H1>{h1}</H1>
                <Title>{title}</Title>
                <BTNContainer>
                  <BTN to="home">{btnLabel}</BTN>
                </BTNContainer>
              </TextWrapper>
            </Col1>
            <Col2>
              <ImgContainer>
                <Img src={img} alt={alt} />
              </ImgContainer>
            </Col2>
          </InfoR>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoTab;
