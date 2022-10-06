import styled from "styled-components";

export const LoadContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Message = styled.h2`
  width: 100%;
  padding: 2rem;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.textColors.spantext};
`;
