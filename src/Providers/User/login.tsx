import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
// import { APILocal } from "../../services/urls.api";
import { motorShopAPI } from "../../services/urls.api";

interface ILogin {
  email?: string;
  password?: string;
}

interface IContext {
  token?: string;
  loginUser: (data: ILogin) => Promise<void>;
  isSeller?: boolean;
  getUser: (token: string) => Promise<void>;
  logOut: () => void;
  isLogged: () => void;
}

export const LoginContext = createContext({} as IContext);

export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const history = useHistory();

  const [token, setToken] = useState(
    localStorage.getItem("@token:Motor") || ""
  );

  const [isSeller, setIsSeller] = useState(() => {
    const seller = localStorage.getItem("@seller:Motor");

    if (seller) {
      return JSON.parse(seller);
    }

    return false;
  });

  const loginUser = async (data: ILogin) => {
    await motorShopAPI
      .post("/users/signin", data)
      .then(async (res) => {
        setToken(res.data.token);
        localStorage.setItem("@token:Motor", res.data.token);
        await getUser(res.data.token);
        toast.success("Login feito com sucesso");
        history.push("/");
      })
      .catch((err) => {
        toast.warning("E-amil ou senha incorreto");
      });
  };

  const getUser = async (token: string) => {
    if (token !== "") {
      const response = await motorShopAPI
        .get("/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setIsSeller(res.data.isSeller);
          localStorage.setItem("@seller:Motor", res.data.isSeller);
          return res.data;
        })
        .catch((err) => console.log(err));

      return response;
    }
    return {};
  };

  const isLogged = () => {
    if (token.length <= 0) {
      toast.warning("Você deve estar logado para continuar");
      history.push("/login");
    }
  };

  const logOut = () => {
    const theme = localStorage.getItem("@MotorShop:Theme.mode");
    localStorage.clear();
    localStorage.setItem("@MotorShop:Theme.mode", theme || "light");
    setIsSeller(false);
    setToken("");
    history.push("/");
  };

  return (
    <LoginContext.Provider
      value={{ token, loginUser, isSeller, getUser, logOut, isLogged }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useUser = () => useContext(LoginContext);
