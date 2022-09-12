import styled from "styled-components";

import img_test from "../../../assets/img/vehicles/carro02.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  h2 {
    margin: 2rem;
  }
`;

export const ContainerCardAuction = styled.ul`
  display: flex;
  overflow-x: scroll;
  flex-wrap: nowrap;
  width: 100%;
`;

export const CardAuction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
  min-width: 735px;
  width: 735px;

  @media screen and (max-width: 1024px) {
    margin-left: 0.2rem;
    min-width: 328px;
    width: 328px;
  }
`;

export const ContainerAuction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 326px;

  background-image: url(${img_test});
  background-size: cover;

  color: white;

  @media screen and (max-width: 1024px) {
    width: 328px;
    height: 496px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const ContainerInfo = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  @media screen and (max-width: 1024px) {
    padding: 1rem 1rem;
  }
`;

export const ContainerTitle = styled.div`
  h3 {
    margin: 4rem 0 1rem 0;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 1rem;

    color: #ced4da;
  }
`;

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 15px;
  div {
    font-size: 14px;
    width: 32px;
    height: 32px;
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.greyScale.grey10};
    overflow: none !important;
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ContainerBottomInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 32px;
  background: #edeafd;
  border-radius: 4px;

  margin-right: 1rem;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #4529e6;
  }
`;

export const YearKM = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
`;

export const ContainerPrice = styled.div`
  @media screen and (max-width: 1024px) {
    margin-top: 1rem;
  }
`;

export const ButtonAuction = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 62px;
  padding: 0 1.5rem 0 1.5rem;
  border-radius: 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 0px;
  color: ${({ theme }) => theme.textColors.secondaryText};

  background-color: ${({ theme }) => theme.backgroundColors.bannerBackground};
  &:hover {
    filter: brightness(1);
    background-color: ${({ theme }) => theme.buttons.primary.hover};
    border: 1.5px solid ${({ theme }) => theme.buttons.primary.hover};
  }

  @media screen and (max-width: 1024px) {
  }
`;
