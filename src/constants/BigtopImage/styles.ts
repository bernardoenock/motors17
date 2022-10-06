import styled from "styled-components";

export const TopImageContainer = styled.div`
  width: 100%;
  height: 355px;
  margin-bottom: 17px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
  box-shadow: 0 4px 32px -22px #00000062;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;
