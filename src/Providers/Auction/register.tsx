import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { motorShopAPI } from "../../services/urls.api";

import { IRegisterAuction } from "../../interfaces/auction";

type IAuctionTypeContext = {
  auction: IRegisterAuction;
  registerAuction: (data: IRegisterAuction) => Promise<void>;
};

const initialValue = {
  auction: {},
  registerAuction: async () => {},
};

export const RegisterAuctionContext =
  createContext<IAuctionTypeContext>(initialValue);

export const RegisterAuctionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [auction, setAuction] = useState(initialValue.auction);

  const history = useHistory();

  const registerAuction = async (data: IRegisterAuction) => {
    const token = localStorage.getItem("@token:Motor");
    const isActive = true;

    await motorShopAPI
      .post(
        "/announcement/",
        { ...data, isActive: isActive },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log("Auction-->", res);
        setAuction(res);
        toast.success("Leilão criado com sucesso!");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.warning(err.response.data.message);
      });
  };

  return (
    <RegisterAuctionContext.Provider value={{ auction, registerAuction }}>
      {children}
    </RegisterAuctionContext.Provider>
  );
};

export const useAuctionRegister = () => useContext(RegisterAuctionContext);
