import React, { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { useUser } from ".";

// import { APILocal } from "../../services/urls.api";
import { motorShopAPI } from "../../services/urls.api";
import { useLoad } from "../Loading";
interface IContext {
  activateUser: (code: string) => Promise<boolean>;
  recoveryNewCode: () => Promise<void>;
}

export const ActivateUserContext = createContext({} as IContext);

export const ActivateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { getUser, token } = useUser();

  const { hiddenLoad } = useLoad();

  const activateUser = async (code: string) => {
    return await motorShopAPI
      .patch(`/users/activate/${code}`)
      .then(async (res) => {
        toast.success("Usuário ativado com sucesso!");
        await getUser(token!);
        hiddenLoad();
        return true;
      })
      .catch((err) => {
        toast.warning(err.response.data.message);
        hiddenLoad();
        return false;
      });
  };

  const recoveryNewCode = async () => {
    await motorShopAPI
      .get(`users/recovery/code`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(async (_) => {
        hiddenLoad();
        toast.success("O código foi enviado para o seu e-mail");
      })
      .catch((err) => {
        hiddenLoad();
        toast.warning(err.response.data.message);
      });
  };

  return (
    <ActivateUserContext.Provider value={{ activateUser, recoveryNewCode }}>
      {children}
    </ActivateUserContext.Provider>
  );
};

export const useActivate = () => useContext(ActivateUserContext);
