import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.02rem;
  padding-right: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
  border-bottom: 2px solid ${({ theme }) => theme.borders.headerBorder};
`;
