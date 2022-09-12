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

  gap: 10px;
  button {
    align-items: center;
    padding: 12px 28px;
    width: 177.53px;
    height: 48px;

    background: transparent;
    /* color: #f8f9fa; */
  }

  @media screen and (max-width: 990px) {
    flex-direction: column;
    gap: 20px;

    width: 94vw;
    button {
      padding: 0;
      width: 100%;
    }
  }
`;
