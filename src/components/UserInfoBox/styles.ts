import styled from "styled-components";

export const UserInfoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 90%;
  border-radius: 4px;
  padding: 40px 29px 40px 29px;
  background-color: ${({ theme }) => theme.greyScale.grey10};
  /* margin-top: 150px; */
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: ${({ theme }) => theme.greyScale.grey2};
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
export const Avatar = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.brand.brand2};
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.greyScale.whiteFixed};
  font-size: 2rem;
`;

export const TopImageContainer = styled.div`
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colorRandomProfile.random2};
  margin-bottom: 18px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
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
    color: ${({ theme }) => theme.brand.brand1};
    background-color: ${({ theme }) => theme.brand.brand4};
  }

  @media only screen and (min-width: 425px) {
    span {
      font-size: 13px;
      width: 90px;
      height: 30px;
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
