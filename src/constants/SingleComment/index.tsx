import { IResComment } from "../../interfaces/comments";
import { useUser } from "../../Providers/User";
import Avatar from "../../components/Avatar";
import {
  ActionButtons,
  AvatarContainer,
  Comment,
  EditCommentContainer,
  InputComment,
  SingleCommetContainer,
  TopContainer,
} from "./styles";

import { MdModeEditOutline, MdSend } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { useState } from "react";
import { useComments } from "../../Providers/Comments";

interface IProps {
  comment: IResComment;
  update: () => Promise<void>;
}

const SingleComment: React.FC<IProps> = ({ comment, update }): JSX.Element => {
  const { userId } = useUser();
  const { editComment, deleteComment } = useComments();

  const [edit, setEdit] = useState(false);
  const [commentValue, setCommentValue] = useState(comment.comment);

  const handleEditComment = async () => {
    setEdit(false);
    await editComment(comment.id, commentValue);
    await update();
  };
  const handleDeleteComment = async () => {
    await deleteComment(comment.id);
    await update();
  };

  return (
    <SingleCommetContainer>
      <TopContainer>
        <AvatarContainer>
          <Avatar
            userName={comment.user.name}
            color={comment.user.avatarColor}
          />
        </AvatarContainer>
        {userId === comment.user.id && (
          <ActionButtons>
            <MdModeEditOutline onClick={() => setEdit(!edit)} />
            <IoMdTrash onClick={handleDeleteComment} />
          </ActionButtons>
        )}
      </TopContainer>
      {edit ? (
        <EditCommentContainer>
          <InputComment
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
          />
          <MdSend onClick={handleEditComment} />
        </EditCommentContainer>
      ) : (
        <Comment>{commentValue}</Comment>
      )}
    </SingleCommetContainer>
  );
};

export default SingleComment;
