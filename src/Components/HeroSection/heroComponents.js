import styled from "styled-components";
import { MdArrowRight, MdArrowForward } from "react-icons/md";
import { Link } from "react-scroll";

export const Container = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 725px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroText = styled.div`
  z-index: 1;
  max-width: 1100px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextStyle = styled.div`
  text-shadow: -1px -1px #9df, 1px 1px #49d, -3px 0 4px #000;
  padding: 24px 32px 32px 32px;
  font-weight: bolder;
  -moz-box-shadow: 2px 2px 6px #888;
  -webkit-box-shadow: 2px 2px 6px #888;
  box-shadow: 2px 2px 6px #888;
  display: inline;
  line-height: 60px;
  border-radius: 12px;
`;

export const Heroh1 = styled.h1`
  color: #f7f7f7;
  font-size: 65px;
  text-align: center;
  margin: 0 5px 30px;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

export const Heroh2 = styled.h2`
  margin-top: 24px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin: 0 5px 20px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const HeroBtn = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BTN = styled(Link)`
  border-radius:15px;
  background:${({ primary }) => (primary ? "#205375" : "#112B3C")};
  white-space:nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#187498" : "#36AE7C")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline:none;
  border:none;
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  transition: all 0.3s ease-in-out;

 &:hover{
    transition: all 0.3s ease-in-out;
    background:{({primary}) => (primary ? "#112B3C" :  "#205375" )};
 }

`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
