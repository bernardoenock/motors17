import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UpdateUserschema } from "../../../../validations/user.validations";

import * as S from "./styles";

import { ButtonNegative, ButtonPrimary } from "../../../../components/Buttons";
import { CloseModalBtn } from "../../../../components/Buttons/CloseModalBtn";
import GeneralInput from "../../../../components/Forms/Components/Inputs/GeneralInput";
import TextArea from "../../../../components/Forms/Components/TextArea";
import MaskInput from "../../../../components/Forms/Components/Inputs/MaskInput";

import { IUpdateUser, IUser } from "../../../../interfaces/user";
import { useLoad } from "../../../../Providers/Loading";
import { useUpdateUser } from "../../../../Providers/User/updateUser";
import { useState } from "react";
import Modal from "../..";
import UpdatePassword from "./UpdatePassword";

interface IProps {
  handleModal: () => void;
  user: IUser;
}

const UpdateProfile: React.FC<IProps> = ({ handleModal, user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UpdateUserschema),
  });

  const [show, setShow] = useState(false);

  const { showLoad } = useLoad();
  const { updateUser } = useUpdateUser();

  const handleUpdate = async (data: IUpdateUser) => {
    showLoad();
    await updateUser(data);
  };

  return (
    <>
      <Modal show={show} close={() => setShow(false)} height="20rem">
        <UpdatePassword handleModal={() => setShow(false)} />
      </Modal>
      <S.Centralize>
        <S.ContainerForm onSubmit={handleSubmit(handleUpdate)}>
          <S.TopModal>
            <h1>Editar perfil</h1>
            <CloseModalBtn onClick={handleModal} />
          </S.TopModal>

          <S.InputsContainer>
            <S.SpanText>Informações pessoais</S.SpanText>
            <GeneralInput
              label="Nome"
              register={register}
              name={"name"}
              error={errors.name?.message}
              placeholder="Editar Nome"
              defaultValue={user.name}
            />

            <GeneralInput
              label="E-mail"
              register={register}
              name={"email"}
              error={errors.email?.message}
              type="email"
              placeholder="Editar E-mail"
              defaultValue={user.email}
            />

            <MaskInput
              label="CPF"
              register={register}
              name={"cpf"}
              error={errors.cpf?.message}
              placeholder="Editar CPF"
              mask="999.999.999-99"
              defaultValue={user.cpf}
            />

            <MaskInput
              label="Celular"
              register={register}
              name={"phone"}
              error={errors.phone?.message}
              placeholder="Editar telefone"
              mask="(99) 99999-9999"
              defaultValue={user.phone}
            />
            <GeneralInput
              label="Data de nascimento"
              type="date"
              register={register}
              name={"birhtDate"}
              error={errors.birhtDate?.message}
              defaultValue={user.birhtDate}
            />
            <S.Space />
            <TextArea
              label="Descrição"
              register={register}
              name={"description"}
              error={errors.description?.message}
              placeholder="Digitar descrição"
              defaultValue={user.description}
            />
            <S.UpdatePassword>
              <button onClick={() => setShow(true)} type="button">
                Alterar senha?
              </button>
            </S.UpdatePassword>
          </S.InputsContainer>

          <S.BottoModal>
            <ButtonNegative type="button" onClick={handleModal}>
              Cancelar
            </ButtonNegative>
            <ButtonPrimary type="submit">Salvar alterações</ButtonPrimary>
          </S.BottoModal>
        </S.ContainerForm>
      </S.Centralize>
    </>
  );
};

export default UpdateProfile;
