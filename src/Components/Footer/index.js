import React from "react";
import {
  Container,
  Wrapper,
  LinkContainer,
  LinkWrapper,
  LinkItems,
  LinkTitle,
  LinkText,
  Media,
  MWrapper,
  Logo,
  Rights,
  SocialIcon,
  SocialLink,
} from "./footerComponents";

import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LinkContainer>
          <LinkWrapper>
            <LinkItems>
              <LinkTitle>About</LinkTitle>
              <LinkText to="ecoInfo">How It works</LinkText>
              <LinkText to="ecoInfo">Awards</LinkText>
              <LinkText to="ecoInfo">Services</LinkText>
              <LinkText to="ecoInfo">Store</LinkText>
              <LinkText to="ecoInfo">Careers</LinkText>
            </LinkItems>
            <LinkItems>
              <LinkTitle>Contact Us</LinkTitle>
              <LinkText to="ecoInfo">Contact</LinkText>
              <LinkText to="ecoInfo">Support</LinkText>
              <LinkText to="ecoInfo">Sponsorships</LinkText>
            </LinkItems>
          </LinkWrapper>
        </LinkContainer>
        <Media>
          <MWrapper>
            <Logo to="/">Think3DDD</Logo>
            <Rights>
              {" "}
              © {new Date().getFullYear()} Think3DDD All rights reserved
            </Rights>
            <SocialIcon>
              <SocialLink href="/" target="blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="/" target="blank" aria-label="Youtube">
                <FaYoutube />
              </SocialLink>
              <SocialLink href="/" target="blank" aria-label="Twitter">
                <FaTwitter />
              </SocialLink>
            </SocialIcon>
          </MWrapper>
        </Media>
      </Wrapper>
    </Container>
  );
};

export default Footer;
