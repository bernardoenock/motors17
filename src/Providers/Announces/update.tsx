import React, { createContext, useContext } from "react";
import { toast } from "react-toastify";

import { motorShopAPI } from "../../services/urls.api";

import { IRegisterAnnounce } from "../../interfaces/auction";
import { useLoad } from "../Loading";

type IAuctionTypeContext = {
  updateAnnounce: (
    id: string,
    data: IRegisterAnnounce,
    images?: File[]
  ) => Promise<void>;
};

const initialValue = {
  auction: {},
  updateAnnounce: async () => {},
};

export const UpdateAnnounceContext =
  createContext<IAuctionTypeContext>(initialValue);

export const UpdateAnnounceProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { hiddenLoad } = useLoad();

  const updateAnnounce = async (
    id: string,
    data: IRegisterAnnounce,
    images?: File[]
  ) => {
    const token = localStorage.getItem("@token:Motor");

    const formData = new FormData();
    Object.entries(data).forEach((item) => formData.append(item[0], item[1]));
    if (images) {
      images.forEach((item) => formData.append("images", item));
    }

    await motorShopAPI
      .patch(`/announcement/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Anúncio editado com sucesso!");
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
    <UpdateAnnounceContext.Provider value={{ updateAnnounce }}>
      {children}
    </UpdateAnnounceContext.Provider>
  );
};

export const useAnnounceUpdate = () => useContext(UpdateAnnounceContext);
