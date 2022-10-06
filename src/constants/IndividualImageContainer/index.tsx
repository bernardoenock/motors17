import { SmallPictureContainer } from "./styles";

const IndividualImageContainer: React.FC<{
  img: string;
  id: number;
  openModal: (id: number) => void;
}> = ({ img, openModal, id }): JSX.Element => {
  return (
    <SmallPictureContainer onClick={() => openModal(id)}>
      <img src={img} alt="Imagem ilustrativa de veículos" />
    </SmallPictureContainer>
  );
};

export default IndividualImageContainer;
