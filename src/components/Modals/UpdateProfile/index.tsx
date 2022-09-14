import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// import { useState } from "react";
// import { useAuctionRegister } from "../../../Providers/Auction/register";

import GeneralInput from "../../Forms/Components/Inputs/GeneralInput";
import { ButtonNegative, ButtonPrimary } from "../../Button";

import * as S from "./styles";

import { IDataAuction } from "../../../interfaces/auction";

import { CloseModalBtn } from "../../Button/CloseModalBtn";
import TextArea from "../../Forms/Components/TextArea";
import MaskInput from "../../Forms/Components/Inputs/MaskInput";

interface IHandleModal {
  handleModal: () => void;
}

const UpdateProfile = ({ handleModal }: IHandleModal) => {
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const { registerAuction } = useAuctionRegister();

  const handleRegister = async (data: IDataAuction) => {
    // await registerAuction({
    //   ...data,
    //   type: typeSale,
    //   typeVehicle: typeVehicle,
    // });
  };

  return (
    <S.Centralize>
      <S.ContainerForm onSubmit={handleSubmit(handleRegister)}>
        <S.TopModal>
          <h1>Editar perfil</h1>
          <CloseModalBtn onClick={handleModal} />
        </S.TopModal>

        <S.InputsContainer>
          <S.SpanText>Informações pessoais</S.SpanText>
          <GeneralInput
            label="Nome"
            register={register}
            name={"name"}
            error={errors.name?.message}
            placeholder="Editar Nome"
          />

          <GeneralInput
            label="E-mail"
            register={register}
            name={"email"}
            error={errors.email?.message}
            type="email"
            placeholder="Editar E-mail"
          />

          <MaskInput
            label="CPF"
            register={register}
            name={"cpf"}
            error={errors.cpf?.message}
            placeholder="Editar CPF"
            mask="999.999.999-99"
          />

          <MaskInput
            label="Celular"
            register={register}
            name={"phone"}
            error={errors.phone?.message}
            placeholder="Editar telefone"
            mask="(99) 99999-9999"
          />
          <GeneralInput
            label="Data de nascimento"
            type="date"
            register={register}
            name={"birhtDate"}
            error={errors.birhtDate?.message}
            placeholder="Editar data de nascimento"
          />
          <TextArea
            label="Descrição"
            register={register}
            name={"description"}
            error={errors.description?.message}
            placeholder="Digitar descrição"
          />
        </S.InputsContainer>
        <S.BottoModal>
          <ButtonNegative type="button" onClick={handleModal}>
            Cancelar
          </ButtonNegative>
          <ButtonPrimary type="submit">Salvar alterações</ButtonPrimary>
        </S.BottoModal>
      </S.ContainerForm>
    </S.Centralize>
  );
};

export default UpdateProfile;
