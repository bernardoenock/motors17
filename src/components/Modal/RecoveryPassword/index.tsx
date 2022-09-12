import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import GeneralInput from "../../Forms/Components/Inputs/GeneralInput";
import { ButtonPrimary } from "../../Button";
import { Form } from "./styles";

const RecoveryPassword = () => {
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
      <h1>Recuperação de senha:</h1>
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
