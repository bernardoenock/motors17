import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import GeneralInput from "../../../../components/Forms/Components/Inputs/GeneralInput";
import { ButtonPrimary } from "../../../../components/Buttons";
import { CodeButton, Form, TopModal } from "./styles";

import { CloseModalBtn } from "../../../../components/Buttons/CloseModalBtn";
import { useState } from "react";
import Modal from "../..";
import NewPassword from "./NewPassword";
import { useUpdatePassword } from "../../../../Providers/User/passwordUser";
import { useLoad } from "../../../../Providers/Loading";

interface IProps {
  handleModal: () => void;
}

const RecoveryPassword: React.FC<IProps> = ({ handleModal }) => {
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

  const [show, setShow] = useState(false);

  const { showLoad } = useLoad();
  const { recoveryCode } = useUpdatePassword();

  const handleRequest = (data: { email?: string }) => {
    showLoad();
    recoveryCode(data.email!);
  };

  return (
    <>
      <Modal show={show} close={() => setShow(false)} height="20rem">
        <NewPassword
          handleModal={() => {
            setShow(false);
            handleModal();
          }}
        />
      </Modal>
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
        <CodeButton>
          <button onClick={() => setShow(true)} type="button">
            Já tenho um código
          </button>
        </CodeButton>
        <ButtonPrimary type="submit">Enviar</ButtonPrimary>
      </Form>
    </>
  );
};

export default RecoveryPassword;
