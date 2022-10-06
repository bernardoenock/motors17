import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import GeneralInput from "../../../../components/Forms/Components/Inputs/GeneralInput";
import { ButtonNegative, ButtonPrimary } from "../../../../components/Buttons";
import { CloseModalBtn } from "../../../../components/Buttons/CloseModalBtn";
import MaskInput from "../../../../components/Forms/Components/Inputs/MaskInput";
import { CreateAddressSchema } from "../../../../validations/address.validations";

import * as S from "./styles";

import {
  IAddress,
  useZipCode,
} from "../../../../Providers/Address/cepValidation";
import { useAddress } from "../../../../Providers/Address/listCreateAddress";
import { useCallback, useState } from "react";
import { IAddressData } from "../../../../interfaces/address";
import { useLoad } from "../../../../Providers/Loading";

interface IProps {
  handleModal: () => void;
}

const CreateAddress: React.FC<IProps> = ({ handleModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateAddressSchema),
  });

  const { verifyZipCode } = useZipCode();
  const { createAddress } = useAddress();
  const { showLoad } = useLoad();

  const [address, setAddress] = useState<IAddress>({});

  const cepValidation = useCallback(
    async (value: string) => {
      const defaultAddress = await verifyZipCode(value);
      if (defaultAddress.uf) {
        setAddress(defaultAddress);
      }
    },
    [verifyZipCode]
  );
  const handleRegister = async (data: IAddressData) => {
    showLoad();
    createAddress(data);
  };

  return (
    <S.ContainerForm onSubmit={handleSubmit(handleRegister)}>
      <S.TopModal>
        <h1>Novo endereço</h1>
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
          onChange={(e) => {
            cepValidation(e.target.value);
          }}
        />
        <S.RowInputsContainer>
          <GeneralInput
            label="Estado"
            register={register}
            name={"state"}
            error={errors.state?.message}
            placeholder="Estado..."
            defaultValue={address.uf}
          />
          <GeneralInput
            label="Cidade"
            register={register}
            name={"city"}
            error={errors.city?.message}
            placeholder="Cidade..."
            defaultValue={address.localidade}
          />
        </S.RowInputsContainer>

        <GeneralInput
          label="Rua"
          register={register}
          name={"street"}
          error={errors.street?.message}
          placeholder="Rua..."
          defaultValue={address.logradouro}
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
            defaultValue={address.complemento}
          />
        </S.RowInputsContainer>
      </S.InputsContainer>
      <S.BottoModal>
        <ButtonNegative type="button" onClick={handleModal}>
          Cancelar
        </ButtonNegative>
        <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
      </S.BottoModal>
    </S.ContainerForm>
  );
};

export default CreateAddress;
