import { TopImageContainer } from "./styles";

const BigTopImage: React.FC<{ image: string }> = ({ image }): JSX.Element => {
  return (
    <TopImageContainer>
      <img src={image} alt="Imagem anúncio" />
    </TopImageContainer>
  );
};

export default BigTopImage;
