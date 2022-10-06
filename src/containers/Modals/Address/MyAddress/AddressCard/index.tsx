import React from "react";
import { IResAddress } from "../../../../../interfaces/address";
import { Card, ContentInfo, InfoSpan, Tag } from "./styles";

interface IProps {
  address: IResAddress;
  handleUpdate: () => void;
}

const AddressCard: React.FC<IProps> = ({ address, handleUpdate }) => {
  return (
    <Card onClick={handleUpdate}>
      <ContentInfo>
        <InfoSpan>
          {address.city} - {address.state}
        </InfoSpan>
        <InfoSpan>
          {address.street} - Nº {address.number}
        </InfoSpan>
        <InfoSpan>CEP: {address.zipCode}</InfoSpan>
      </ContentInfo>
      {address.mainAddress && <Tag>Principal</Tag>}
    </Card>
  );
};

export default AddressCard;
