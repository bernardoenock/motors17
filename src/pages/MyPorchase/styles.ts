import styled from "styled-components";

export const ContainerMyPorchase = styled.div`
  background-image: linear-gradient(
    #4529e6 25.7%,
    ${({ theme }) => theme.backgroundColors.generalBackground} 18.7%,
    ${({ theme }) => theme.backgroundColors.generalBackground} 100%
  );
  width: 100%;
  height: 100%;

  header {
    position: fixed;
  }
  footer {
    position: relative;
    bottom: 0;
    width: 100%;
  }
`;

export const MainMyPorchase = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0;
`;
