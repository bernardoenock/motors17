import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useState } from "react";
import { useAnnounceRegister } from "../../../../Providers/Announces/register";

import GeneralInput from "../../../../components/Forms/Components/Inputs/GeneralInput";
import {
  ButtonDisable,
  ButtonNegative,
  ButtonPrimary,
  ButtonPrimaryOpacity,
} from "../../../../components/Buttons";
import {
  SelectTypePublished,
  SelectTypeSale,
  SelectTypeVehicle,
} from "../../../../components/Forms/Components/SelectType";

import * as S from "./styles";

import { IDataAnnounce } from "../../../../interfaces/auction";

import { CloseModalBtn } from "../../../../components/Buttons/CloseModalBtn";
import TextArea from "../../../../components/Forms/Components/TextArea";
import { useLoad } from "../../../../Providers/Loading";
import InputFile from "../../../../components/Forms/Components/Inputs/InputFile";

interface IHandleModal {
  handleModal: () => void;
}

const CreateAd = ({ handleModal }: IHandleModal) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    year: yup
      .string()
      .required("Campo obrigatório")
      .test(
        (dateString) =>
          new Date(new Date(dateString!).getFullYear()) <=
          new Date(new Date().getFullYear())
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
  const [isActive, setIsActive] = useState("yes");
  const [typeVehicle, setTypeVehicle] = useState("car");

  const [numberFiles, setNumbersFiles] = useState(1);
  const [files, setFiles] = useState<{ id: number; file: File }[]>([]);

  const addInputFile = () => {
    setNumbersFiles(numberFiles + 1);
  };

  const addFile = (index: number, file: File) => {
    const filesArr = files.find((item) => item.id === index);

    if (filesArr) {
      const data = [
        ...files.filter((item) => item.id !== index),
        { id: index, file },
      ];
      setFiles(data);
    } else {
      setFiles([...files, { id: index, file }]);
    }
  };

  const { registerAnnounce } = useAnnounceRegister();

  const { showLoad } = useLoad();

  const handleRegister = async (data: IDataAnnounce) => {
    showLoad();

    const images = files.map((item) => {
      return item.file;
    });

    await registerAnnounce(
      {
        ...data,
        type: typeSale,
        typeVehicle: typeVehicle,
        isActive: isActive === "yes",
      },
      images
    );
  };

  return (
    <S.Centralize>
      <S.ContainerForm onSubmit={handleSubmit(handleRegister)}>
        <S.TopModal>
          <h1>Criar Anúncio</h1>
          <CloseModalBtn type="button" onClick={handleModal} />
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
          <div>
            {Array.from({ length: numberFiles }).map((_, index) => (
              <InputFile
                key={index}
                name="images"
                id={index.toString()}
                saveFile={addFile}
              />
            ))}
          </div>
          <S.BtnAddImg>
            {numberFiles < 5 ? (
              <ButtonPrimaryOpacity type="button" onClick={addInputFile}>
                Adicionar campo
              </ButtonPrimaryOpacity>
            ) : (
              <ButtonDisable type="button">Adicionar campo</ButtonDisable>
            )}
          </S.BtnAddImg>
        </S.InputsContainer>
        <S.BottoModal>
          <ButtonNegative type="button" onClick={handleModal}>
            Cancelar
          </ButtonNegative>
          <ButtonPrimary type="submit">Criar anúncio</ButtonPrimary>
        </S.BottoModal>
      </S.ContainerForm>
    </S.Centralize>
  );
};

export default CreateAd;
