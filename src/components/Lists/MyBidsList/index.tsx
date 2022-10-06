import React, { useCallback, useEffect, useState } from "react";
import { IResBidUser } from "../../../interfaces/bids";
import { useBids } from "../../../Providers/Bids";
import EmptyMessage from "../../../constants/EmptyMessage";
import LoaderLocalComponent from "../../../containers/Loader/LoaderLocalComponent";
import BidCardUser from "./BidCardUser";
import { Container, ContainerGroup, Title } from "./styles";

const MyBidsList: React.FC = () => {
  const [bids, setBids] = useState<IResBidUser[]>([]);
  const [loadding, setLoadding] = useState(false);

  const { getBidsUser } = useBids();

  const handleBids = useCallback(async () => {
    const userBids = await getBidsUser();
    setBids(userBids!);
    setLoadding(false);
  }, [getBidsUser]);

  useEffect(() => {
    setLoadding(true);
    handleBids();
  }, [handleBids]);

  return (
    <Container>
      <Title>Meus lances</Title>
      <ContainerGroup>
        {loadding ? (
          <LoaderLocalComponent />
        ) : bids.length ? (
          bids.map((item) => <BidCardUser key={item.id} bid={item} />)
        ) : (
          <EmptyMessage message="Nenhum lance encontrado" />
        )}
      </ContainerGroup>
    </Container>
  );
};

export default MyBidsList;
