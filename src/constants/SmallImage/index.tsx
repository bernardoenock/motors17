import { ImageContainer } from "./styles";

import DefaultImg from "../../assets/img/default.png";

const SmallImage: React.FC<{ image?: string }> = ({
  image = DefaultImg,
}): JSX.Element => {
  return (
    <ImageContainer>
      <img src={image} alt="Imagem anúncio" />
    </ImageContainer>
  );
};

export default SmallImage;
