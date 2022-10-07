import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
  border-radius: 4px;
  box-shadow: 0 4px 32px -22px #00000062;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding-left: 1rem;
`;

export const Title = styled.h1`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DateSpan = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;

export const Price = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;
