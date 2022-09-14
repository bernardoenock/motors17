import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { ButtonOutline2, ButtonPrimary } from "../../Button";
import GeneralInput from "../Components/Inputs/GeneralInput";
import {
  Container,
  FooterForm,
  InputsContainer,
  RequestPassword,
  SpanText,
} from "./styles";
import InputPassword from "../Components/Inputs/InputPassword";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Modal from "../../Modals";
import RecoveryPassword from "../../Modals/RecoveryPassword";

import { useUser } from "../../../Providers/User/login";
import { useLoad } from "../../../Providers/Loading";

interface ILogin {
  email?: string;
  password?: string;
}

const FormSingIn: React.FC = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("Formato de email inválido"),
    password: yup.string().required("Senha é obrigatória"),
  });

  const { loginUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { showLoad } = useLoad();

  const handleLogin = (data: ILogin) => {
    showLoad();
    loginUser(data);
  };

  const history = useHistory();
  const handlePage = (path: string) => {
    history.push(path);
  };

  const [modal, setModal] = useState<boolean>(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Modal show={modal} close={handleModal} height="5rem" width="30%">
        <RecoveryPassword handleModal={handleModal} />
      </Modal>
      <Container onSubmit={handleSubmit(handleLogin)}>
        <h1>Login</h1>
        <InputsContainer>
          <GeneralInput
            label="Usuário"
            register={register}
            name={"email"}
            error={errors.email?.message}
            type="email"
            placeholder="Digitar usuário"
          />
          <InputPassword
            label="Senha"
            register={register}
            name={"password"}
            error={errors.password?.message}
            placeholder="Digitar senha"
          />
          <RequestPassword>
            <button onClick={handleModal} type="button">
              Esqueci minha senha
            </button>
          </RequestPassword>
        </InputsContainer>
        <FooterForm>
          <ButtonPrimary type="submit">Entrar</ButtonPrimary>
          <SpanText>Ainda não tem uma conta?</SpanText>
          <ButtonOutline2 type="button" onClick={() => handlePage("/register")}>
            Cadastrar
          </ButtonOutline2>
        </FooterForm>
      </Container>
    </>
  );
};

export default FormSingIn;
