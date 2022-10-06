import styled from "styled-components";

export const VehicleInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 44px 28px 28px 28px;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
  border-radius: 4px;
  margin-bottom: 24px;
  box-shadow: 0 4px 32px -22px #00000062;
  button {
    width: 100px;
    height: 38px;
    font-size: 14px;
  }

  @media only screen and (min-width: 768px) {
    padding: 44px 44px 28px 44px;
    h1 {
      margin-bottom: 41px;
    }
  }
`;

export const TitleContainer = styled.h1`
  font-family: "Lexend", sans-serif;
  font-weight: 600;
  font-size: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.textColors.primaryText};
  margin-bottom: 32px;
`;

export const MiddleContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;
  > div:first-child {
    margin-bottom: 32px;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 24px;
    > div:first-child {
      margin-bottom: 0;
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Tag = styled.span`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.buttons.primaryOpacity.color};
  background-color: ${({ theme }) => theme.buttons.primaryOpacity.background};
`;

export const Price = styled.span`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  align-self: center;
  color: ${({ theme }) => theme.textColors.primaryText};
`;

export const SellerButonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
