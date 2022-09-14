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

import MaskInput from "../../Forms/Components/Inputs/MaskInput";

interface IHandleModal {
  handleModal: () => void;
}

const UpdateAddress = ({ handleModal }: IHandleModal) => {
  const schema = yup.object().shape({
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
          <h1>Editar endereço</h1>
          <CloseModalBtn onClick={handleModal} />
        </S.TopModal>

        <S.InputsContainer>
          <S.SpanText>Informações de endereço</S.SpanText>
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
          <S.RowInputsContainer>
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
          </S.RowInputsContainer>

          <GeneralInput
            label="Rua"
            register={register}
            name={"street"}
            error={errors.street?.message}
            placeholder="Rua..."
            // defaultValue={address.logradouro}
          />
          <S.RowInputsContainer>
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
          </S.RowInputsContainer>
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

export default UpdateAddress;
