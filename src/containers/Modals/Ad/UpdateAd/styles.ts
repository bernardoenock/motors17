import styled from "styled-components";

export const Centralize = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;

  background-color: ${(props) =>
    props.theme.backgroundColors.secondaryBackground};
`;

export const ContainerForm = styled.form`
  max-width: 100%;
  max-height: 100%;
  overflow-y: scroll;

  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 1rem;
`;

export const TopModal = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    color: ${({ theme }) => theme.textColors.primaryText};
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
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
  height: 3.5rem;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5rem;
  > div {
    width: 80%;
    height: 100%;
    > button {
      width: 100%;
      height: 100%;
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
  gap: 0.5rem;

  > div {
    width: 40%;
  }
`;
