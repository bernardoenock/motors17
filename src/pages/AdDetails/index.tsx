import VehicleInfoBox from "../../components/Boxes/VehicleInfoBox";
import DescriptionBox from "../../components/Boxes/DescriptionBox";
import { ButtonDefault } from "../../components/Buttons";
import BigTopImage from "../../constants/BigtopImage";
import Header from "../../containers/Header/Index";
import Footer from "../../containers/Footer";

import DefaultImg from "../../assets/img/default.png";

import {
  SellerBoxInfo,
  LeftContainer,
  RightContainer,
  Page,
  AdDetailsMain,
  Title,
  TopContainer,
  BottomContainer,
  EmptyContainer,
} from "./styles";

import { Avatar } from "../../components/Boxes/UserInfoBox/styles";

import { useQuery } from "../../hooks/useQuery";
import { useCallback, useEffect, useState } from "react";
import { IAnnounceRes } from "../../interfaces/auction";
import { useListAnnounces } from "../../Providers/Announces/listAll";
import { useHistory } from "react-router-dom";

import { avatarLetters } from "../../utils/avatarLetters";
import CommentBox from "../../components/Boxes/CommentBox";
import GaleryImages from "../../constants/GaleryImages";
import EmptyMessage from "../../constants/EmptyMessage";
import AnnounceBids from "../../components/Lists/AnnounceBids";
import LoaderLocalComponent from "../../containers/Loader/LoaderLocalComponent";
import WinnerCard from "../../components/Cards/WinnerCard";

const AdDetails: React.FC = (): JSX.Element => {
  const query = useQuery();
  const history = useHistory();

  const [announce, setAnnounce] = useState<IAnnounceRes>({});
  const [loadding, setLoadding] = useState(false);

  const { getAnnounce } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const announceGet = await getAnnounce(query.get("id") as string);
    setAnnounce(announceGet);
    setLoadding(false);
  }, [getAnnounce, query]);

  useEffect(() => {
    setLoadding(true);
    handleAnnounces();
  }, [handleAnnounces]);

  const handleSellerPage = () => {
    history.push(`/seller?seller_id=${announce.seller!.id}`);
  };
  // console.log(announce);
  return (
    <Page>
      <Header />
      <AdDetailsMain>
        {loadding ? (
          <EmptyContainer>
            <LoaderLocalComponent />
          </EmptyContainer>
        ) : announce.id ? (
          <>
            <TopContainer>
              <LeftContainer>
                <BigTopImage image={announce.imagesUrl![0] || DefaultImg} />
                <VehicleInfoBox announce={announce} />
                <DescriptionBox description={announce.description as string} />
              </LeftContainer>

              <RightContainer>
                <GaleryImages images={announce.imagesUrl as string[]} />
                <SellerBoxInfo>
                  <Avatar background={announce.seller!.avatarColor}>
                    {avatarLetters(announce.seller!.name).toUpperCase()}
                  </Avatar>
                  <Title>{announce.seller!.name}</Title>
                  <ButtonDefault onClick={handleSellerPage}>
                    Ver todos anuncios
                  </ButtonDefault>
                </SellerBoxInfo>
              </RightContainer>
            </TopContainer>
            <BottomContainer>
              <RightContainer>
                <CommentBox announceId={announce.id} />
              </RightContainer>
              <LeftContainer>
                {announce.status !== "completed" ? (
                  announce.type === "auction" && (
                    <AnnounceBids id={announce.id} />
                  )
                ) : (
                  <WinnerCard announceId={announce.id} />
                )}
              </LeftContainer>
            </BottomContainer>
          </>
        ) : (
          <EmptyContainer>
            <EmptyMessage message="Anúncio não encontrado" />
          </EmptyContainer>
        )}
      </AdDetailsMain>
      <Footer />
    </Page>
  );
};

export default AdDetails;
