import { useState } from "react";
import GeneralInput from "../../../components/Forms/Components/Inputs/GeneralInput";
import Modal from "..";
import * as S from "./styles";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ButtonOutline1 } from "../../../components/Buttons";
import { useActivate } from "../../../Providers/User/activateUser";
import { useLoad } from "../../../Providers/Loading";

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
  const { showLoad } = useLoad();

  const handleCode = async (data: { code?: string }) => {
    showLoad();
    const result = await activateUser(data.code!);
    if (result) {
      handle();
    }
  };

  const recovery = async () => {
    showLoad();
    await recoveryNewCode();
  };

  return (
    <>
      <Modal show={show} close={handle} height={"15rem"}>
        <S.ContainerForm onSubmit={handleSubmit(handleCode)}>
          <h1>Insira o código enviado no seu e-mail</h1>
          <GeneralInput
            label="Código de ativação"
            register={register}
            name={"code"}
            error={errors.code?.message}
            placeholder="Digitar Código"
          />
          <S.DivButton>
            <S.ButtonActivate type="button" onClick={recovery}>
              Enviar e-mail novamente
            </S.ButtonActivate>
          </S.DivButton>
          <ButtonOutline1 type="submit">Enviar</ButtonOutline1>
        </S.ContainerForm>
      </Modal>
      <S.SpanContainer>
        <h1>Ative seu usuário</h1>
        <S.ButtonActivate onClick={handle}>Clique aqui</S.ButtonActivate>
      </S.SpanContainer>
    </>
  );
};
export default ActivateUserSpan;
