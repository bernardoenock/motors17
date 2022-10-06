import React, { createContext, useContext } from "react";

import { toast } from "react-toastify";
import { motorShopAPI } from "../../services/urls.api";
import { IUpdateUser } from "../../interfaces/user";
import { useLoad } from "../Loading";
import { useUser } from ".";

interface IContext {
  updateUser: (data: IUpdateUser) => Promise<void>;
}

export const UpdateUserContext = createContext({} as IContext);

export const UpdateUserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { hiddenLoad } = useLoad();
  const { token } = useUser();

  const updateUser = async (data: IUpdateUser) => {
    await motorShopAPI
      .patch("/users/me", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        toast.success("Usuário atualizado com sucesso!");
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        toast.warning(err.response.data.message);
      });
    hiddenLoad();
  };

  return (
    <UpdateUserContext.Provider value={{ updateUser }}>
      {children}
    </UpdateUserContext.Provider>
  );
};

export const useUpdateUser = () => useContext(UpdateUserContext);
