import styled from "styled-components";

export const ContainerBurguer = styled.div`
  width: 27px;
  height: 1.5rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  transform-origin: 1px;
  margin-right: 10px;
  cursor: pointer;

  div {
    width: 27px;
    position: ${({ open }) => open && "fixed"};
    height: 0.22rem;
    background-color: ${({ theme }) => theme.textColors.subTitle};
    border-radius: 10px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }: { open: boolean }) => open && "rotate(45deg)"};
    }
    &:nth-child(2) {
      transform: ${({ open }: { open: boolean }) => open && "translateX(100%)"};
      opacity: ${({ open }: { open: boolean }) => open && "0"};
    }
    &:nth-child(3) {
      transform: ${({ open }: { open: boolean }) => open && "rotate(-45deg)"};
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
