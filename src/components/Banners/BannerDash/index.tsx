import { useHistory } from "react-router-dom";

import {
  ContainerBanner,
  ContainerButtons,
  ContainerMain,
  ContainerTitle,
} from "./styles";

import { ButtonOutlineLight } from "../../Button";

const BannerDash: React.FC = () => {
  const history = useHistory();
  const handlePage = (path: string) => {
    history.push(path);
  };

  return (
    <ContainerMain id="main">
      <ContainerBanner>
        <ContainerTitle>
          <h1>Encontre o automovel dos sonhos</h1>
          <p>Velocidade e experiência em um lugar feito para você!</p>
        </ContainerTitle>
        <ContainerButtons>
          <ButtonOutlineLight
            type="button"
            onClick={() => handlePage("/login")}
          >
            Login
          </ButtonOutlineLight>

          <ButtonOutlineLight
            type="button"
            onClick={() => handlePage("/register")}
          >
            Cadastrar
          </ButtonOutlineLight>
        </ContainerButtons>
      </ContainerBanner>
    </ContainerMain>
  );
};

export default BannerDash;
