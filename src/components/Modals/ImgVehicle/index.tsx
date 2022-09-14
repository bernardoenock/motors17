import { CloseModalBtn } from "../../Button/CloseModalBtn";
import { Centralize, ImgContainer, ModalContainer, TopModal } from "./styles";

import MERCEDES from "../../../assets/img/vehicles/mercedes_teste.png";

interface IHandleModal {
  handleModal: () => void;
}

const ImgVehicle = ({ handleModal }: IHandleModal) => {
  return (
    <Centralize>
      <ModalContainer>
        <TopModal>
          <h1>Imagem do veiculo</h1>
          <CloseModalBtn onClick={handleModal} />
        </TopModal>
        <ImgContainer>
          <img src={MERCEDES} alt="Carro tal" />
        </ImgContainer>
      </ModalContainer>
    </Centralize>
  );
};

export default ImgVehicle;
