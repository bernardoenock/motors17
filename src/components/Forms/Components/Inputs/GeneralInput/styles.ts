import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > label {
    width: 100%;

    color: ${({ theme }) => theme.textColors.subTitle};

    font-size: 14px;
    font-family: "Roboto", sans-serif;
    margin-bottom: 6px;
    font-weight: 600;
  }

  > input {
    width: 100%;
    height: 40px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid;
    border-color: ${({ error }: { error: boolean }) =>
      error
        ? "#ff0c0c"
        : ({ theme }) => theme.backgroundColors.generalBackground};
    padding: 0px 16px;
    color: ${({ theme }) => theme.textColors.primaryText};
    background-color: ${({ theme }) => theme.backgroundColors.headerBackground};

    &::placeholder {
      color: ${({ theme }) => theme.greyScale.grey3};

      font-weight: 400;
      font-size: 16px;
    }

    &:hover {
      background-color: ${({ theme }) =>
        theme.backgroundColors.generalBackground};
    }
    &:focus {
      background-color: ${({ theme }) =>
        theme.backgroundColors.generalBackground};
      border-color: ${({ theme }) => theme.greyScale.grey4};
    }
  }
  > div {
    height: 10px;

    > span {
      font-size: 12px;
      color: #ff0c0c;
    }
  }
`;
