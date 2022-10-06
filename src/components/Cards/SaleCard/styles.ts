import styled from "styled-components";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.5rem;
  min-width: 250px;
  width: 100%;
  max-width: 435px;
  height: 365px;

  @media screen and (min-width: 425px) {
    min-width: 300px;
  }

  @media screen and (min-width: 650px) {
    min-width: 380px;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColors.primaryText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.textColors.spantext};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 50ch;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  > div {
    width: 1rem;
    height: 1rem;
    font-size: 0.6rem;
  }
  > span {
    font-size: 18px;
  }
`;

export const ImgContainer = styled.div`
  max-width: 100%;
  height: 152px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    filter: brightness(0.7);
    cursor: pointer;
  }
`;

export const BaseboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const ParentTagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  text-align: center;
  padding: 0.2rem;
  border-radius: 4px;
  color: ${({ theme }) => theme.buttons.primaryOpacity.color};
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.buttons.primaryOpacity.background};
`;

export const Price = styled.span`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  padding: 0.2rem;
  font-family: "Lexend", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColors.primaryText};
`;
