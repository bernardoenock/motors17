import React, { useState } from "react";
import { IResBidUser } from "../../../../interfaces/bids";

import moment from "moment";
import {
  TopContainer,
  Card,
  DateSpan,
  Price,
  Title,
  TagWinnerBid,
  TagLoserBid,
  Headerinfos,
  Clock,
  BottomContainer,
} from "./styles";
import { useHistory } from "react-router-dom";

const BidCardUser: React.FC<{ bid: IResBidUser }> = ({ bid }) => {
  const history = useHistory();

  const announcePage = () => {
    history.push(`/ad_details?id=${bid.announcement.id}`);
  };

  const datePublished = new Date(bid.date);

  const [time, setTime] = useState("00:00:00");

  const restTime = () => {
    const endDate: any = new Date(bid.announcement.limitDate);
    const startDate: any = new Date();
    const difference = new Date(endDate - startDate);
    return [
      difference.getUTCHours(),
      difference.getUTCMinutes(),
      difference.getUTCSeconds(),
    ];
  };

  setTimeout(() => {
    const [hours, minutes, seconds] = restTime();
    setTime(
      `${hours <= 9 ? "0" + hours : hours}:${
        minutes <= 9 ? "0" + minutes : minutes
      }:${seconds <= 9 ? "0" + seconds : seconds}`
    );
  }, 1000);

  return (
    <Card onClick={announcePage}>
      <TopContainer>
        <Headerinfos>
          <Title>
            {bid.announcement.title[0].toUpperCase() +
              bid.announcement.title.slice(1).toLowerCase()}
          </Title>
          <DateSpan>
            &sdot; {moment(datePublished).startOf("minutes").fromNow()}
          </DateSpan>
        </Headerinfos>
        <Price>R$ {parseFloat(bid.value).toLocaleString("pt-BR")}</Price>
      </TopContainer>
      <BottomContainer>
        <Clock>{time}</Clock>
        {bid.topBid ? (
          <TagWinnerBid>Vencedor</TagWinnerBid>
        ) : (
          <TagLoserBid>Perdedor</TagLoserBid>
        )}
      </BottomContainer>
    </Card>
  );
};

export default BidCardUser;
