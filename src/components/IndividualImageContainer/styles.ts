import styled from "styled-components";

export const SmallPictureContainer = styled.div`
  width: 30.4%;
  height: 40%;
  background-color: ${({ theme }) => theme.greyScale.grey7};
  border-radius: 4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;
