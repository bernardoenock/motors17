import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import GeneralInput from "../../Forms/Components/Inputs/GeneralInput";
import { ButtonPrimary } from "../../Button";
import { Form, TopModal } from "./styles";

import { CloseModalBtn } from "../../Button/CloseModalBtn";

interface IHandleModal {
  handleModal: () => void;
}

const RecoveryPassword = ({ handleModal }: IHandleModal) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("Formato de email inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRequest = (data: { email?: string }) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(handleRequest)}>
      <TopModal>
        <h1>Recuperação de senha:</h1>

        <CloseModalBtn onClick={handleModal} />
      </TopModal>

      <GeneralInput
        label="Digite seu e-mail"
        register={register}
        name={"email"}
        error={errors.email?.message}
        type="email"
        placeholder="Digitar e-mail"
      />
      <ButtonPrimary type="submit">Enviar</ButtonPrimary>
    </Form>
  );
};

export default RecoveryPassword;
