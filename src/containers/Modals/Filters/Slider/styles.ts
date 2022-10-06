import styled from "styled-components";
import * as Slider from "@radix-ui/react-slider";

export const SliderRoot = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;

  &[data-orientation="horizontal"] {
    height: 20px;
  }
`;

export const StyledTrack = styled(Slider.Track)`
  background-color: ${({ theme }) => theme.buttons.outline1.background};
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;

  &[data-orientation="horizontal"] {
    height: 3px;
  }
`;

export const StyledRange = styled(Slider.Range)`
  position: absolute;
  background-color: ${({ theme }) => theme.buttons.outline1.border};
  border-radius: 9999px;
  height: 100%;
`;

export const StyledThumb = styled(Slider.Thumb)`
  all: unset;
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.buttons.outline1.color};

  box-shadow: 0 2px 10px black;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.buttons.outline1.hover};
    transform: scale(1.3);
  }
`;
