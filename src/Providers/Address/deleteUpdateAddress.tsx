import React, { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { IAddressData } from "../../interfaces/address";
import { motorShopAPI } from "../../services/urls.api";
import { useLoad } from "../Loading";
import { useUser } from "../User";

interface IContext {
  setDefaultAddress: (id: string) => Promise<void>;
  updateAddress: (id: string, data: IAddressData) => Promise<void>;
  deleteAddress: (id: string) => Promise<void>;
}

export const DeleteUpdateAddressContext = createContext({} as IContext);

export const DeleteUpdateAddressProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { token } = useUser();
  const { hiddenLoad } = useLoad();

  const setDefaultAddress = async (id: string) => {
    await motorShopAPI
      .patch(
        `/address/default/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.warn("Houve algum erro"));
    hiddenLoad();
  };

  const updateAddress = async (id: string, data: IAddressData) => {
    await motorShopAPI
      .patch(`/address/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => toast.success("Endereço atualizado com sucesso"))
      .catch((err) => toast.warn("Houve algum erro"));
    hiddenLoad();
  };

  const deleteAddress = async (id: string) => {
    await motorShopAPI
      .delete(`/address/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => toast.success("Endereço deletado com sucesso"))
      .catch((err) => toast.warn("Houve algum erro"));
    hiddenLoad();
  };

  return (
    <DeleteUpdateAddressContext.Provider
      value={{ setDefaultAddress, deleteAddress, updateAddress }}
    >
      {children}
    </DeleteUpdateAddressContext.Provider>
  );
};

export const useUpdateAddress = () => useContext(DeleteUpdateAddressContext);
