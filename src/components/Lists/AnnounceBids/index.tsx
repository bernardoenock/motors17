import React, { useCallback, useEffect, useState } from "react";
import { IResBids } from "../../../interfaces/bids";
import { useBids } from "../../../Providers/Bids";
import EmptyMessage from "../../../constants/EmptyMessage";
import LoaderLocalComponent from "../../../containers/Loader/LoaderLocalComponent";
import BidCard from "./BidCard";
import { BidsGroup, Container, Empty, Title } from "./styles";

const AnnounceBids: React.FC<{ id: string }> = ({ id }) => {
  const [bids, setBids] = useState<IResBids[]>([]);
  const [loadding, setLoadding] = useState(false);
  const { getBidsAnnounce } = useBids();

  const handleBids = useCallback(async () => {
    const get = await getBidsAnnounce(id);
    setBids(get);
    setLoadding(false);
  }, [getBidsAnnounce, id]);

  useEffect(() => {
    setLoadding(true);
    handleBids();
  }, [handleBids]);

  return (
    <Container>
      <Title>Lances</Title>

      {loadding ? (
        <LoaderLocalComponent />
      ) : bids && bids.length ? (
        <BidsGroup>
          {bids.map((item) => (
            <BidCard bid={item} key={item.id} />
          ))}
        </BidsGroup>
      ) : (
        <Empty>
          <EmptyMessage message="Nenhum lance encontrado" />
        </Empty>
      )}
    </Container>
  );
};

export default AnnounceBids;
