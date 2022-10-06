import styled from "styled-components";

export const ProfileViewSellerContainer = styled.div`
  background-image: linear-gradient(
    #4529e6 25.7%,
    ${({ theme }) => theme.backgroundColors.generalBackground} 18.7%,
    ${({ theme }) => theme.backgroundColors.generalBackground} 100%
  );
  width: 100%;
  height: 100%;

  header {
    position: fixed;
    top: 0;
  }
  footer {
    position: relative;
    bottom: 0;
    width: 100%;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding: 6rem 0;
`;

export const StoreSeller = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;
`;
