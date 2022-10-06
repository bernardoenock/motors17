import {
  ContainerBanner,
  ContainerButtons,
  ContainerButtonsBottom,
  ContainerButtonsTop,
  ContainerMain,
  ContainerTitle,
} from "./styles";

import { ButtonOutlineLight } from "../../Buttons";
import Modal from "../../../containers/Modals";
import Filters from "../../../containers/Modals/Filters";
import { useState } from "react";
import { useFilters } from "../../../Providers/Filters";

const BannerHome: React.FC = () => {
  const { filterBy } = useFilters();

  const [modalFilters, setModalFilters] = useState(false);

  return (
    <>
      <Modal show={modalFilters} close={() => setModalFilters(false)}>
        <Filters handleClose={() => setModalFilters(false)} />
      </Modal>
      <ContainerMain id="main">
        <ContainerBanner>
          <ContainerTitle>
            <h1>Velocidade e experiência em um lugar feito para você</h1>
            <p>Um ambiente feito para você explorar o seu melhor</p>
          </ContainerTitle>
          <ContainerButtons>
            <ContainerButtonsTop>
              <ButtonOutlineLight
                type="button"
                onClick={() => filterBy({ type: "auction" })}
              >
                Leilão
              </ButtonOutlineLight>
              <ButtonOutlineLight
                type="button"
                onClick={() => filterBy({ typeVehicle: "car" })}
              >
                Carros
              </ButtonOutlineLight>
              <ButtonOutlineLight
                type="button"
                onClick={() => filterBy({ typeVehicle: "motocycle" })}
              >
                Motos
              </ButtonOutlineLight>
            </ContainerButtonsTop>
            <ContainerButtonsBottom>
              <ButtonOutlineLight onClick={() => setModalFilters(true)}>
                Filtrar
              </ButtonOutlineLight>
            </ContainerButtonsBottom>
          </ContainerButtons>
        </ContainerBanner>
      </ContainerMain>
    </>
  );
};

export default BannerHome;

// export const BannerDash: React.FC = () => {
//   return (
//     <ContainerMain id="main">
//       <ContainerBanner>
//         <ContainerTitle>
//           <h1>Velocidade e experiência em um lugar feito para você</h1>
//           <p>Encontre o automovel dos sonhos!</p>
//         </ContainerTitle>
//         <ContainerButtons>
//           <ButtonOutlineLight>Login</ButtonOutlineLight>
//           <ButtonOutlineLight>Cadastrar</ButtonOutlineLight>
//         </ContainerButtons>
//       </ContainerBanner>
//     </ContainerMain>
//   );
// };
