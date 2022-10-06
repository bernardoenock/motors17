import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 0.8rem;
`;

export const TopModal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  > h1 {
    color: ${({ theme }) => theme.textColors.primaryText};
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const BottomModal = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 0.5rem;

  > div {
    width: 40%;
  }
`;
