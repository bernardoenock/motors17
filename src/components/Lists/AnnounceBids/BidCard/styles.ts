import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
