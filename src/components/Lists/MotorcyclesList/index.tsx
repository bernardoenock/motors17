import IMG_MOTO from "../../../assets/img/vehicles/moto_teste.png";

import VehicleCard from "../../Card/VehicleCard";
import { TitleContainer, CardContainer } from "./styles";

const MotorcyclesList: React.FC = () => {
  return (
    <>
      <TitleContainer>Motos</TitleContainer>
      <CardContainer>
        {Array.from({ length: 10 }).map((_, index) => (
          <VehicleCard key={index} IMG={IMG_MOTO} />
        ))}
      </CardContainer>
    </>
  );
};

export default MotorcyclesList;
