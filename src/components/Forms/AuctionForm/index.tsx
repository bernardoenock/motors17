import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useState } from "react";
import { useAuctionRegister } from "../../../Providers/Auction/register";

import GeneralInput from "../Components/Inputs/GeneralInput";
import { ButtonOutline2, ButtonPrimary } from "../../Button";
import { SelectTypeSale, SelectTypeVehicle } from "../Components/SelectType";

import * as S from "./styles";

import { IDataAuction } from "../../../interfaces/auction";

const AuctionForm: React.FC = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    year: yup
      .string()
      .required("Campo obrigatório")
      .test(
        (dateString) =>
          new Date(dateString!) < new Date(new Date().getFullYear())
      ),
    km: yup.number().typeError("Somente números").required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [typeSale, setTypeSale] = useState("sale");
  const [typeVehicle, setTypeVehicle] = useState("car");

  const { registerAuction } = useAuctionRegister();

  const handleRegister = async (data: IDataAuction) => {
    await registerAuction({
      ...data,
      type: typeSale,
      typeVehicle: typeVehicle,
    });
  };

  return (
    <S.ContainerForm onSubmit={handleSubmit(handleRegister)}>
      <h1>Criar Anuncio</h1>

      <S.InputsContainer>
        <S.SpanText>Tipo de anuncio</S.SpanText>
        <SelectTypeSale value={typeSale} setValue={setTypeSale} />

        <S.SpanText>Informações do veiculo</S.SpanText>
        <GeneralInput
          label="Título"
          register={register}
          name={"title"}
          error={errors.title?.message}
          placeholder="Digitar título"
        />
        <div>
          <GeneralInput
            label="Ano"
            register={register}
            name={"year"}
            error={errors.year?.message}
            placeholder="Digitar ano"
          />
          <GeneralInput
            label="Quilometragem"
            register={register}
            name={"km"}
            error={errors.km?.message}
            placeholder="0"
          />
          <GeneralInput
            label="Preço"
            register={register}
            name={"price"}
            error={errors.price?.message}
            placeholder="Digitar preço"
          />
        </div>
        <GeneralInput
          label="Descrição"
          register={register}
          name={"description"}
          error={errors.description?.message}
          placeholder="Digitar descrição"
        />

        <S.SpanText>Tipo do veiculo</S.SpanText>
        <SelectTypeVehicle value={typeVehicle} setValue={setTypeVehicle} />
      </S.InputsContainer>
      <div>
        <ButtonOutline2 type="button" onClick={() => "Close"}>
          Cancelar
        </ButtonOutline2>
        <ButtonPrimary type="submit">Criar anúncio</ButtonPrimary>
      </div>
    </S.ContainerForm>
  );
};

export default AuctionForm;
