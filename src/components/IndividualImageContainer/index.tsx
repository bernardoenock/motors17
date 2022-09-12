import { SmallPictureContainer } from "./styles";

const IndividualImageContainer: React.FC<{ MERCEDES: string }> = ({
  MERCEDES,
}): JSX.Element => {
  return (
    <SmallPictureContainer>
      <img src={MERCEDES} alt="Imagem ilustrativa de veículos" />
    </SmallPictureContainer>
  );
};

export default IndividualImageContainer;
