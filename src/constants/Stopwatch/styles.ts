import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 123px;
  height: 36px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.buttons.primaryOpacity.background};
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.buttons.primaryOpacity.color};
`;

export const Time = styled.span`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: ${({ theme }) => theme.buttons.primaryOpacity.color};
`;
