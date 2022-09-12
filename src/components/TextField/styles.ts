import styled from "styled-components";
import { DescriptionBoxContainer } from "../DescriptionBox/styles";

export const TextFieldContainer = styled(DescriptionBoxContainer)`
  width: 100%;
  box-shadow: 0 4px 32px -22px #00000062;
  > div:first-child {
    margin-bottom: 24px;
  }
  textarea {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.greyScale.grey3};
    border: solid 1.5px ${({ theme }) => theme.greyScale.grey7};
    border-radius: 4px;
    resize: none;
    height: 128px;
    padding: 13px 16px;
    margin-bottom: 24px;
  }
  button {
    font-size: 16px;
    width: 108px;
    height: 38px;
  }

  @media only screen and (min-width: 768px) {
    > div:first-child {
      margin-bottom: 15px;
    }
    textarea {
      margin-bottom: 15px;
    }
  }
  @media only screen and (min-width: 1279px) {
    max-width: 752px;
    button {
      position: relative;
      left: 548px;
      bottom: 67px;
    }
  }
`;

export const ContainerMultipleReactions = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 24px;
  gap: 10px;

  @media only screen and (min-width: 1279px) {
    margin-top: -40px;
  }
`;
