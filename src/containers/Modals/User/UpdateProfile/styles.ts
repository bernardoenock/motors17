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

export const Space = styled.div`
  width: 100%;
  height: 1rem;
`;

export const ContainerForm = styled.form`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 0.5rem;
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

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  padding: 1rem 0;
`;

export const RowInputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const UpdatePassword = styled.div`
  padding-left: 1rem;

  button {
    background-color: transparent;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 0.7rem;

    color: ${({ theme }) => theme.textColors.primaryText};
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.textColors.primaryText};
      transition: width 0.8s;
    }

    &:hover::after {
      width: 100%;
    }
  }
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

export const BottoModal = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 0.5rem;

  > div {
    width: 40%;
  }
`;
