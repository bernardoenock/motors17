import React, { createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { motorShopAPI } from "../../services/urls.api";

import { IRegisterAnnounce } from "../../interfaces/auction";
import { useLoad } from "../Loading";

type IAuctionTypeContext = {
  registerAnnounce: (data: IRegisterAnnounce, images?: File[]) => Promise<void>;
};

const initialValue = {
  auction: {},
  registerAnnounce: async () => {},
};

export const RegisterAnnounceContext =
  createContext<IAuctionTypeContext>(initialValue);

export const RegisterAnnounceProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const history = useHistory();

  const { hiddenLoad } = useLoad();

  const registerAnnounce = async (data: IRegisterAnnounce, images?: File[]) => {
    const token = localStorage.getItem("@token:Motor");

    const formData = new FormData();
    Object.entries(data).forEach((item) => formData.append(item[0], item[1]));
    if (images) {
      images.forEach((item) => formData.append("images", item));
    }

    await motorShopAPI
      .post("/announcement/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Leilão criado com sucesso!");
        history.push("/");
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
    <RegisterAnnounceContext.Provider value={{ registerAnnounce }}>
      {children}
    </RegisterAnnounceContext.Provider>
  );
};

export const useAnnounceRegister = () => useContext(RegisterAnnounceContext);
