import React from "react";
import { SliderRoot, StyledRange, StyledThumb, StyledTrack } from "./styles";

interface IProps {
  value: number;
  max: number;
  min?: number;
  step: number;
  label: string;
  spanValue: string;
  onValueChange: (value: number[]) => void;
}

const Slider: React.FC<IProps> = ({
  max,
  value,
  spanValue,
  onValueChange,
  step,
  label,
  min = 0,
}) => {
  return (
    <>
      <label>
        {label} {spanValue}
      </label>
      <SliderRoot
        defaultValue={[value]}
        max={max}
        min={min}
        step={step}
        onValueChange={onValueChange}
      >
        <StyledTrack>
          <StyledRange />
        </StyledTrack>
        <StyledThumb />
      </SliderRoot>
    </>
  );
};

export default Slider;
