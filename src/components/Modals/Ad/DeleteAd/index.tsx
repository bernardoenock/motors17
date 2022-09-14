import { ButtonAlert, ButtonNegative } from "../../../Button";
import { CloseModalBtn } from "../../../Button/CloseModalBtn";
import * as S from "./styles";

interface IHandleModal {
  handleModal: () => void;
}

const DeleteAd = ({ handleModal }: IHandleModal) => {
  return (
    <S.Centralize>
      <S.ModalContainer>
        <S.TopModal>
          <h1>Excluir anúncio</h1>
          <CloseModalBtn onClick={handleModal} />
        </S.TopModal>
        <h1>Tem certeza que deseja remover este anúncio?</h1>
        <h2>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </h2>

        <S.BottoModal>
          <ButtonNegative type="button" onClick={handleModal}>
            Cancelar
          </ButtonNegative>
          <ButtonAlert type="button">Sim, excluír anúcio</ButtonAlert>
        </S.BottoModal>
      </S.ModalContainer>
    </S.Centralize>
  );
};

export default DeleteAd;
