import styled from "styled-components";

export const Container = styled.form`
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};

  width: 100%;
  height: 100%;
`;
