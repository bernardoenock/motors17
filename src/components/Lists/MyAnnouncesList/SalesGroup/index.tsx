import React from "react";
import { IAnnounceRes } from "../../../../interfaces/auction";

import SaleCard from "../../../Cards/SaleCard";
import LoaderLocalComponent from "../../../../containers/Loader/LoaderLocalComponent";

import * as S from "./styles";
import EmptyMessage from "../../../../constants/EmptyMessage";

const SalesGroup: React.FC<{ loadding: boolean; sales: IAnnounceRes[] }> = ({
  sales,
  loadding,
}) => {
  return (
    <S.Container>
      <S.Title>Vendas</S.Title>
      {loadding ? (
        <LoaderLocalComponent />
      ) : sales.length ? (
        <S.ContainerGroup>
          {sales.map((item) => (
            <SaleCard key={item.id} announce={item} />
          ))}
        </S.ContainerGroup>
      ) : (
        <EmptyMessage message="Nenhuma venda encontrada" />
      )}
    </S.Container>
  );
};

export default SalesGroup;
