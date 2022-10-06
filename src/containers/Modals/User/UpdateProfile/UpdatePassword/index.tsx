import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UpdateUserPasswordschema } from "../../../../../validations/user.validations";

import { CloseModalBtn } from "../../../../../components/Buttons/CloseModalBtn";
import InputPassword from "../../../../../components/Forms/Components/Inputs/InputPassword";
import { TopModal } from "../styles";
import { BottomModal, Container, Form } from "./styles";
import { useLoad } from "../../../../../Providers/Loading";
import { IUpdatePassword } from "../../../../../interfaces/user";
import {
  ButtonNegative,
  ButtonPrimary,
} from "../../../../../components/Buttons";
import { useUpdatePassword } from "../../../../../Providers/User/passwordUser";

interface IProps {
  handleModal: () => void;
}

const UpdatePassword: React.FC<IProps> = ({ handleModal }) => {
  const { showLoad } = useLoad();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UpdateUserPasswordschema),
  });

  const { updatePassword } = useUpdatePassword();

  const handleUpdate = async (data: IUpdatePassword) => {
    showLoad();
    await updatePassword(data);
    handleModal();
  };

  return (
    <Container>
      <TopModal>
        <h1>Alterar senha</h1>
        <CloseModalBtn onClick={handleModal} />
      </TopModal>
      <Form onSubmit={handleSubmit(handleUpdate)}>
        <InputPassword
          label="Senha atual"
          register={register}
          name={"currentPassword"}
          error={errors.currentPassword?.message}
          placeholder="Senha atual"
        />
        <InputPassword
          label="Nova senha"
          register={register}
          name={"newPassword"}
          error={errors.newPassword?.message}
          placeholder="Nova senha"
        />
        <BottomModal>
          <ButtonNegative type="button" onClick={handleModal}>
            Cancelar
          </ButtonNegative>
          <ButtonPrimary type="submit">Salvar</ButtonPrimary>
        </BottomModal>
      </Form>
    </Container>
  );
};

export default UpdatePassword;
