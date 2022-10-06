import styled from "styled-components";

export const ContainerForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  gap: 1rem;
  background-color: ${(props) =>
    props.theme.backgroundColors.secondaryBackground};
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const TopModal = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    color: ${({ theme }) => theme.textColors.primaryText};
    font-weight: 600;
    font-size: 1rem;
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
  padding: 0.5rem;
  overflow-x: auto;
`;

export const RowInputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const SpanText = styled.span`
  text-align: start;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.textColors.subTitle};
`;

export const BottoModal = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 0.5rem;

  > div {
    width: 40%;
  }
`;
