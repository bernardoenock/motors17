import styled from "styled-components";

export const Centralize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ModalContainer = styled.div`
  width: 520px;
  height: 287px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.backgroundColors.secondaryBackground};
  border-radius: 0.5rem;

  > h1 {
    color: ${({ theme }) => theme.textColors.subTitle};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  > h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #495057;
  }
`;

export const TopModal = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    color: ${({ theme }) => theme.textColors.subTitle};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  > div {
    > button {
      width: 132px;
      height: 38px;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 0px;
      padding: 0;
    }
  }
`;
