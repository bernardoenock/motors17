import styled from "styled-components";

export const ContainerCard = styled.li`
  display: flex;
  justify-content: space-between;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const AllInfoCard = styled.div`
  display: flex;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const Title = styled.p`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;

export const Price = styled.span`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.greyScale.grey2};
`;

export const TagPurchase = styled.span`
  display: flex;
  align-items: center;
  padding: 0 4px 0 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.buttons.success.color};
  background-color: ${({ theme }) => theme.buttons.success.background};
  color: ${({ theme }) => theme.buttons.success.color};
`;

export const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundColors.generalBackground};

  h2 {
    font-size: 30px;
  }
`;
