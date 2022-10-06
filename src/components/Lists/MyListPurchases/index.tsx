import { useCallback, useEffect, useState } from "react";
import EmptyMessage from "../../../constants/EmptyMessage";
import LoaderLocalComponent from "../../../containers/Loader/LoaderLocalComponent";
import { IResPurchases } from "../../../interfaces/purchases";
import { usePurchases } from "../../../Providers/Purchases";
import CardPurchase from "./CardPurchase";
import { ContainerGroup, ContainerList, Title } from "./styles";

const MyListPurchases: React.FC = () => {
  const [purchases, setPurchases] = useState<IResPurchases[]>([]);
  const [loadding, setLoadding] = useState(false);

  const { getMyPurchases } = usePurchases();

  const handlePurchases = useCallback(async () => {
    const myPurchases = await getMyPurchases();
    setPurchases(myPurchases!);

    setLoadding(false);
  }, [getMyPurchases]);

  useEffect(() => {
    setLoadding(true);
    handlePurchases();
  }, [handlePurchases]);

  return (
    <ContainerList>
      <Title>Minhas Compras</Title>
      <ContainerGroup>
        {loadding ? (
          <LoaderLocalComponent />
        ) : purchases.length ? (
          purchases.map((item) => (
            <CardPurchase key={item.id} purchase={item} />
          ))
        ) : (
          <EmptyMessage message="Nenhuma compra registrada" />
        )}
      </ContainerGroup>
    </ContainerList>
  );
};

export default MyListPurchases;
