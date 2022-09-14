import { ButtonPrimaryOutline } from "../Button";

import {
  UserInfoBoxContainer,
  NameContainerWithTag,
  Avatar,
  TopDiv,
  ButtonsContainer,
} from "./styles";

interface IProps {
  userName: string;
  description: string;
  typeUser: boolean;
  openProfileModal: () => void;
  openAnounceModal: () => void;
}

const UserInfoBox: React.FC<IProps> = ({
  userName,
  description,
  typeUser,
  openAnounceModal,
  openProfileModal,
}): JSX.Element => {
  const avatarLetters = (name: string = "Usuário") => {
    if (name.split(" ").length > 1) {
      return name[0] + name[name.split("").indexOf(" ") + 1];
    }
    return name[0];
  };

  return (
    <UserInfoBoxContainer>
      <TopDiv>
        <Avatar>{avatarLetters(userName).toUpperCase()}</Avatar>
        <NameContainerWithTag>
          <h2>{userName}</h2>
          <span>{typeUser ? "Anunciante" : "Comprador"}</span>
        </NameContainerWithTag>
      </TopDiv>
      <p>{description}</p>
      <ButtonsContainer>
        <ButtonPrimaryOutline onClick={openProfileModal}>
          Editar perfil
        </ButtonPrimaryOutline>
        {typeUser && (
          <ButtonPrimaryOutline onClick={openAnounceModal}>
            Criar anúncio
          </ButtonPrimaryOutline>
        )}
      </ButtonsContainer>
    </UserInfoBoxContainer>
  );
};

export default UserInfoBox;
