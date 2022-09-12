import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  width: 40%;
  min-width: 300px;
  height: auto;
  margin: 25px;

  gap: 32px;
  padding: 44px 48px;
  border-radius: 4px;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);

  h1 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: ${({ theme }) => theme.textColors.subTitle};
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

export const SpanText = styled.span`
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  color: ${({ theme }) => theme.textColors.subTitle};
`;

export const FooterForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 15px;
`;
