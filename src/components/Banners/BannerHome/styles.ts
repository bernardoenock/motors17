import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColors.bannerBackground};
`;

export const ContainerBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 56px;
    color: ${({ theme }) => theme.textColors.title};
    margin-bottom: 1rem;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #f8f9fa;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 990px) {
    h1 {
      font-weight: 600;
      font-size: 32px;
      line-height: 45px;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  min-width: 300px;
  max-width: 768px;

  button {
    align-items: center;
    padding: 0.5rem 1rem;
    width: 100%;
    height: 3rem;
    background: transparent;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const ContainerButtonsTop = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  div {
    width: 33%;
  }
`;

export const ContainerButtonsBottom = styled.div`
  width: 100%;

  button {
    width: 100%;
  }
`;
