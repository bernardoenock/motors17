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
import { useListAnnounces } from "../../../Providers/Auction/listAll";
import { useCallback, useEffect, useState } from "react";
import { IAuctionRes } from "../../../interfaces/auction";

const AuctionList: React.FC = () => {
  const [announces, setAnnounces] = useState<IAuctionRes[]>([]);
  const { getListAuction } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const announce = await getListAuction();
    setAnnounces(announce!);
  }, [getListAuction]);

  useEffect(() => {
    handleAnnounces();
  }, [handleAnnounces]);
  console.log(announces);
  return (
    <Container>
      <h2>Leilão</h2>
      <ContainerCardAuction>
        {announces.map((item, index) => (
          <CardAuction key={index}>
            <ContainerAuction image={item.imagesUrl!}>
              <ContainerInfo>
                <ContainerTitle>
                  <Stopwatch />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </ContainerTitle>
                <ContainerAvatar>
                  <Avatar userName={item.seller!.name} />
                </ContainerAvatar>

                <ContainerBottom>
                  <YearKM>
                    <ContainerBottomInfo>
                      <p>{item.year}</p>
                    </ContainerBottomInfo>
                    <ContainerBottomInfo>
                      <p>{item.km}KM</p>
                    </ContainerBottomInfo>
                  </YearKM>

                  <ContainerPrice>
                    <p>R$ {parseFloat(item.price || "0").toFixed(2)}</p>
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
