import styled from "styled-components";

export const ProfileViewUserContainer = styled.div`
  background-image: linear-gradient(#4529e6 18.7%, #f1f3f5 18.7%, #f1f3f5 100%);
  header {
    position: fixed;
  }
  footer {
    margin-top: 90px;
  }
`;

export const ProfileMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.h1`
  font-family: "Lexend", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColors.subTitle};
  margin: 35px 0 55px 0;
  width: 100%;
  padding-left: 16px;

  @media only screen and (min-width: 375px) {
    padding-left: 20px;
  }
  @media only screen and (min-width: 768px) {
    padding-left: 40px;
    margin: 68px 0 55px 0;
  }
`;

export const CardContainer = styled.ul`
  display: flex;
  overflow-x: auto;
  padding-left: 16px;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 375px) {
    padding-left: 20px;
  }
  @media only screen and (min-width: 768px) {
    padding-left: 40px;
  }
`;

export const TitleContainerBelow = styled(TitleContainer)`
  margin-top: 85px;

  @media only screen and (min-width: 768px) {
    margin-top: 120px;
  }
`;
