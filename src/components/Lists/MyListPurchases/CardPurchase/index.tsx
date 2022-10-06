import { useCallback, useEffect, useState } from "react";
import SmallImage from "../../../../constants/SmallImage";
import LoaderLocalComponent from "../../../../containers/Loader/LoaderLocalComponent";
import { IAnnounceRes } from "../../../../interfaces/auction";
import { IResPurchases } from "../../../../interfaces/purchases";
import { useListAnnounces } from "../../../../Providers/Announces/listAll";

import * as S from "./styles";

const CardPurchase: React.FC<{ purchase: IResPurchases }> = ({ purchase }) => {
  const [announce, setAnnounce] = useState<IAnnounceRes>({});
  const [loadding, setLoadding] = useState(false);

  const { getAnnounce } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const announceGet = await getAnnounce(purchase.announcement.id);
    setAnnounce(announceGet!);
    setLoadding(false);
  }, [getAnnounce, purchase]);

  useEffect(() => {
    setLoadding(true);
    handleAnnounces();
  }, [handleAnnounces]);
  return (
    <S.ContainerCard>
      {loadding ? (
        <S.EmptyContainer>
          <LoaderLocalComponent />
        </S.EmptyContainer>
      ) : (
        <>
          <S.AllInfoCard>
            {announce.imagesUrl ? (
              <SmallImage image={announce.imagesUrl![0]} />
            ) : (
              <SmallImage />
            )}
            <S.InfoCard>
              <S.Title>{announce.title}</S.Title>
              <S.Price>
                R$
                {parseFloat(announce.price!).toLocaleString("pt-BR")}
              </S.Price>
            </S.InfoCard>
          </S.AllInfoCard>

          <S.TagPurchase>A caminho</S.TagPurchase>
        </>
      )}
    </S.ContainerCard>
  );
};

export default CardPurchase;
