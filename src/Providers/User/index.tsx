import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { IAccount, IUser } from "../../interfaces/user";
import { motorShopAPI } from "../../services/urls.api";
import { useLoad } from "../Loading";

interface ILogin {
  email?: string;
  password?: string;
}

interface IContext {
  token?: string;
  userId?: string;
  avatarColor?: string;
  loginUser: (data: ILogin) => Promise<void>;
  isSeller?: boolean;
  getUser: (token: string) => Promise<IUser>;
  logOut: () => void;
  isLogged: () => void;
  getSeller: (id: string) => Promise<IAccount>;
}

export const UserContext = createContext({} as IContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { hiddenLoad } = useLoad();

  const history = useHistory();

  const [avatarColor, setAvatarColor] = useState(
    localStorage.getItem("@avatarColor:Motor") || ""
  );
  const [token, setToken] = useState(
    localStorage.getItem("@token:Motor") || ""
  );
  const [userId, setUserId] = useState(
    localStorage.getItem("@userId:Motor") || ""
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
        setUserId(res.data.userId);
        localStorage.setItem("@token:Motor", res.data.token);
        localStorage.setItem("@userId:Motor", res.data.userId);
        await getUser(res.data.token);
        toast.success("Login feito com sucesso");
        history.push("/");
      })
      .catch((err) => {
        toast.warning("E-amil ou senha incorreto");
      });
    hiddenLoad();
  };

  const getUser = async (token: string) => {
    if (token !== "") {
      const response = await motorShopAPI
        .get("/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setIsSeller(res.data.isSeller);
          setAvatarColor(res.data.avatarColor);
          localStorage.setItem("@avatarColor:Motor", res.data.avatarColor);
          localStorage.setItem("@seller:Motor", res.data.isSeller);
          return res.data;
        })
        .catch((err) => console.log(err));

      return response;
    }
    return {};
  };

  const getSeller = async (id: string) => {
    const response = await motorShopAPI
      .get(`/users/seller/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    return response;
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
    setUserId("");
    history.push("/");
  };

  return (
    <UserContext.Provider
      value={{
        getSeller,
        token,
        userId,
        loginUser,
        isSeller,
        getUser,
        logOut,
        isLogged,
        avatarColor,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
