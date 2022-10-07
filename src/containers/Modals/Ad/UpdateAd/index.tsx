import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useState } from "react";

import GeneralInput from "../../../../components/Forms/Components/Inputs/GeneralInput";
import InputFile from "../../../../components/Forms/Components/Inputs/InputFile";

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
import { useDeleteAd } from "../../../../Providers/Announces/delete";
import { useAnnounceUpdate } from "../../../../Providers/Announces/update";
import { useLoad } from "../../../../Providers/Loading";

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

  const [typeSale, setTypeSale] = useState(announce.type || "sale");
  const [isActive, setIsActive] = useState(announce.isActive ? "yes" : "no");
  const [typeVehicle, setTypeVehicle] = useState(announce.typeVehicle || "car");

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

  const { updateAnnounce } = useAnnounceUpdate();
  const { showLoad } = useLoad();

  const handleUpdate = async (data: IDataAnnounce) => {
    showLoad();

    const images = files.map((item) => {
      return item.file;
    });

    if (announce.id)
      await updateAnnounce(
        announce.id,
        {
          ...data,
          type: typeSale,
          typeVehicle: typeVehicle,
          isActive: isActive === "yes",
        },
        images
      );
  };

  const { setDeleteAd } = useDeleteAd();

  const deleteAdConfirm = async () => {
    if (announce.id) {
      await setDeleteAd(announce.id);
      handleModal();
    }
  };

  return (
    <S.Centralize>
      <S.ContainerForm onSubmit={handleSubmit(handleUpdate)}>
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
            defaultValue={announce.title}
          />
          <S.RowInputsContainer>
            <GeneralInput
              label="Ano"
              register={register}
              name={"year"}
              error={errors.year?.message}
              placeholder="Digitar ano"
              defaultValue={announce.year}
            />
            <GeneralInput
              label="Quilometragem"
              register={register}
              name={"km"}
              error={errors.km?.message}
              placeholder="0"
              defaultValue={announce.km}
            />
            <GeneralInput
              label="Preço"
              register={register}
              name={"price"}
              error={errors.price?.message}
              placeholder="Digitar preço"
              defaultValue={announce.price}
            />
          </S.RowInputsContainer>

          <TextArea
            label="Descrição"
            register={register}
            name={"description"}
            error={errors.description?.message}
            placeholder="Digitar descrição"
            defaultValue={announce.description}
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
              <B.ButtonPrimaryOpacity type="button" onClick={addInputFile}>
                Adicionar campo
              </B.ButtonPrimaryOpacity>
            ) : (
              <B.ButtonDisable type="button">Adicionar campo</B.ButtonDisable>
            )}
          </S.BtnAddImg>
        </S.InputsContainer>
        <S.BottoModal>
          <B.ButtonNegative type="button" onClick={deleteAdConfirm}>
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
