import React from "react";
import { IAnnounceRes } from "../../../../interfaces/auction";
import AuctionCard from "../../../Cards/AuctionCard";
import LoaderLocalComponent from "../../../../containers/Loader/LoaderLocalComponent";
import EmptyMessage from "../../../../constants/EmptyMessage";
import * as S from "./styles";

const AuctionGroup: React.FC<{
  loadding: boolean;
  auctions: IAnnounceRes[];
}> = ({ auctions, loadding }) => {
  return (
    <S.Container>
      <S.Title>Leilões</S.Title>
      {loadding ? (
        <LoaderLocalComponent />
      ) : auctions.length ? (
        <S.ContainerGroup>
          {auctions.map((item) => (
            <AuctionCard key={item.id} announce={item} />
          ))}
        </S.ContainerGroup>
      ) : (
        <EmptyMessage message="Nenhum leilão encontrado" />
      )}
    </S.Container>
  );
};

export default AuctionGroup;
