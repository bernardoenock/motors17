import React, { createContext, useContext } from "react";
import { IResComment } from "../../interfaces/comments";
import { motorShopAPI } from "../../services/urls.api";
import { useLoad } from "../Loading";
import { useUser } from "../User";

interface IContext {
  getCommentsAnnounce: (id: string) => Promise<IResComment[]>;
  createComment: (id: string, comment: string) => Promise<void>;
  editComment: (id: string, comment: string) => Promise<void>;
  deleteComment: (id: string) => Promise<void>;
}

export const CommentContext = createContext({} as IContext);

export const CommentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { token } = useUser();
  const { hiddenLoad } = useLoad();

  const createComment = async (id: string, comment: string) => {
    await motorShopAPI
      .post(
        `/comment/${id}`,
        { comment },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    hiddenLoad();
  };

  const getCommentsAnnounce = async (id: string) => {
    return await motorShopAPI
      .get(`/comment/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editComment = async (id: string, comment: string) => {
    await motorShopAPI
      .patch(
        `/comment/${id}`,
        { comment },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    hiddenLoad();
  };

  const deleteComment = async (id: string) => {
    await motorShopAPI
      .delete(`/comment/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    hiddenLoad();
  };
  return (
    <CommentContext.Provider
      value={{ getCommentsAnnounce, createComment, deleteComment, editComment }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useComments = () => useContext(CommentContext);
