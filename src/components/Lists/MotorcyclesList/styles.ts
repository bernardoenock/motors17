import styled from "styled-components";

export const TitleContainer = styled.h1`
  font-family: "Lexend", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColors.subTitle};
  margin: 35px 0 55px 0;
  width: 100%;
  padding-left: 16px;

  @media only screen and (min-width: 375px) {
    padding-left: 20px;
  }
  @media only screen and (min-width: 768px) {
    padding-left: 40px;
    margin: 68px 0 55px 0;
  }
`;

export const CardContainer = styled.ul`
  display: flex;
  overflow-x: auto;
  padding-left: 16px;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }

  padding-bottom: 5rem;

  @media only screen and (min-width: 375px) {
    padding-left: 20px;
  }
  @media only screen and (min-width: 768px) {
    padding-left: 40px;
  }
`;
