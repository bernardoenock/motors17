import IndividualImageContainer from "../../components/IndividualImageContainer";
import { TitleContainer } from "../../components/VehicleInformation/styles";
import VehicleInformation from "../../components/VehicleInformation";
import DescriptionBox from "../../components/DescriptionBox";
import SingleComment from "../../components/SingleComment";
import { ButtonDefault } from "../../components/Button";
import BigTopImage from "../../components/BigtopImage";
import TextField from "../../components/TextField";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import MERCEDES from "../../assets/img/vehicles/mercedes_teste.png";
import PROFILE from "../../assets/img/default_profile.png";

import {
  UserInfoBoxWithButtonContainer,
  LeftContainerAdDetailsTSecond,
  LeftContainerAdDetailsFirst,
  RightContainerAdDetails,
  ImageGalleryContainer,
  CommentBoxContainer,
  AdDetailsContainer,
  AdDetailsMain,
  FakeContainer,
} from "./styles";

import {
  NameContainerWithTag,
  TopImageContainer,
} from "../../components/UserInfoBox/styles";

const AdDetails: React.FC = (): JSX.Element => {
  const REACTION: Array<string> = [
    "Gostei muito!",
    "Incrível",
    "Recomendarei para meus amigos",
    "Ótimo",
    "Show de bola",
    "Top demais",
  ];

  return (
    <AdDetailsContainer>
      <Header />
      <AdDetailsMain>
        <LeftContainerAdDetailsFirst>
          <BigTopImage MERCEDES={MERCEDES} />
          <VehicleInformation />
          <DescriptionBox />
        </LeftContainerAdDetailsFirst>

        <RightContainerAdDetails>
          <ImageGalleryContainer>
            <TitleContainer>Fotos</TitleContainer>
            <div>
              {Array.from({ length: 6 }).map((_, index) => (
                <IndividualImageContainer key={index} MERCEDES={MERCEDES} />
              ))}
            </div>
          </ImageGalleryContainer>
          <UserInfoBoxWithButtonContainer>
            <TopImageContainer>
              <img src={PROFILE} alt="Imagem de perfil" />
            </TopImageContainer>
            <NameContainerWithTag>
              <h2>Samuel Leão</h2>
            </NameContainerWithTag>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <ButtonDefault>Ver todos anuncios</ButtonDefault>
          </UserInfoBoxWithButtonContainer>
        </RightContainerAdDetails>

        <LeftContainerAdDetailsTSecond>
          <CommentBoxContainer>
            <TitleContainer>Comentários</TitleContainer>
            {Array.from({ length: 3 }).map((_, index) => (
              <SingleComment key={index} PROFILE={PROFILE} />
            ))}
          </CommentBoxContainer>
          <TextField PROFILE={PROFILE} REACTION={REACTION} />
        </LeftContainerAdDetailsTSecond>
        <FakeContainer />
      </AdDetailsMain>
      <Footer />
    </AdDetailsContainer>
  );
};

export default AdDetails;
