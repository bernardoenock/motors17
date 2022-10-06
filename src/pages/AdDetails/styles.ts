import styled from "styled-components";
import { UserInfoBoxContainer } from "../../components/Boxes/UserInfoBox/styles";

export const Page = styled.div`
  background-image: linear-gradient(
    #4529e6 550px,
    0,
    ${({ theme }) => theme.backgroundColors.generalBackground} 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  footer {
    width: 100%;
    margin-top: 45px;
  }
  header {
    position: fixed;
  }

  @media only screen and (min-width: 768px) {
    background-image: linear-gradient(
      #4529e6 680px,
      0,
      ${({ theme }) => theme.backgroundColors.generalBackground} 100%
    );
  }
`;

export const AdDetailsMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 90%;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
  margin-top: 150px;

  @media only screen and (max-width: 1279px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    > div {
      width: 100%;
    }
  }
`;

export const LeftContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 45%;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
  width: 100%;

  @media only screen and (max-width: 1279px) {
    flex-direction: column-reverse;
    flex-wrap: wrap;
    justify-content: center;

    > div {
      width: 100%;
    }
  }
`;

export const SellerBoxInfo = styled(UserInfoBoxContainer)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  box-shadow: 0 4px 32px -22px #00000062;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};

  div {
    margin: 0;
  }
  button {
    font-size: 16px;
    font-weight: 600;
    width: 206px;
    height: 48px;
  }
`;

export const Title = styled.h2`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;

export const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundColors.generalBackground};

  h2 {
    font-size: 30px;
  }
`;
