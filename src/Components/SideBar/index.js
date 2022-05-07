import React from "react";
import {
  Container,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBarBTNWrappe,
  SideBarBTNLink,
} from "./sideBarComponents";
const SideBar = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="home">Home</SideBarLink>
          <SideBarLink to="about">About</SideBarLink>
          <SideBarLink to="services">3D-States</SideBarLink>
          <SideBarLink to="services-1">3D-Printing Services</SideBarLink>
          <SideBarLink to="blog">Blog</SideBarLink>
        </SideBarMenu>
        <SideBarBTNWrappe>
          <SideBarBTNLink to="/signin">Join Community</SideBarBTNLink>
        </SideBarBTNWrappe>
      </SideBarWrapper>
    </Container>
  );
};

export default SideBar;
