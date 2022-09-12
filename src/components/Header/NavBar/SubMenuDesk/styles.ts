import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export const LoggedMenu = styled(DropdownMenu.Root)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin: 0 0.5rem;
  gap: 0.5rem;
  width: 30%;
  max-width: 10rem;
`;

export const Trigger = styled(DropdownMenu.Trigger)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin: 0 0.5rem;
  gap: 0.5rem;
  width: 30%;
  max-width: 10rem;
  background-color: transparent;
`;

export const Content = styled(DropdownMenu.Content)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 1rem;

  border-radius: 0 0 0.25rem 0.25rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
  border: 2px solid ${({ theme }) => theme.borders.headerBorder};
`;
export const Item = styled(DropdownMenu.Item)`
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.textColors.primaryText};
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
