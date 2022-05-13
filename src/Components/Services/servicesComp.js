import styled from "styled-components";

export const Container = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #c4ddff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const Serh1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Swrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const SCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  max-height: 390px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const SIcon = styled.img`
  height: 180px;
  width: 180px;
  margin-bottom: 10px;
`;

export const Serh2 = styled.h2`
  font-size: 1.2 rem;
  margin-bottom: 12px;
  color: #035397;
`;

export const SerP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #205375;
`;
