import React, { createContext, useContext } from "react";
import { motorShopAPI } from "../../services/urls.api";
import { useLoad } from "../Loading";
import { useUser } from "../User";
import { toast } from "react-toastify";

interface IContext {
  setDeleteAd: (id: string) => Promise<void>;
}

export const DeleteAdContext = createContext({} as IContext);

export const DeleteAdProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { token } = useUser();

  const { hiddenLoad } = useLoad();

  const setDeleteAd = async (id: string) => {
    await motorShopAPI
      .delete(`announcement/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        toast.success("Anuncio deletado com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.warning(err.response.data.message);
      });
    hiddenLoad();
  };

  return (
    <DeleteAdContext.Provider value={{ setDeleteAd }}>
      {children}
    </DeleteAdContext.Provider>
  );
};

export const useDeleteAd = () => useContext(DeleteAdContext);
