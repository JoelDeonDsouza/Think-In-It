import React from "react";
import { Button } from "react-scroll";

const InfoTab = () => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoR>
            <Col1>
              <TextWrapper>
                <MainLine>UpperLine</MainLine>
                <H1>Heading</H1>
                <Title>Title</Title>
                <BTNContainer>
                  <Button to="home">Click here</Button>
                </BTNContainer>
              </TextWrapper>
            </Col1>
          </InfoR>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoTab;
