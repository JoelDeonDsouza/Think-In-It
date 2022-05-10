import React from "react";
import { Button } from "react-scroll";
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
  Col2,
  ImgContainer,
  Img,
} from "./infoComponents";

const InfoTab = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoR>
            <Col1>
              <TextWrapper>
                <MainLine>UpperLine</MainLine>
                <H1>Heading</H1>
                <Title>Title</Title>
                <BTNContainer>
                  <Button to="home" />
                </BTNContainer>
              </TextWrapper>
            </Col1>
            <Col2>
              <ImgContainer>
                <Img />
              </ImgContainer>
            </Col2>
          </InfoR>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoTab;
