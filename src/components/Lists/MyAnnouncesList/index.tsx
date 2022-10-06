import React, { useCallback, useEffect, useState } from "react";
import { IAnnounceRes } from "../../../interfaces/auction";
import { useListAnnounces } from "../../../Providers/Announces/listAll";
import AuctionGroup from "./AuctionGroup";
import SalesGroup from "./SalesGroup";
import {
  AnnounceContainer,
  Container,
  TabsContent,
  TabsList,
  TabsRoot,
  ToggleItem,
  ToggleRoot,
  Trigger,
} from "./styles";

import * as Tabs from "@radix-ui/react-tabs";
import MyBidsList from "../MyBidsList";

const MyAnnouncesList: React.FC = () => {
  const [auctions, setAuctions] = useState<IAnnounceRes[]>([]);
  const [sales, setSales] = useState<IAnnounceRes[]>([]);

  const { getMyAuctions, getMySales } = useListAnnounces();

  const [value, setValue] = useState("in_progress");

  const [loadding, setLoadding] = useState(false);

  const handleFilterAnnounces = useCallback(async () => {
    const announceAuctions = await getMyAuctions(value);
    const announceSales = await getMySales(value);

    setAuctions(announceAuctions!);
    setSales(announceSales!);
    setLoadding(false);
  }, [getMyAuctions, getMySales, value]);

  useEffect(() => {
    setLoadding(true);
    handleFilterAnnounces();
  }, [handleFilterAnnounces, value]);

  return (
    <Container>
      <TabsRoot defaultValue="announce" orientation="vertical">
        <TabsList>
          <Trigger value="announce">Anúncios</Trigger>
          <Trigger value="bids">Lances</Trigger>
        </TabsList>
        <Tabs.Content value="announce">
          <AnnounceContainer>
            <ToggleRoot
              type="single"
              value={value}
              onValueChange={(value) => {
                if (value) {
                  setValue(value);
                }
              }}
            >
              <ToggleItem value="in_progress">Em progresso</ToggleItem>
              <ToggleItem value="stopped">Desativado</ToggleItem>
              <ToggleItem value="completed">Vendido</ToggleItem>
            </ToggleRoot>
            <AuctionGroup loadding={loadding} auctions={auctions} />
            <SalesGroup loadding={loadding} sales={sales} />
          </AnnounceContainer>
        </Tabs.Content>
        <TabsContent value="bids">
          <MyBidsList />
        </TabsContent>
      </TabsRoot>
    </Container>
  );
};

export default MyAnnouncesList;
