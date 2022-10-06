import React, { useCallback, useEffect, useState } from "react";
import { IAnnounceRes } from "../../../interfaces/auction";
import { useListAnnounces } from "../../../Providers/Announces/listAll";
import { useFilters } from "../../../Providers/Filters";
import AuctionCard from "../../Cards/AuctionCard";
import SaleCard from "../../Cards/SaleCard";
import EmptyMessage from "../../../constants/EmptyMessage";
import LoaderLocalComponent from "../../../containers/Loader/LoaderLocalComponent";
import { Container, ListContainer } from "./styles";

const FilterLists: React.FC = () => {
  const [announces, setAnnounces] = useState<IAnnounceRes[]>([]);
  const [loadding, setLoadding] = useState(false);

  const { getListFilter } = useListAnnounces();
  const { propsFilters } = useFilters();

  const handleAnnounces = useCallback(async () => {
    const announceRes = await getListFilter(propsFilters);
    setAnnounces(announceRes);
    setLoadding(false);
  }, [getListFilter, propsFilters]);

  useEffect(() => {
    setLoadding(true);
    handleAnnounces();
  }, [handleAnnounces]);

  return (
    <Container>
      {loadding ? (
        <LoaderLocalComponent />
      ) : (
        <ListContainer>
          {announces.length ? (
            announces.map((item) => {
              return propsFilters.type !== "sale" ? (
                <AuctionCard key={item.id} announce={item} />
              ) : (
                <SaleCard announce={item} key={item.id} />
              );
            })
          ) : (
            <EmptyMessage message="Nenhum anúncio encontrado" />
          )}
        </ListContainer>
      )}
    </Container>
  );
};

export default FilterLists;
