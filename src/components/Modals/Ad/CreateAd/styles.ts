import styled from "styled-components";

export const Centralize = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerForm = styled.form`
  display: flex;
  width: 520px;
  height: 1036px;

  padding: 1rem;

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
`;

export const TopModal = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-top: -1rem; */
  > h1 {
    /* color: ${({ theme }) => theme.textColors.subTitle};
    margin-top: 1rem; */
  }

  @media screen and (max-width: 920px) {
    /* margin-top: -1.5rem;
    > h1 {
      margin-top: 2rem;
    } */
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

export const RowInputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const SpanText = styled.span`
  text-align: start;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  color: ${({ theme }) => theme.textColors.subTitle};
`;

export const BtnAddImg = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  > div {
    > button {
      width: 315px;
      height: 38px;
      font-weight: 600;
      font-size: 14px;
      line-height: 0px;
      padding: 0;
    }
  }
`;

export const BottoModal = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 7rem;
`;
