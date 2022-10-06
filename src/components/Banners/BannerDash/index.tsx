import { useHistory } from "react-router-dom";

import * as S from "./styles";

import { ButtonOutlineLight } from "../../Buttons";

const BannerDash: React.FC = () => {
  const history = useHistory();
  const handlePage = (path: string) => {
    history.push(path);
  };

  return (
    <S.ContainerMain id="main">
      <S.ContainerBanner>
        <S.ContainerTitle>
          <h1>Encontre o automovel dos sonhos</h1>
          <p>Velocidade e experiência em um lugar feito para você!</p>
        </S.ContainerTitle>
        <S.ContainerButtons>
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
        </S.ContainerButtons>
      </S.ContainerBanner>
    </S.ContainerMain>
  );
};

export default BannerDash;
