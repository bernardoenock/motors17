import styled from "styled-components";
import { DescriptionBoxContainer } from "../DescriptionBox/styles";

export const SingleCommetContainer = styled(DescriptionBoxContainer)`
  margin-top: 0;
  padding-top: 0;
  border-radius: 0;
  width: 100%;
  box-shadow: none;
  p {
    line-height: 24px;
    font-size: 16px;
  }
`;
