import {
  AvatarContainer,
  Container,
  ContainerMultipleReactions,
  ReactionTagButton,
} from "./styles";
import { ButtonDisable, ButtonPrimary } from "../../../Buttons";

import Avatar from "../../../Avatar";
import { useCallback, useEffect, useState } from "react";
import { useUser } from "../../../../Providers/User";
import { IUser } from "../../../../interfaces/user";
import { useComments } from "../../../../Providers/Comments";

const REACTIONS: Array<string> = [
  "Gostei muito!",
  "Incrível",
  "Recomendarei para meus amigos",
  "Ótimo",
  "Show de bola",
  "Top demais",
];

interface IProps {
  id: string;
  update: () => Promise<void>;
}

const CommentInput: React.FC<IProps> = ({ id, update }): JSX.Element => {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState<IUser>({});

  const { token, getUser, avatarColor } = useUser();
  const { createComment } = useComments();

  const handleAuth = useCallback(async () => {
    const user = await getUser(token as string);
    setUser(user!);
  }, [getUser, token]);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  const handleComment = async () => {
    await createComment(id, comment);
    await update();
  };

  return (
    <Container>
      {user.id && (
        <AvatarContainer>
          <Avatar userName={user.name as string} color={avatarColor!} />
        </AvatarContainer>
      )}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Digitar comentário"
      />
      {user.id ? (
        <ButtonPrimary onClick={handleComment}>Comentar</ButtonPrimary>
      ) : (
        <ButtonDisable>Comentar</ButtonDisable>
      )}
      <ContainerMultipleReactions>
        {REACTIONS.map((current: string, index) => (
          <ReactionTagButton key={index} onClick={() => setComment(current)}>
            {current}
          </ReactionTagButton>
        ))}
      </ContainerMultipleReactions>
    </Container>
  );
};

export default CommentInput;
