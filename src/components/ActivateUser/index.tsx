import { useState } from "react";
import GeneralInput from "../Forms/Components/Inputs/GeneralInput";
import Modal from "../Modal";
import {
  ButtonActivate,
  ContainerForm,
  DivButton,
  SpanContainer,
} from "./styles";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ButtonOutline1 } from "../Button";
import { useActivate } from "../../Providers/User/activateUser";

const ActivateUserSpan: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handle = () => {
    setShow(!show);
  };

  const schema = yup.object().shape({
    code: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { activateUser, recoveryNewCode } = useActivate();

  const handleCode = async (data: { code?: string }) => {
    console.log(data);
    const result = await activateUser(data.code!);
    if (result) {
      handle();
    }
  };

  const recovery = async () => {
    await recoveryNewCode();
  };

  return (
    <>
      <Modal show={show} close={handle} height={"15rem"}>
        <ContainerForm onSubmit={handleSubmit(handleCode)}>
          <h1>Insira o código enviado no seu e-mail</h1>
          <GeneralInput
            label="Código de ativação"
            register={register}
            name={"code"}
            error={errors.code?.message}
            placeholder="Digitar Código"
          />
          <DivButton>
            <ButtonActivate type="button" onClick={recovery}>
              Enviar e-mail novamente
            </ButtonActivate>
          </DivButton>
          <ButtonOutline1 type="submit">Enviar</ButtonOutline1>
        </ContainerForm>
      </Modal>
      <SpanContainer>
        <h1>Ative seu usuário</h1>
        <ButtonActivate onClick={handle}>Clique aqui</ButtonActivate>
      </SpanContainer>
    </>
  );
};
export default ActivateUserSpan;
