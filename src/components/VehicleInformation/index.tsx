import { ButtonPrimary } from "../Button";

import {
  VehicleInformationContainer,
  MiddleContainer,
  TitleContainer,
} from "./styles";

import {
  ParentTagContainer,
  PriceContainer,
  TagContainer,
} from "../Card/VehicleCard/styles";

const VehicleInformation: React.FC = (): JSX.Element => {
  return (
    <VehicleInformationContainer>
      <TitleContainer>
        Mercedes Benz A 200 CGI ADVANCE HATCH Mercedes Benz A 200
      </TitleContainer>
      <MiddleContainer>
        <ParentTagContainer>
          <TagContainer>
            <span>2022</span>
          </TagContainer>
          <TagContainer>
            <span>0 KM</span>
          </TagContainer>
        </ParentTagContainer>
        <PriceContainer>
          <span>R$ 00.000,00</span>
        </PriceContainer>
      </MiddleContainer>
      <ButtonPrimary>Comprar</ButtonPrimary>
    </VehicleInformationContainer>
  );
};

export default VehicleInformation;
