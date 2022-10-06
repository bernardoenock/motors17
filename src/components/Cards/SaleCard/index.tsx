import { IAnnounceRes } from "../../../interfaces/auction";
import DefaultImg from "../../../assets/img/default.png";
import {
  BaseboardContainer,
  ParentTagContainer,
  CardContainer,
  ImgContainer,
  AvatarContainer,
  Title,
  Description,
  Tag,
  Price,
} from "./styles";
import Avatar from "../../Avatar";
import { useHistory } from "react-router-dom";

const SaleCard: React.FC<{ announce: IAnnounceRes }> = ({
  announce,
}): JSX.Element => {
  const history = useHistory();
  const announcePage = () => {
    history.push(`/ad_details?id=${announce.id}`);
  };

  return (
    <CardContainer>
      <ImgContainer onClick={announcePage}>
        <img src={announce.imagesUrl![0] || DefaultImg} alt="Imagem anuncio" />
      </ImgContainer>
      <Title>
        {announce.title![0].toUpperCase() + announce.title?.slice(1)}
      </Title>
      <Description>{announce.description}</Description>
      <AvatarContainer>
        <Avatar
          userName={announce.seller?.name!}
          color={announce.seller?.avatarColor!}
        />
      </AvatarContainer>
      <BaseboardContainer>
        <ParentTagContainer>
          <Tag>{announce.km}Km</Tag>
          <Tag>{announce.year}</Tag>
        </ParentTagContainer>
        <Price>
          R$
          {parseFloat(announce.price!).toLocaleString("pt-BR")}
        </Price>
      </BaseboardContainer>
    </CardContainer>
  );
};

export default SaleCard;
