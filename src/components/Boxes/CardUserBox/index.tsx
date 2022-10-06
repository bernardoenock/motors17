import { IAccount } from "../../../interfaces/user";
import { avatarLetters } from "../../../utils/avatarLetters";

import * as S from "./styles";

const CardUserBox: React.FC<{ account: IAccount }> = ({ account }) => {
  return (
    <S.CardUserBoxContainer>
      <S.TopDiv>
        <S.Avatar>{avatarLetters(account.name).toUpperCase()}</S.Avatar>
        <S.NameContainerWithTag>
          <h2>{account.name}</h2>
          <span>{account.isSeller ? "Anunciante" : "Comprador"}</span>
        </S.NameContainerWithTag>
      </S.TopDiv>
    </S.CardUserBoxContainer>
  );
};

export default CardUserBox;
