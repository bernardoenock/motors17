import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: "Lexend";
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textColors.primaryText};
`;

export const MainModal = styled.div`
  width: 100%;
  height: 80%;
  padding: 0.5rem;
`;

export const ContainerGroup = styled.ul<{ select: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  overflow-x: auto;

  > li {
    ${({ select, theme }) =>
      select &&
      `
      background-color: ${theme.buttons.success.color};
      > div > span {
        color: ${theme.greyScale.whiteFixed};
      }
      `}
  }
`;

export const FooterModal = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  > div {
    width: 100%;

    button {
      width: 100%;
    }
  }
`;
