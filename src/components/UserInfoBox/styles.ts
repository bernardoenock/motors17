import styled from "styled-components";

export const UserInfoBoxContainer = styled.div`
  width: 90%;
  border-radius: 4px;
  padding: 6px 20px 30px 20px;
  background-color: ${({ theme }) => theme.greyScale.grey10};
  margin-top: 150px;
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

  @media only screen and (min-width: 375px) {
    padding: 40px 29px 40px 29px;
  }
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
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
