import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: scroll;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.textColors.primaryText};
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SliderRoot = styled.div`
  width: 100%;
`;
