import { useCallback, useEffect, useState } from "react";
import { IAnnounceRes, type } from "../../../interfaces/auction";
import { useListAnnounces } from "../../../Providers/Announces/listAll";
import * as S from "./styles";
import { typeVehicle } from "../../../interfaces/auction";
import SaleCard from "../../Cards/SaleCard";
import EmptyMessage from "../../../constants/EmptyMessage";
import LoaderLocalComponent from "../../../containers/Loader/LoaderLocalComponent";

const CarsList: React.FC = () => {
  const [announce, setAnnounce] = useState<IAnnounceRes[]>([]);
  const [loadding, setLoadding] = useState(false);

  const { getListFilter } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const list = await getListFilter({
      typeVehicle: typeVehicle.car,
      type: type.sale,
    });
    setAnnounce(list);
    setLoadding(false);
  }, [getListFilter]);

  useEffect(() => {
    setLoadding(true);

    handleAnnounces();
  }, [handleAnnounces]);

  return (
    <>
      <S.TitleContainer>Carros</S.TitleContainer>
      <S.CardContainer>
        {loadding ? (
          <LoaderLocalComponent />
        ) : announce.length ? (
          announce.map((item) => <SaleCard announce={item} key={item.id} />)
        ) : (
          <EmptyMessage message="Nenhum carro anúnciado" />
        )}
      </S.CardContainer>
    </>
  );
};

export default CarsList;
