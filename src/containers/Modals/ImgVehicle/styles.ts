import styled from "styled-components";

import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-radius: 0.4rem;
  background-color: ${(props) =>
    props.theme.backgroundColors.secondaryBackground};
`;

export const TopModal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: ${({ theme }) => theme.textColors.primaryText};
  }
`;

export const ArrowLeft = styled(BsFillCaretLeftFill)`
  position: relative;
  z-index: 20;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.buttons.primary.background};
`;
export const ArrowRight = styled(BsFillCaretRightFill)`
  position: relative;
  z-index: 20;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.buttons.primary.background};
`;

export const DotsContainer = styled.div`
  display: flex;
  align-items: center;

  > svg:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  .active {
    color: ${({ theme }) => theme.buttons.primary.background};
    width: 2rem;
    height: 2rem;
  }
  .disable {
    color: ${({ theme }) => theme.buttons.negative.color};
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;

  background: transparent;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  border-radius: 4px;

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;
