import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
`;

export const Title = styled.h2`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;

export const BidsGroup = styled.ul`
  display: flex;
  flex-direction: column-reverse;
`;

export const Empty = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  h2 {
    font-size: 16px;
    color: ${({ theme }) => theme.textColors.primaryText};
  }
`;
