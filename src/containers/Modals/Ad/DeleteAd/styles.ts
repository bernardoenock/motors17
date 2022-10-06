import styled from "styled-components";

export const Centralize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.theme.backgroundColors.secondaryBackground};
  border-radius: 0.5rem;
`;

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  > h1 {
    color: ${({ theme }) => theme.textColors.primaryText};
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
  }
  > h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 28px;
    color: ${({ theme }) => theme.textColors.primaryText};
  }
`;

export const TopModal = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    color: ${({ theme }) => theme.textColors.primaryText};
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 20px;
  }
`;

export const BottoModal = styled.div`
  display: flex;
  justify-content: space-evenly;

  > div {
    padding: 0.2rem;
  }

  @media screen and (max-width: 875px) {
    flex-direction: column;

    > div {
      width: 100%;
      > button {
        width: 100%;
      }
    }
  }
`;
