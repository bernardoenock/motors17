import styled from "styled-components";

export const ReactionTagContainer = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  width: fit-content;
  padding: 12px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.greyScale.grey7};
  span {
    font-size: 12px;
    color: ${({ theme }) => theme.greyScale.grey3};
    max-width: 35ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
