import React, { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { IAddressData, IResAddress } from "../../interfaces/address";
import { motorShopAPI } from "../../services/urls.api";
import { useLoad } from "../Loading";
import { useUser } from "../User";

interface IContext {
  createAddress: (data: IAddressData) => Promise<void>;
  getMyAddress: () => Promise<IResAddress[]>;
  findAddress: (id: string) => Promise<IResAddress>;
}

export const ListCreateAddressContext = createContext({} as IContext);

export const ListCreateAddressProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { token } = useUser();
  const { hiddenLoad } = useLoad();

  const createAddress = async (data: IAddressData) => {
    await motorShopAPI
      .post("/address", data, { headers: { Authorization: `Bearer ${token}` } })
      .then((_) => toast.success("Novo endereço cadastrado"))
      .catch((err) => toast.warn(err.response.data.message));
    hiddenLoad();
  };

  const getMyAddress = async () => {
    return await motorShopAPI
      .get("/address", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  const findAddress = async (id: string) => {
    return await motorShopAPI
      .get(`/address/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  return (
    <ListCreateAddressContext.Provider
      value={{ createAddress, findAddress, getMyAddress }}
    >
      {children}
    </ListCreateAddressContext.Provider>
  );
};

export const useAddress = () => useContext(ListCreateAddressContext);
