import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Loginschema } from "../../../validations/user.validations";

import { ButtonOutline2, ButtonPrimary } from "../../Buttons";
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
import Modal from "../../../containers/Modals";
import RecoveryPassword from "../../../containers/Modals/User/RecoveryPassword";

import { useUser } from "../../../Providers/User";
import { useLoad } from "../../../Providers/Loading";
import { ILogin } from "../../../interfaces/user";

const FormSingIn: React.FC = () => {
  const { loginUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Loginschema),
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
