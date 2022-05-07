import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
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
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  top: 0;
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

export const SideBarWrapper = styled.div`
  color: #000;
`;

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 85px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBarLink = styled(LinkItems)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #205375;
  cursor: pointer;

  &:hover {
    color: #000;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBarBTNWrappe = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBarBTNLink = styled(LinkRouter)`
  border-radius: 15px;
  background: #f66b0e;
  white-space: nowrap;
  padding: 16px 64px;
  color: #f8cb2e;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #f8cb2e;
    color: #f66b0e;
  }
`;
