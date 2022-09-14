import {
  Container,
  DropContent,
  DropItem,
  DropItemButton,
  DropItemSwitch,
  DropRoot,
  DropSeparator,
  DropTrigger,
} from "./styles";

import { useState } from "react";
import ThemeSelector from "../../ThemeSelector";
import BurguerIcon from "../BurguerIcon";
import SubMenuUser from "./SubMenu";
import { useHistory } from "react-router-dom";
import { IUser } from "../../../interfaces/user";

const DropDownMenu: React.FC<{ user: IUser }> = ({ user }) => {
  const [drop, setDrop] = useState<boolean>(false);

  const history = useHistory();

  const handlePage = (path: string) => {
    history.push(path);
  };

  const handleMenu = () => {
    setDrop(!drop);
  };

  return (
    <Container>
      <DropRoot onOpenChange={handleMenu}>
        <DropTrigger>
          <BurguerIcon open={drop} />
        </DropTrigger>
        <DropContent>
          <DropItem onClick={() => handlePage("/preview")}>Carros</DropItem>
          <DropItem onClick={() => handlePage("/preview")}>Motos</DropItem>
          <DropItem onClick={() => handlePage("/preview")}>Leilão</DropItem>
          <DropSeparator />
          {!user.id ? (
            <>
              <DropItem onClick={() => handlePage("/login")}>Login</DropItem>
              <DropItemButton onClick={() => handlePage("/register")}>
                Cadastrar
              </DropItemButton>
            </>
          ) : (
            <SubMenuUser userName={user.name!} />
          )}
          <DropSeparator />
          <DropItemSwitch>
            <ThemeSelector />
          </DropItemSwitch>
        </DropContent>
      </DropRoot>
    </Container>
  );
};
export default DropDownMenu;
