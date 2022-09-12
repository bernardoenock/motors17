import React, { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { useUser } from "./login";

// import { APILocal } from "../../services/urls.api";
import { motorShopAPI } from "../../services/urls.api";
interface IContext {
  activateUser: (code: string) => Promise<boolean>;
  recoveryNewCode: () => Promise<void>;
}

export const ActivateUserContext = createContext({} as IContext);

export const ActivateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { getUser, token } = useUser();

  const activateUser = async (code: string) => {
    return await motorShopAPI
      .patch(`/users/activate/${code}`)
      .then(async (res) => {
        toast.success("Usuário ativado com sucesso!");
        await getUser(token!);
        return true;
      })
      .catch((err) => {
        toast.warning(err.response.data.message);
        return false;
      });
  };

  const recoveryNewCode = async () => {
    await motorShopAPI
      .get(`users/recovery/code`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(async (_) =>
        toast.success("O código foi enviado para o seu e-mail")
      )
      .catch((err) => toast.warning(err.response.data.message));
  };

  return (
    <ActivateUserContext.Provider value={{ activateUser, recoveryNewCode }}>
      {children}
    </ActivateUserContext.Provider>
  );
};

export const useActivate = () => useContext(ActivateUserContext);
