import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.3rem;
  cursor: pointer;
`;

export const BigTitle = styled.h1`
  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.logoColors.bigTitle} -1.61%,
    ${({ theme }) => theme.logoColors.smallTitle} 100.99%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 800;
  font-size: 1.5rem;
`;

export const SmallTitle = styled.h2`
  color: ${({ theme }) => theme.logoColors.smallTitle};
  font-weight: 600;
  font-size: 1rem;
`;
