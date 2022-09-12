import styled from "styled-components";

export const ContainerForm = styled.form``;

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
