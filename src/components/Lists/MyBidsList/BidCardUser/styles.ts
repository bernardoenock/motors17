import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};

  @media screen and (min-width: 725px) {
    flex-direction: row;
  }

  &:hover {
    transform: scale(1.02);
    filter: brightness(1.2);
    cursor: pointer;
  }
`;
export const Headerinfos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media screen and (min-width: 725px) {
    align-items: flex-start;
  }
`;
export const Title = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.textColors.primaryText};
`;

export const DateSpan = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;

export const Price = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Clock = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.buttons.primaryOpacity.color};
  border-radius: 0.4rem;
  padding: 0.5rem;
  border: 0.1rem solid ${({ theme }) => theme.buttons.primaryOpacity.color};
  background-color: ${({ theme }) => theme.buttons.primaryOpacity.background};
`;

export const TagWinnerBid = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.4rem;
  padding: 0.5rem;
  border: 0.1rem solid ${({ theme }) => theme.buttons.success.color};
  background-color: ${({ theme }) => theme.buttons.success.background};
  color: ${({ theme }) => theme.buttons.success.color};
`;
export const TagLoserBid = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.4rem;
  padding: 0.5rem;
  border: 0.1rem solid ${({ theme }) => theme.buttons.alert.color};
  background-color: ${({ theme }) => theme.buttons.alert.background};
  color: ${({ theme }) => theme.buttons.alert.color};
`;
