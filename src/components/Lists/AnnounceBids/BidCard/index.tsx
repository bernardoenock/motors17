import React from "react";
import { IResBids } from "../../../../interfaces/bids";
import Avatar from "../../../Avatar";
import moment from "moment";
import { TopContainer, Card, DateSpan, Price } from "./styles";

const BidCard: React.FC<{ bid: IResBids }> = ({ bid }) => {
  const datePublished = new Date(bid.date);

  return (
    <Card>
      <TopContainer>
        <Avatar userName={bid.user.name} color={bid.user.avatarColor} />
        <DateSpan>
          &sdot; {moment(datePublished).startOf("minutes").fromNow()}
        </DateSpan>
      </TopContainer>
      <Price>R$ {parseFloat(bid.value).toLocaleString("pt-BR")}</Price>
    </Card>
  );
};

export default BidCard;
