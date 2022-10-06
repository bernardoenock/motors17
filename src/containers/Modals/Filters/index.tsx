import React, { useState } from "react";
import { useFilters } from "../../../Providers/Filters";
import { ButtonOutline1, ButtonPrimary } from "../../../components/Buttons";
import { CloseModalBtn } from "../../../components/Buttons/CloseModalBtn";
import { SelectTypeSale } from "../../../components/Forms/Components/SelectType";
import Slider from "./Slider";

import { Bottom, Container, Main, SliderRoot, Top } from "./styles";

interface IProps {
  handleClose: () => void;
}

const Filters: React.FC<IProps> = ({ handleClose }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000 * 1000);
  const [minYear, setMinYear] = useState(1960);
  const [maxYear, setMaxYear] = useState(new Date().getFullYear());
  const [typeSale, setTypeSale] = useState("sale");

  const { setFilters, clearFilters } = useFilters();

  const handleFilters = () => {
    setFilters({
      gtPrice: minValue,
      ltPrice: maxValue,
      gtrYear: minYear,
      ltYear: maxYear,
      type: typeSale,
    });
    handleClose();
  };

  return (
    <Container>
      <Top>
        <h2>Filtros</h2>
        <CloseModalBtn onClick={handleClose} />
      </Top>
      <Main>
        <SliderRoot>
          <Slider
            label="Ano de inicio"
            max={new Date().getFullYear()}
            value={minYear}
            min={1960}
            step={1}
            spanValue={minYear.toString()}
            onValueChange={(value: number[]) => {
              if (minYear > maxYear) {
                setMaxYear(value[0]);
              }
              setMinYear(value[0]);
            }}
          />
        </SliderRoot>
        <SliderRoot>
          <Slider
            label="Ano de fim"
            max={new Date().getFullYear()}
            value={maxYear}
            min={1960}
            step={1}
            spanValue={maxYear.toString()}
            onValueChange={(value: number[]) => {
              if (minYear > maxYear) {
                setMinYear(value[0]);
              }
              setMaxYear(value[0]);
            }}
          />
        </SliderRoot>
        <SliderRoot>
          <Slider
            label="Valor mínimo"
            max={1000 * 1000}
            value={minValue}
            step={500}
            spanValue={minValue.toLocaleString("pt-br")}
            onValueChange={(value: number[]) => {
              if (minValue > maxValue) {
                setMaxValue(value[0]);
              }
              setMinValue(value[0]);
            }}
          />
        </SliderRoot>
        <SliderRoot>
          <Slider
            label="Valor máximo"
            max={1000 * 1000}
            value={maxValue}
            step={500}
            spanValue={maxValue.toLocaleString("pt-br")}
            onValueChange={(value: number[]) => {
              if (minValue > maxValue) {
                setMinValue(value[0]);
              }
              setMaxValue(value[0]);
            }}
          />
        </SliderRoot>
        <SelectTypeSale setValue={setTypeSale} value={typeSale} />
      </Main>
      <Bottom>
        <ButtonOutline1
          onClick={() => {
            clearFilters();
            handleClose();
          }}
        >
          Limpar Filtros
        </ButtonOutline1>
        <ButtonPrimary onClick={handleFilters}>Buscar</ButtonPrimary>
      </Bottom>
    </Container>
  );
};

export default Filters;
