import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 65%;
  max-width: 40rem;
  margin-right: 0.5rem;
  align-items: center;

  > button {
    margin-left: 1rem;
  }
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  max-width: 12.5rem;
  padding-right: 1rem;
  gap: 0.5rem;
  border-right: ${({ theme }) => theme.textColors.primaryText} 0.1rem solid;
`;

export const NotLoggedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding-left: 1rem;
`;

export const NameBol = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.brand.brand2};
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.greyScale.whiteFixed};
`;

export const NameSpan = styled.span`
  max-width: 10ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.textColors.primaryText};
`;
