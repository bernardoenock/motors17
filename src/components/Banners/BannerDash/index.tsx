import {
  ContainerBanner,
  ContainerButtons,
  ContainerMain,
  ContainerTitle,
} from "./styles";

import { ButtonOutlineLight } from "../../Button";

const BannerDash: React.FC = () => {
  return (
    <ContainerMain id="main">
      <ContainerBanner>
        <ContainerTitle>
          <h1>Encontre o automovel dos sonhos</h1>
          <p>Velocidade e experiência em um lugar feito para você!</p>
        </ContainerTitle>
        <ContainerButtons>
          <ButtonOutlineLight>Login</ButtonOutlineLight>

          <ButtonOutlineLight>Cadastrar</ButtonOutlineLight>
        </ContainerButtons>
      </ContainerBanner>
    </ContainerMain>
  );
};

export default BannerDash;
