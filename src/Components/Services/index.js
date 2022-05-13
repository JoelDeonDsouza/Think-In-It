import React from "react";
import {
  Container,
  Serh1,
  Swrapper,
  SCard,
  SIcon,
  Serh2,
  SerP,
} from "./servicesComp";
import Icon1 from "../../Images/icon1.png";
import Icon2 from "../../Images/icon2.png";
import Icon3 from "../../Images/icon3.png";

const Services = () => {
  return (
    <>
      <Container id="services">
        <Serh1>Our products and services</Serh1>
        <Swrapper>
          <SCard>
            <SIcon src={Icon3} />
            <Serh2>3D printing service</Serh2>
            <SerP>
              Are you looking for individual spare parts, trophies, prototypes
              or advertising material? Maybe even as a small series or made of
              green materials? We'll help you with modeling and 3D printing!
            </SerP>
          </SCard>

          <SCard>
            <SIcon src={Icon1} />
            <Serh2>Antiviral Doorknobs</Serh2>
            <SerP>
              Worried about viruses and bacteria on your doorknob? Our
              antimicrobial doorknobs quickly kill viruses and bacteria thanks
              to integrated nano-copper. Adaptable to all your doorknobs
            </SerP>
          </SCard>

          <SCard>
            <SIcon src={Icon2} />
            <Serh2>VE Torthi</Serh2>
            <SerP>
              Your darling has injured himself and needs support? We offer you
              our individual, gentle, and inexpensive support sleeve or
              orthosis! In some cases, even surgeries can be averted!
            </SerP>
          </SCard>
        </Swrapper>
      </Container>
    </>
  );
};

export default Services;
