import React from "react";
import { CloseModalBtn } from "../../../../../components/Buttons/CloseModalBtn";
import { Form, TopModal } from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NewPasswordSchema } from "../../../../../validations/user.validations";
import { IRecoveryPassword } from "../../../../../interfaces/user";
import GeneralInput from "../../../../../components/Forms/Components/Inputs/GeneralInput";
import InputPassword from "../../../../../components/Forms/Components/Inputs/InputPassword";
import { ButtonPrimary } from "../../../../../components/Buttons";
import { useUpdatePassword } from "../../../../../Providers/User/passwordUser";
import { useLoad } from "../../../../../Providers/Loading";

interface IProps {
  handleModal: () => void;
}

const NewPassword: React.FC<IProps> = ({ handleModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(NewPasswordSchema),
  });

  const { showLoad } = useLoad();
  const { recoveryPassword } = useUpdatePassword();

  const handleRequest = (data: IRecoveryPassword) => {
    showLoad();
    recoveryPassword(data);
    handleModal();
  };

  return (
    <Form onSubmit={handleSubmit(handleRequest)}>
      <TopModal>
        <h1>Atualizar senha:</h1>
        <CloseModalBtn onClick={handleModal} />
      </TopModal>
      <GeneralInput
        label="Digite o código enviado por e-mail"
        register={register}
        name={"accessToken"}
        error={errors.accessToken?.message}
        placeholder="Digitar o seu código"
      />
      <InputPassword
        label="Digite uma nova senha"
        register={register}
        name={"newPassword"}
        error={errors.newPassword?.message}
        placeholder="Digite uma nova senha"
      />
      <ButtonPrimary type="submit">Enviar</ButtonPrimary>
    </Form>
  );
};

export default NewPassword;
