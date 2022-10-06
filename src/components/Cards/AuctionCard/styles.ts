import styled from "styled-components";
import DefaultImg from "../../../assets/img/default.png";

export const CardAuction = styled.div`
  min-width: 300px;
  width: 100%;
  max-width: 735px;
  height: 425px;

  @media screen and (min-width: 425px) {
    min-width: 380px;
  }

  @media screen and (min-width: 650px) {
    min-width: 580px;
  }
`;

export const ContainerAuction = styled.div`
  width: 100%;
  height: 80%;
  background-image: ${({ image }: { image: string[] }) =>
    image[0] ? `url(${image[0]})` : `url(${DefaultImg})`};
  background-size: cover;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  gap: 0.5rem;
`;

export const Title = styled.h2`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.greyScale.whiteFixed};
`;
export const Description = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.greyScale.grey5};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 50ch;
`;

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > span {
    color: ${({ theme }) => theme.greyScale.whiteFixed};
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;

  @media screen and (min-width: 425px) {
    align-items: center;
    flex-direction: row;
  }
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

export const TagsInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Price = styled.span`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.greyScale.whiteFixed};
`;

export const ButtonAuction = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 20%;
  padding: 0 1.5rem;
  z-index: 20;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.greyScale.whiteFixed};
  border-radius: 0;
  border: 1.5px solid ${({ theme }) => theme.backgroundColors.bannerBackground};
  background-color: ${({ theme }) => theme.backgroundColors.bannerBackground};
  &:hover {
    filter: brightness(1.1);
  }
`;
