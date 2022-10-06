import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerLists = styled.div`
  width: 100%;
  @media screen and (min-width: 425px) {
    padding: 1rem;
  }
`;
