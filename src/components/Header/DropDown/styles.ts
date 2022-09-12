import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 991px) {
    display: none;
  }
`;

export const DropRoot = styled(DropdownMenu.Root)`
  z-index: 1 !important;
`;

export const DropTrigger = styled(DropdownMenu.Trigger)`
  background-color: transparent;
`;

export const DropContent = styled(DropdownMenu.Content)`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 1rem;
  z-index: 1;
  margin-top: 1.4rem;
  border-radius: 0 0.25rem 0.25rem 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
  border-bottom: 2px solid ${({ theme }) => theme.borders.headerBorder};
`;

export const DropSeparator = styled(DropdownMenu.Separator)`
  background-color: ${({ theme }) => theme.borders.headerBorder};
  width: 100%;
  height: 0.1rem;
`;

export const DropItem = styled(DropdownMenu.Item)`
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.textColors.primaryText};
`;

export const DropItemButton = styled(DropdownMenu.Item)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  font-weight: 400;
  font-size: 1rem;
  width: 100%;
  height: 2rem;
  color: ${({ theme }) => theme.textColors.primaryText};
  border: 2px solid ${({ theme }) => theme.textColors.primaryText};
`;

export const DropItemSwitch = styled(DropdownMenu.Item)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
