import styled from "styled-components";
import { DescriptionBoxContainer } from "../../../Boxes/DescriptionBox/styles";

export const Container = styled(DescriptionBoxContainer)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  box-shadow: 0 4px 32px -22px #00000062;

  textarea {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    background-color: ${({ theme }) =>
      theme.backgroundColors.generalBackground};
    color: ${({ theme }) => theme.textColors.primaryText};
    border: transparent;
    border-radius: 4px;
    resize: none;
    height: 128px;
    padding: 13px 16px;
    margin-bottom: 24px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ContainerMultipleReactions = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.8rem;
`;

export const ReactionTagButton = styled.button`
  display: flex;
  align-items: center;
  height: 24px;
  width: fit-content;
  padding: 12px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.backgroundColors.generalBackground};
  font-size: 12px;
  color: ${({ theme }) => theme.textColors.primaryText};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
