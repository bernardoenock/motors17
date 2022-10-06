import { CloseModalBtn } from "../../../../components/Buttons/CloseModalBtn";
import * as S from "./styles";

interface IHandleModal {
  handleModal: () => void;
}

const SucessAd = ({ handleModal }: IHandleModal) => {
  return (
    <S.Centralize>
      <S.ModalContainer>
        <S.TopModal>
          <h1>Sucesso!</h1>
          <CloseModalBtn onClick={handleModal} />
        </S.TopModal>
        <h1>Seu anúncio foi criado com sucesso!</h1>
        <h2>Agora você poderá ver seus negócios crescendo em grande escala </h2>
      </S.ModalContainer>
    </S.Centralize>
  );
};

export default SucessAd;
