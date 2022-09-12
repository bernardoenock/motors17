import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { ButtonOutline2, ButtonPrimary } from "../../Button";
import GeneralInput from "../Components/Inputs/GeneralInput";
import { Container, FooterForm, InputsContainer, SpanText } from "./styles";
import InputPassword from "../Components/Inputs/InputPassword";
import { SelectTypeAccount } from "../Components/SelectType";
import { useState } from "react";
import MaskInput from "../Components/Inputs/MaskInput";
import { useRegister } from "../../../Providers/User/register";
// import { useZipCode } from "../../../Providers/User/cepValidation";
import { useHistory } from "react-router-dom";
import { IUserRegister } from "../../../interfaces/user";

const FormSingUp: React.FC = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "Deve conter apenas letras"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    cpf: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
    phone: yup
      .string()
      .required("Campo obrigatório")
      .matches(/(\(\d{2}\)\s)(\d{4,5}-\d{4})/g, "Telefone inválido"),
    birhtDate: yup
      .string()
      .required("Campo obrigatório")
      .test(
        (dateString) =>
          new Date(dateString!) <
          new Date(
            new Date().getFullYear() - 18,
            new Date().getMonth(),
            new Date().getDay()
          )
      ),
    description: yup.string(),
    zipCode: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[0-9]{5}-[0-9]{3}$/, "CEP inválido"),
    state: yup.string(),
    city: yup.string(),
    street: yup.string(),
    number: yup
      .number()
      .typeError("Somente números")
      .required("Campo obrigatório"),
    complement: yup.string(),
    password: yup.string().required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .required("Confirmação obrigatória")
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [typeAccount, setTypeAccount] = useState("client");
  const { registerUser } = useRegister();
  // const { address, verifyZipCode } = useZipCode();
  const history = useHistory();

  const handleRegister = async (data: IUserRegister) => {
    delete data.confirmPassword;
    await registerUser({ ...data, typeAccount: typeAccount });
  };

  return (
    <Container onSubmit={handleSubmit(handleRegister)}>
      <h1>Cadastro</h1>
      <InputsContainer>
        <SpanText>Informações de usuário</SpanText>
        <GeneralInput
          label="Nome"
          register={register}
          name={"name"}
          error={errors.name?.message}
          placeholder="Seu nome..."
        />
        <GeneralInput
          label="E-mail"
          register={register}
          name={"email"}
          error={errors.email?.message}
          type="email"
          placeholder="Digitar usuário"
        />
        <MaskInput
          label="CPF"
          register={register}
          name={"cpf"}
          error={errors.cpf?.message}
          placeholder="Seu CPF..."
          mask="999.999.999-99"
        />
        <MaskInput
          label="Celular"
          register={register}
          name={"phone"}
          error={errors.phone?.message}
          placeholder="Seu telefone..."
          mask="(99) 99999-9999"
        />
        <GeneralInput
          label="Data de nascimento"
          type="date"
          register={register}
          name={"birhtDate"}
          error={errors.birhtDate?.message}
          placeholder="Sua data de nascimento..."
        />
        <GeneralInput
          label="Descrição"
          register={register}
          name={"description"}
          error={errors.description?.message}
          placeholder="Descrição..."
        />
        <SpanText>Informações de endereço</SpanText>
        <MaskInput
          label="CEP"
          register={register}
          name={"zipCode"}
          error={errors.zipCode?.message}
          placeholder="CEP..."
          mask="99999-999"
          // onChange={(e) => {
          //   verifyZipCode(e.target.value);
          // }}
        />
        <GeneralInput
          label="Estado"
          register={register}
          name={"state"}
          error={errors.state?.message}
          placeholder="Estado..."
          // defaultValue={address.uf}
        />
        <GeneralInput
          label="Cidade"
          register={register}
          name={"city"}
          error={errors.city?.message}
          placeholder="Cidade..."
          // defaultValue={address.localidade}
        />
        <GeneralInput
          label="Rua"
          register={register}
          name={"street"}
          error={errors.street?.message}
          placeholder="Rua..."
          // defaultValue={address.logradouro}
        />
        <GeneralInput
          label="Número"
          register={register}
          name={"number"}
          error={errors.number?.message}
          placeholder="Número..."
          type="number"
        />
        <GeneralInput
          label="Complemento"
          register={register}
          name={"complement"}
          error={errors.complement?.message}
          placeholder="Complemento..."
          // defaultValue={address.complemento}
        />
        <SpanText>Tipo de conta</SpanText>
        <SelectTypeAccount value={typeAccount} setValue={setTypeAccount} />
        <InputPassword
          label="Senha"
          register={register}
          name={"password"}
          error={errors.password?.message}
          placeholder="Digitar senha"
        />
        <InputPassword
          label="Confimar Senha"
          register={register}
          name={"confirmPassword"}
          error={errors.confirmPassword?.message}
          placeholder="Confirmar senha"
        />
      </InputsContainer>
      <FooterForm>
        <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
        <SpanText>Já possuí uma conta?</SpanText>
        <ButtonOutline2 type="button" onClick={() => history.push("/login")}>
          Login
        </ButtonOutline2>
      </FooterForm>
    </Container>
  );
};

export default FormSingUp;
