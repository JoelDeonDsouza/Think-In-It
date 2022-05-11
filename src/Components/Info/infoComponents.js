import { Button } from "react-scroll";
import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: #f2f2f2;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 850px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoR = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"call2 call1"` : `"call1 call2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"call1 call2"` : `"call1 call1" "call2 call2" `};
  }
`;

export const Col1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: call1;
`;

export const Col2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: call2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const MainLine = styled.p`
  color: #000;
  font-size: 16px;
  line-height: 16px;
  font-weight: 900;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const H1 = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #79dae8;

  @media screen and (max-width: 768px) {
    font-size: 31px;
  }
`;

export const Title = styled.p`
  max-width: 450px;
  margin-bottom: 38px;
  font-size: 18px;
  line-height: 24px;
  color: #205375;
`;

export const BTNContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgContainer = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const BTN = styled.div`
  border-radius: 15px;
  background: #f66b0e;
  white-space: nowrap;
  padding: 10px 22px;
  color: #f8cb2e;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-decoration: none;
`;
