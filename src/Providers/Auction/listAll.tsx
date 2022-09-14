import React, { createContext, useContext } from "react";
import { IAuctionRes, IFiltersParams } from "../../interfaces/auction";

import { motorShopAPI } from "../../services/urls.api";

interface IListContext {
  getListAuction: () => Promise<IAuctionRes[]>;
  getListSales: () => Promise<IAuctionRes[]>;
  getListFilter: ({
    gtDataLimit,
    gtPrice,
    gtrYear,
    ltDataLimit,
    ltPrice,
    ltYear,
    title,
    type,
    typeVehicle,
  }: IFiltersParams) => Promise<IAuctionRes[]>;
}

export const ListAnounceContext = createContext({} as IListContext);

export const ListAnounceProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const getListAuction = async () => {
    const response = await motorShopAPI
      .get("/announcement/?type=auction")
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => console.log(err));

    return response;
  };

  const getListSales = async () => {
    const response = await motorShopAPI
      .get("/announcement/?type=sale")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));

    return response;
  };

  const getListFilter = async ({
    gtDataLimit,
    gtPrice,
    gtrYear,
    ltDataLimit,
    ltPrice,
    ltYear,
    title,
    type,
    typeVehicle,
  }: IFiltersParams) => {
    const filter = `
    ${ltDataLimit && `ltDataLimit=${ltDataLimit}&`}
    ${gtDataLimit && `gtDataLimit=${gtDataLimit}&`}
    ${gtPrice && `gtPrice=${gtPrice}&`}
    ${gtrYear && `gtrYear=${gtrYear}&`}
    ${ltPrice && `ltPrice=${ltPrice}&`}
    ${ltYear && `ltYear=${ltYear}&`}
    ${title && `title=${title}&`}
    ${type && `type=${type}&`}
    ${typeVehicle && `typeVehicle=${typeVehicle}&`}
    `;

    const response = await motorShopAPI
      .get(`/announcement/?${filter}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));

    return response;
  };

  return (
    <ListAnounceContext.Provider
      value={{ getListAuction, getListFilter, getListSales }}
    >
      {children}
    </ListAnounceContext.Provider>
  );
};

export const useListAnnounces = () => useContext(ListAnounceContext);
