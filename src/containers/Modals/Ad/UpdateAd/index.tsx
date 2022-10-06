import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useState } from "react";

import GeneralInput from "../../../../components/Forms/Components/Inputs/GeneralInput";

import {
  SelectTypePublished,
  SelectTypeSale,
  SelectTypeVehicle,
} from "../../../../components/Forms/Components/SelectType";

import * as S from "./styles";
import * as B from "../../../../components/Buttons";

import { IAnnounceRes, IDataAnnounce } from "../../../../interfaces/auction";

import { CloseModalBtn } from "../../../../components/Buttons/CloseModalBtn";
import TextArea from "../../../../components/Forms/Components/TextArea";

interface IProps {
  handleModal: () => void;
  announce: IAnnounceRes;
}

const UpdateAd: React.FC<IProps> = ({ handleModal, announce }) => {
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

  const [typeSale, setTypeSale] = useState(announce.type || "sale");
  const [isActive, setIsActive] = useState(announce.isActive ? "yes" : "no");
  const [typeVehicle, setTypeVehicle] = useState(announce.typeVehicle || "car");

  const handleRegister = async (data: IDataAnnounce) => {
    console.log(data);
  };

  return (
    <S.Centralize>
      <S.ContainerForm onSubmit={handleSubmit(handleRegister)}>
        <S.TopModal>
          <h1>Editar Anúncio</h1>
          <CloseModalBtn onClick={handleModal} />
        </S.TopModal>

        <S.InputsContainer>
          <S.SpanText>Tipo de anuncio</S.SpanText>
          <SelectTypeSale value={typeSale} setValue={setTypeSale} />

          <S.SpanText>Publicação</S.SpanText>
          <SelectTypePublished value={isActive} setValue={setIsActive} />

          <S.SpanText>Informações do veiculo</S.SpanText>
          <GeneralInput
            label="Título"
            register={register}
            name={"title"}
            error={errors.title?.message}
            placeholder="Digitar título"
          />
          <S.RowInputsContainer>
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
          </S.RowInputsContainer>

          <TextArea
            label="Descrição"
            register={register}
            name={"description"}
            error={errors.description?.message}
            placeholder="Digitar descrição"
          />

          <S.SpanText>Tipo do veiculo</S.SpanText>
          <SelectTypeVehicle value={typeVehicle} setValue={setTypeVehicle} />
        </S.InputsContainer>
        <S.BottoModal>
          <B.ButtonNegative type="button" onClick={handleModal}>
            Excluir anúncio
          </B.ButtonNegative>
          <B.ButtonPrimaryDisable type="submit">
            Salvar alterações
          </B.ButtonPrimaryDisable>
        </S.BottoModal>
      </S.ContainerForm>
    </S.Centralize>
  );
};

export default UpdateAd;
