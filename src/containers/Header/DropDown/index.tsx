import * as S from "./styles";

import { useState } from "react";
import ThemeSelector from "../../../constants/ThemeSelector";
import BurguerIcon from "../BurguerIcon";
import SubMenuUser from "./SubMenu";
import { useHistory } from "react-router-dom";
import { IUser } from "../../../interfaces/user";

interface IProps {
  user: IUser;
  handleModal: () => void;
}

const DropDownMenu: React.FC<IProps> = ({ user, handleModal }) => {
  const [drop, setDrop] = useState<boolean>(false);

  const history = useHistory();

  const handlePage = (path: string) => {
    history.push(path);
  };

  const handleMenu = () => {
    setDrop(!drop);
  };

  return (
    <S.Container>
      <S.DropRoot onOpenChange={handleMenu}>
        <S.DropTrigger>
          <BurguerIcon open={drop} />
        </S.DropTrigger>
        <S.DropContent>
          <S.DropItem onClick={() => handlePage("/")}>Carros</S.DropItem>
          <S.DropItem onClick={() => handlePage("/")}>Motos</S.DropItem>
          <S.DropItem onClick={() => handlePage("/")}>Leilão</S.DropItem>
          <S.DropSeparator />
          {!user.id ? (
            <>
              <S.DropItem onClick={() => handlePage("/login")}>
                Login
              </S.DropItem>
              <S.DropItemButton onClick={() => handlePage("/register")}>
                Cadastrar
              </S.DropItemButton>
            </>
          ) : (
            <SubMenuUser handleModal={handleModal} userName={user.name!} />
          )}
          <S.DropSeparator />
          <S.DropItemSwitch>
            <ThemeSelector />
          </S.DropItemSwitch>
        </S.DropContent>
      </S.DropRoot>
    </S.Container>
  );
};
export default DropDownMenu;
