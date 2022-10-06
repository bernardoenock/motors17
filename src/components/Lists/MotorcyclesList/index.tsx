import { useCallback, useEffect, useState } from "react";
import { IAnnounceRes, typeVehicle, type } from "../../../interfaces/auction";
import { useListAnnounces } from "../../../Providers/Announces/listAll";
import SaleCard from "../../Cards/SaleCard";
import EmptyMessage from "../../../constants/EmptyMessage";
import LoaderLocalComponent from "../../../containers/Loader/LoaderLocalComponent";
import * as S from "./styles";

const MotorcyclesList: React.FC = () => {
  const [announce, setAnnounce] = useState<IAnnounceRes[]>([]);
  const [loadding, setLoadding] = useState(false);

  const { getListFilter } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const list = await getListFilter({
      typeVehicle: typeVehicle.motocycle,
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
      <S.TitleContainer>Motos</S.TitleContainer>
      <S.CardContainer>
        {loadding ? (
          <LoaderLocalComponent />
        ) : announce.length ? (
          announce.map((item) => <SaleCard announce={item} key={item.id} />)
        ) : (
          <EmptyMessage message="Nenhuma moto anúnciada" />
        )}
      </S.CardContainer>
    </>
  );
};

export default MotorcyclesList;
