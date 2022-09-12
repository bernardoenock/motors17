import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 140px;
  padding: 1rem;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.greyScale.grey0};
  color: ${({ theme }) => theme.greyScale.whiteFixed};

  > span {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
  }

  > button {
    text-decoration: none;
    background-color: ${({ theme }) => theme.greyScale.grey2};
    color: ${({ theme }) => theme.greyScale.whiteFixed};
    padding: 0.2rem;
    border-radius: 0.2rem;

    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    > svg {
      color: ${({ theme }) => theme.greyScale.whiteFixed};
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: 160px;
  }
`;
