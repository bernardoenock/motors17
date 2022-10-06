import React, { useCallback, useEffect, useState } from "react";
import { IPurshaceAnnounceRes } from "../../interfaces/purshase";
import { useBids } from "../../Providers/Bids";
import Avatar from "../Avatar";
import { Card, DateSpan, Main, Price, Title, TopContainer } from "./styles";
import moment from "moment";

interface IProps {
  announceId: string;
}

const WinnerCard: React.FC<IProps> = ({ announceId }) => {
  const [winner, setWinner] = useState<IPurshaceAnnounceRes>({});
  const { getWinnerAnnounce } = useBids();
  const datePurshase = new Date(winner.date!);

  const handleWinner = useCallback(async () => {
    const getWinner = await getWinnerAnnounce(announceId);
    setWinner(getWinner);
  }, [announceId, getWinnerAnnounce]);

  useEffect(() => {
    handleWinner();
  }, [handleWinner]);
  console.log(winner);

  return (
    <Card>
      <Title>Comprador</Title>
      <Main>
        <TopContainer>
          <Avatar
            userName={winner.user!.name!}
            color={winner.user!.avatarColor!}
          />
          <DateSpan>
            &sdot; {moment(datePurshase).startOf("minutes").fromNow()}
          </DateSpan>
        </TopContainer>
        <Price>R$ {parseFloat(winner.value!).toLocaleString("pt-BR")}</Price>
      </Main>
    </Card>
  );
};

export default WinnerCard;
