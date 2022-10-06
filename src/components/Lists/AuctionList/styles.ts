import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0.5rem;
`;

export const ContainerCardAuction = styled.ul`
  display: flex;
  overflow-x: scroll;
  flex-wrap: nowrap;
  gap: 1rem;
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

export const TitleContainer = styled.h1`
  font-family: "Lexend", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColors.primaryText};
  width: 100%;
  padding: 2rem;
`;
