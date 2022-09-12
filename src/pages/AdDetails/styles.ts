import styled from "styled-components";
import { UserInfoBoxContainer } from "../../components/UserInfoBox/styles";

export const AdDetailsContainer = styled.div`
  background-image: linear-gradient(#4529e6 550px, 0, #f1f3f5 100%);
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
    background-image: linear-gradient(#4529e6 680px, 0, #f1f3f5 100%);
  }
  @media only screen and (min-width: 1279px) {
    footer {
      margin-top: 73px;
    }
  }
`;

export const AdDetailsMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 1279px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 20px;
  }
  @media only screen and (min-width: 1440px) {
    column-gap: 55px;
  }
  @media only screen and (min-width: 1900px) {
    column-gap: 130px;
    width: 70%;
  }
`;

export const LeftContainerAdDetailsFirst = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 120px 0 17px 0;

  @media only screen and (min-width: 990px) {
    margin-top: 135px;
  }
  @media only screen and (min-width: 1279px) {
    width: auto;
  }
`;

export const RightContainerAdDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 25px;
  row-gap: 52px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 1024px) {
    column-gap: 25px;
  }
  @media only screen and (min-width: 1279px) {
    flex-direction: column;
    width: 440px;
    margin: 106px 0 0 0;
    row-gap: 34px;
  }
`;

export const ImageGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  padding: 36px 24px 28px 24px;
  background-color: ${({ theme }) => theme.greyScale.grey10};
  box-shadow: 0 4px 32px -22px #00000062;
  h1 {
    margin-bottom: 22px;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 8px;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 15px 0 0;
    flex: 1 1 auto;
  }
  @media only screen and (min-width: 1279px) {
    max-width: 440px;
    height: 359px;
  }
`;

export const UserInfoBoxWithButtonContainer = styled(UserInfoBoxContainer)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  box-shadow: 0 4px 32px -22px #00000062;
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

export const LeftContainerAdDetailsTSecond = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1279px) {
    width: auto;
  }
`;

export const CommentBoxContainer = styled.div`
  width: 100%;
  padding-top: 36px;
  margin-bottom: 42px;
  background-color: ${({ theme }) => theme.greyScale.grey10};
  border-radius: 4px;
  box-shadow: 0 4px 32px -22px #00000062;
  h1 {
    padding-left: 28px;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      padding-left: 44px;
    }
  }
  @media only screen and (min-width: 1279px) {
    max-width: 752px;
    margin-bottom: 33px;
  }
`;

export const FakeContainer = styled.div`
  width: 440px;
  height: 440px;
  display: none;

  @media only screen and (min-width: 1279px) {
    display: flex;
  }
`;
