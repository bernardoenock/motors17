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

  > h1 {
    color: ${({ theme }) => theme.textColors.subTitle};
  }
`;
