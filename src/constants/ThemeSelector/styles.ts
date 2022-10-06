import styled from "styled-components";

export const Box = styled.button`
  background-color: ${({ theme }) => theme.greyScale.grey7};
  width: 60px;
  height: 37px;

  border-radius: 20px;
  padding: 2px;
  box-shadow: inset 0px 0px 20px 0px rgb(0 0 0 / 20%);
  .dark {
    transform: translate(80%);
  }
`;
export const Button = styled.span`
  width: 55%;
  height: 90%;
  border-radius: 15px;
  background: ${({ theme }) => theme.greyScale.grey4};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  cursor: pointer;

  > svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 2px;
    color: ${({ theme }) => theme.greyScale.whiteFixed};
    background-color: ${({ theme }) => theme.brand.brand2};
    transition: 0.5s;
    &:hover {
      background-color: ${({ theme }) => theme.greyScale.whiteFixed};
      color: ${({ theme }) => theme.brand.brand2};
    }
  }
`;
