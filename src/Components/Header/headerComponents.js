import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkItems } from "react-scroll";

export const Nav = styled.nav`
  background: #205375;
  height: 90px;
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.9s all ease;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const Logo = styled(LinkRouter)`
  color: #79dae8;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const Icon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.6rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const Links = styled(LinkItems)`
  color: #f2f2f2;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  padding: 0 1rem;

  &.active {
    border-bottom: 3px solid #0aa1dd;
  }
`;

export const NavBTN = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBTNLink = styled(LinkRouter)`
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

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #f8cb2e;
    color: #f66b0e;
  }
`;
