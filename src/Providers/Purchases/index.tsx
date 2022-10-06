import React, { createContext, useContext } from "react";
import { IResPurchases, ISetBuyUser } from "../../interfaces/purchases";
import { motorShopAPI } from "../../services/urls.api";
import { useUser } from "../User";
import { toast } from "react-toastify";
import { useLoad } from "../Loading";

interface IContext {
  getMyPurchases: () => Promise<IResPurchases[]>;
  setBuy: (id: string, value: ISetBuyUser) => Promise<void>;
}

export const PurchasesContext = createContext({} as IContext);

export const PurchasesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { token } = useUser();

  const { hiddenLoad } = useLoad();

  const getMyPurchases = async () => {
    return await motorShopAPI
      .get(`/purchases/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        toast.warning(err.response.data.message);
      });
  };

  const setBuy = async (id: string, value: ISetBuyUser) => {
    await motorShopAPI
      .post(
        `purchases/buy/${id}`,
        { ...value },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("Compra feita com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.warning(err.response.data.message);
      });
    hiddenLoad();
  };

  return (
    <PurchasesContext.Provider value={{ getMyPurchases, setBuy }}>
      {children}
    </PurchasesContext.Provider>
  );
};

export const usePurchases = () => useContext(PurchasesContext);
