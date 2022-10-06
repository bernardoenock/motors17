import styled from "styled-components";

export const Form = styled.form`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.backgroundColors.secondaryBackground};
  border-radius: 0.5rem;
`;

export const TopModal = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    color: ${({ theme }) => theme.textColors.subTitle};
  }
`;

export const CodeButton = styled.div`
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
