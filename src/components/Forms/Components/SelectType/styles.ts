import styled from "styled-components";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export const ToggleRoot = styled(ToggleGroup.Root)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 50px;
`;
export const ToggleItem = styled(ToggleGroup.Item)`
  height: 100%;
  width: 45%;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 0px;

  &[data-state="on"] {
    background-color: ${({ theme }) => theme.buttons.primary.background};
    color: ${({ theme }) => theme.buttons.primary.color};
    border: ${({ theme }) => theme.buttons.primary.border} 1px solid;
  }

  &[data-state="off"] {
    background-color: ${({ theme }) => theme.buttons.outline1.background};
    color: ${({ theme }) => theme.buttons.outline1.color};
    border: ${({ theme }) => theme.buttons.outline1.border} 1px solid;
  }
`;
