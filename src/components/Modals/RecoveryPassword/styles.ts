import styled from "styled-components";

export const Form = styled.form`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.backgroundColors.secondaryBackground};
  border-radius: 0.5rem;
`;

export const TopModal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -1rem;
  > h1 {
    color: ${({ theme }) => theme.textColors.subTitle};
    margin-top: 1rem;
  }

  @media screen and (max-width: 920px) {
    margin-top: -1.5rem;
    > h1 {
      margin-top: 2rem;
    }
  }
`;
