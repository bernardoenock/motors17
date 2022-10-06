import styled from "styled-components";

export const TitleContainer = styled.h1`
  font-family: "Lexend", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColors.primaryText};
  width: 100%;
  padding: 2rem;
`;

export const CardContainer = styled.ul`
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  padding: 0.5rem;
  width: 100%;

  &::-webkit-scrollbar {
    display: flex;
  }

  &::-webkit-scrollbar-thumb {
    border: 5px solid;
    border-color: ${({ theme }) => theme.backgroundColors.generalBackground};
    background-color: ${({ theme }) => theme.backgroundColors.bannerBackground};
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) =>
      theme.backgroundColors.generalBackground};
  }
`;
