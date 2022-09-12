import IMG_PROFILE from "../../../assets/img/default_profile.png";

import Stopwatch from "../../Stopwatch";

import Avatar from "../../Avatar";

import {
  ContainerCardAuction,
  ButtonAuction,
  CardAuction,
  Container,
  ContainerAuction,
  ContainerAvatar,
  ContainerBottom,
  ContainerBottomInfo,
  ContainerInfo,
  ContainerPrice,
  ContainerTitle,
  YearKM,
} from "./styles";

const AuctionList: React.FC = () => {
  return (
    <Container>
      <h2>Leilão</h2>
      <ContainerCardAuction>
        {Array.from({ length: 10 }).map((_, index) => (
          <CardAuction key={index}>
            <ContainerAuction>
              <ContainerInfo>
                <ContainerTitle>
                  <Stopwatch />
                  <h3>
                    Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem...
                  </p>
                </ContainerTitle>
                <ContainerAvatar>
                  <Avatar userName="Rodrigo Tavares" />
                </ContainerAvatar>

                <ContainerBottom>
                  <YearKM>
                    <ContainerBottomInfo>
                      <p>2013</p>
                    </ContainerBottomInfo>
                    <ContainerBottomInfo>
                      <p>0 KM</p>
                    </ContainerBottomInfo>
                  </YearKM>

                  <ContainerPrice>
                    <p>R$ 00.000,00</p>
                  </ContainerPrice>
                </ContainerBottom>
              </ContainerInfo>
            </ContainerAuction>
            <ButtonAuction>
              Acessar a pagina do leilão
              <svg width="2em" height="1.5em" viewBox="0 0 15 15">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </ButtonAuction>
          </CardAuction>
        ))}
      </ContainerCardAuction>
    </Container>
  );
};

export default AuctionList;
