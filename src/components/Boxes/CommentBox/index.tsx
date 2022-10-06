import React, { useCallback, useEffect, useState } from "react";
import { IResComment } from "../../../interfaces/comments";
import { useComments } from "../../../Providers/Comments";
import EmptyMessage from "../../../constants/EmptyMessage";
import CommentInput from "../../Forms/Components/CommentInput";
import LoaderLocalComponent from "../../../containers/Loader/LoaderLocalComponent";
import SingleComment from "../../../constants/SingleComment";
import { CommentBoxContainer, CommentsGroup, Empty, Title } from "./styles";

const CommentBox: React.FC<{ announceId: string }> = ({ announceId }) => {
  const [comments, setComments] = useState<IResComment[]>();
  const [loadding, setLoadding] = useState(false);

  const { getCommentsAnnounce } = useComments();

  const handleAnnounces = useCallback(async () => {
    const commentsGet = await getCommentsAnnounce(announceId);
    setComments(commentsGet);
    setLoadding(false);
  }, [getCommentsAnnounce, announceId]);

  useEffect(() => {
    setLoadding(true);

    handleAnnounces();
  }, [handleAnnounces]);

  return (
    <>
      <CommentBoxContainer>
        <Title>Comentários</Title>
        {loadding ? (
          <LoaderLocalComponent />
        ) : comments?.length ? (
          <CommentsGroup>
            {comments.map((item) => (
              <SingleComment
                key={item.id}
                comment={item}
                update={handleAnnounces}
              />
            ))}
          </CommentsGroup>
        ) : (
          <Empty>
            <EmptyMessage message="Nenhum comentário encontrado" />
          </Empty>
        )}
      </CommentBoxContainer>
      <CommentInput id={announceId} update={handleAnnounces} />
    </>
  );
};

export default CommentBox;
