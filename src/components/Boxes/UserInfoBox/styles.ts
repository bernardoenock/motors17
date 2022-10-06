import styled from "styled-components";

export const UserInfoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 90%;
  border-radius: 4px;
  padding: 40px 29px 40px 29px;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: ${({ theme }) => theme.textColors.primaryText};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
  @media screen and (max-width: 425px) {
    align-items: center;
  }

  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`;
export const Avatar = styled.div<{ background: string }>`
  border-radius: 50%;
  background-color: ${({ background }) => background};
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.greyScale.whiteFixed};
  font-size: 2rem;
`;

export const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media screen and (max-width: 425px) {
    align-items: center;
  }
`;

export const NameContainerWithTag = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  max-width: 100%;
  h2 {
    font-weight: 600;
    font-family: "Lexend", sans-serif;
    margin-right: 10px;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.textColors.primaryText};
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 28px;
    border-radius: 4px;
    font-size: 12px;
    padding: 5px;
    color: ${({ theme }) => theme.buttons.primaryOpacity.color};
    background-color: ${({ theme }) => theme.buttons.primaryOpacity.background};
  }

  @media only screen and (min-width: 425px) {
    span {
      font-size: 13px;
      width: 90px;
      height: 30px;
    }
  }
  @media only screen and (max-width: 425px) {
    h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 12ch;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 1rem;

  > div {
    padding: 0.5rem;
    height: 100%;

    button {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 425px) {
    > div {
      padding: 0;
    }
  }
`;
