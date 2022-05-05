import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  Container,
  Logo,
  Icon,
  NavMenu,
  NavItem,
  Links,
} from "./headerComponents";

const Header = () => {
  return (
    <>
      <Nav>
        <Container>
          <Logo to="/">Think-In-It</Logo>
          <Icon>
            <FaBars />
          </Icon>
          <NavMenu>
            <NavItem>
              <Links to="about">About</Links>
            </NavItem>
          </NavMenu>
        </Container>
      </Nav>
    </>
  );
};

export default Header;
