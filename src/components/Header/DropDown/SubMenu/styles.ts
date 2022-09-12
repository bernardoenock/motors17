import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export const LoggedTrigger = styled(DropdownMenu.Trigger)`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 0.5rem;
  gap: 1rem;
`;

export const SubMenuContainer = styled(DropdownMenu.Content)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  z-index: 2;
  gap: 1rem;
  position: relative;
  border-radius: 0 0.25rem 0.25rem 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
  border: 2px solid ${({ theme }) => theme.borders.headerBorder};
`;

export const DropItem = styled(DropdownMenu.Item)`
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.textColors.primaryText};
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
