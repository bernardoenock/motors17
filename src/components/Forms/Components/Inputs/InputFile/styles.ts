import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > label {
    cursor: pointer;
    > input {
      display: none;
    }
  }
`;

export const Label = styled.label`
  width: 100%;

  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3rem;
  background-color: ${({ theme }) => theme.buttons.primaryOpacity.background};
  border: 1.5px solid ${({ theme }) => theme.buttons.primaryOpacity.border};
  color: ${({ theme }) => theme.buttons.primaryOpacity.color};
  font-size: 0.8rem;
  border-radius: 0.2rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;

  &:hover {
    filter: brightness(1);
    background-color: ${({ theme }) => theme.buttons.primaryOpacity.hover};
    border: 1.5px solid ${({ theme }) => theme.buttons.primaryOpacity.hover};
  }

  > input {
    display: none;
  }
`;

export const Span = styled.span`
  font-size: 0.8rem;
`;
