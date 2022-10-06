import { ButtonPrimary } from "../../../../components/Buttons";
import { CloseModalBtn } from "../../../../components/Buttons/CloseModalBtn";
import * as S from "./styles";

interface IHandleModal {
  handleModal: () => void;
}

const AccountSucess = ({ handleModal }: IHandleModal) => {
  return (
    <S.Centralize>
      <S.ModalContainer>
        <S.TopModal>
          <h1>Sucesso!</h1>
          <CloseModalBtn onClick={handleModal} />
        </S.TopModal>
        <h1>Sua conta foi criada com sucesso!</h1>
        <h2>Agora você poderá ver seus negócios crescendo em grande escala </h2>

        <S.ContainerButton>
          <ButtonPrimary type="button">Ir para o Login</ButtonPrimary>
        </S.ContainerButton>
      </S.ModalContainer>
    </S.Centralize>
  );
};

export default AccountSucess;
