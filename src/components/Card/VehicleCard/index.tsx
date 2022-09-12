import IMG_PROFILE from "../../../assets/img/default_profile.png";

import {
  BaseboardContainer,
  ParentTagContainer,
  PriceContainer,
  NameContainer,
  CardContainer,
  ImgContainer,
  TagContainer,
} from "./styles";

const VehicleCard: React.FC<{ IMG: string }> = ({ IMG }): JSX.Element => {
  return (
    <CardContainer>
      <ImgContainer>
        <img src={IMG} alt="Imagem de carros e motos" />
      </ImgContainer>
      <h2>Product title stay here - max 1 line</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        repudiandae fugiat perferendis, praesen
      </p>
      <NameContainer>
        <div>
          <img src={IMG_PROFILE} alt="Imagem de perfil" />
        </div>
        <span>Samuel Leão</span>
      </NameContainer>
      <BaseboardContainer>
        <ParentTagContainer>
          <TagContainer>
            <span>0 KM</span>
          </TagContainer>
          <TagContainer>
            <span>2019</span>
          </TagContainer>
        </ParentTagContainer>
        <PriceContainer>
          <span>R$ 00.000,00</span>
        </PriceContainer>
      </BaseboardContainer>
    </CardContainer>
  );
};

export default VehicleCard;
