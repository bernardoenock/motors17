import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 55px;
  height: 55px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
  box-shadow: 0 4px 32px -22px #00000062;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;
