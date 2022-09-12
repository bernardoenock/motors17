import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100vw;
  overflow-y: auto;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColors.generalBackground};
`;
