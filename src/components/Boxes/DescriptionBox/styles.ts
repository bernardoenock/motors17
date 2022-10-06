import styled from "styled-components";

export const DescriptionBoxContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  padding: 36px 28px 36px 28px;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
  box-shadow: 0 4px 32px -22px #00000062;

  @media only screen and (min-width: 768px) {
    padding: 36px 44px 36px 44px;
  }
`;

export const ParagraphContainer = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;
