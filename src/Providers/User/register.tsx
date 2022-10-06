import React, { createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { motorShopAPI } from "../../services/urls.api";
import { IUserRegister } from "../../interfaces/user";
import { useLoad } from "../Loading";

interface IContext {
  registerUser: (data: IUserRegister) => Promise<void>;
}

export const RegisterContext = createContext({} as IContext);

export const RegisterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const history = useHistory();
  const { hiddenLoad } = useLoad();

  const registerUser = async (data: IUserRegister) => {
    const isSeller = data.typeAccount === "client" ? false : true;

    delete data.typeAccount;

    await motorShopAPI
      .post("/users/signup", { ...data, isSeller })
      .then((res) => {
        console.log(res);
        toast.success("Cadastro feito com sucesso!");
        history.push("/login");
      })
      .catch((err) => {
        if (err.response.data.message) {
          toast.warning(err.response.data.message);
        }
        if (err.response.data.errors.body) {
          const errorsArr = err.response.data.errors.body;
          errorsArr.forEach(
            (error: { message: string; propertyPath: string }) => {
              toast.warning(error.message);
            }
          );
        }
      });
    hiddenLoad();
  };

  return (
    <RegisterContext.Provider value={{ registerUser }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
