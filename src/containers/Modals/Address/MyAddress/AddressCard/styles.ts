import styled from "styled-components";

export const Card = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.backgroundColors.generalBackground};

  &:hover {
    transform: scale(0.98);
    filter: brightness(0.8);
    cursor: pointer;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoSpan = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textColors.primaryText};
`;

export const Tag = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 0.6rem;
  border-radius: 0.4rem;
  padding: 0.5rem;
  border: 0.1rem solid ${({ theme }) => theme.buttons.success.color};
  background-color: ${({ theme }) => theme.buttons.success.background};
  color: ${({ theme }) => theme.buttons.success.color};
`;
