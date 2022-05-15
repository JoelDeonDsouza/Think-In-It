import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer`
  background: #205375;
`;

export const Wrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const LinkTitle = styled.h1`
  color: #79dae8;
  font-size: 1.5rem;
  margin-bottom: 16px;
`;

export const LinkText = styled(Link)`
  color: #f2f2f2;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 20px;

  &:hover {
    color: #000;
    transition: 0.3s ease-out;
  }
`;

export const Media = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const MWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const Logo = styled(Link)`
  color: #f2f2f2;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const Rights = styled.small`
  color: #f2f2f2;
  margin-bottom: 16px;
`;
export const SocialIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
