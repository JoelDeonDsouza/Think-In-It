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
  NavBTN,
  NavBTNLink,
} from "./headerComponents";

const Header = ({ toggle }) => {
  return (
    <>
      <Nav>
        <Container>
          <Logo to="/">Think-In-It</Logo>
          <Icon onClick={toggle}>
            <FaBars />
          </Icon>
          <NavMenu>
            <NavItem>
              <Links to="home">Home</Links>
            </NavItem>
            <NavItem>
              <Links to="about">About</Links>
            </NavItem>
            <NavItem>
              <Links to="services">3D-States</Links>
            </NavItem>
            <NavItem>
              <Links to="services-1">3D-Printing Services</Links>
            </NavItem>
            <NavItem>
              <Links to="blog">Blog</Links>
            </NavItem>
          </NavMenu>
          <NavBTN>
            <NavBTNLink to="/signin">Join Community</NavBTNLink>
          </NavBTN>
        </Container>
      </Nav>
    </>
  );
};

export default Header;
