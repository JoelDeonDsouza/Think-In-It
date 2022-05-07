import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkItems } from "react-scroll";

export const Container = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #f9f3ee;
  display: grid;
  algin-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  ${
    "" /* opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isolation }) => (isOpen ? "0" : "-100%")}; */
  }
  top:0;
`;

export const CloseIcon = styled(FaTimes)`
  color: #000000;
`;

export const Icon = styled.div`
  pointer: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SideBarWrappe = styled.div`
  color: #000;
`;

export const SideBarLink = styled(LinkItems)`
  display: flex;
  align-items: center;
`;
