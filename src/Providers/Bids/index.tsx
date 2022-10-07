import React, { createContext, useContext } from "react";
import { IResBids, IResBidUser, ISetBidUser } from "../../interfaces/bids";
import { motorShopAPI } from "../../services/urls.api";
import { useUser } from "../User";
import { toast } from "react-toastify";
import { useLoad } from "../Loading";
import { IPurshaceAnnounceRes } from "../../interfaces/purchases";

interface IContext {
  getBidsAnnounce: (id: string) => Promise<IResBids[]>;
  setBid: (id: string, value: ISetBidUser) => Promise<void>;
  getBidsUser: () => Promise<IResBidUser[]>;
  getWinnerAnnounce: (id: string) => Promise<IPurshaceAnnounceRes>;
}

export const BidsContext = createContext({} as IContext);

export const BidsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { token } = useUser();

  const { hiddenLoad } = useLoad();

  const getBidsAnnounce = async (id: string) => {
    return await motorShopAPI
      .get(`/bids/announcement/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        toast.warning(err.response.data.message);
      });
  };
  const setBid = async (id: string, value: ISetBidUser) => {
    await motorShopAPI
      .post(
        `bids/announcement/${id}`,
        { ...value },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("Lance feito com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.warning(err.response.data.message);
      });
    hiddenLoad();
  };

  const getBidsUser = async () => {
    return await motorShopAPI
      .get(`/bids/user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getWinnerAnnounce = async (id: string) => {
    return await motorShopAPI
      .get(`/purchases/annonce/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BidsContext.Provider
      value={{ getBidsAnnounce, setBid, getBidsUser, getWinnerAnnounce }}
    >
      {children}
    </BidsContext.Provider>
  );
};

export const useBids = () => useContext(BidsContext);
