import * as S from "./styles";
import { useListAnnounces } from "../../../Providers/Announces/listAll";
import { useCallback, useEffect, useState } from "react";
import { IAnnounceRes } from "../../../interfaces/auction";
import AuctionCard from "../../Cards/AuctionCard";
import EmptyMessage from "../../../constants/EmptyMessage";
import LoaderLocalComponent from "../../../containers/Loader/LoaderLocalComponent";

const AuctionList: React.FC = () => {
  const [announces, setAnnounces] = useState<IAnnounceRes[]>([]);
  const [loadding, setLoadding] = useState(false);
  const { getListAuction } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const announce = await getListAuction();
    setAnnounces(announce!);
    setLoadding(false);
  }, [getListAuction]);

  useEffect(() => {
    setLoadding(true);
    handleAnnounces();
  }, [handleAnnounces]);

  return (
    <S.Container>
      <S.TitleContainer>Leilão</S.TitleContainer>
      <S.ContainerCardAuction>
        {loadding ? (
          <LoaderLocalComponent />
        ) : announces.length ? (
          announces.map((item) => <AuctionCard key={item.id} announce={item} />)
        ) : (
          <EmptyMessage message="Nenhum leilão ativo no momento" />
        )}
      </S.ContainerCardAuction>
    </S.Container>
  );
};

export default AuctionList;
