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
          <Logo to="/">Think-3DDD</Logo>
          <Icon onClick={toggle}>
            <FaBars />
          </Icon>
          <NavMenu>
            <NavItem>
              <Links to="info">Home</Links>
            </NavItem>
            <NavItem>
              <Links to="printInfo">About</Links>
            </NavItem>
            <NavItem>
              <Links to="orthoInfo">3D-States</Links>
            </NavItem>
            <NavItem>
              <Links to="ecoInfo">3D-Printing Services</Links>
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
