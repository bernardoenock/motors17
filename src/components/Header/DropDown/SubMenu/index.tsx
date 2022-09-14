import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useHistory } from "react-router-dom";
import { useUser } from "../../../../Providers/User/login";
import Avatar from "../../../Avatar";
import { DropItem } from "../styles";
import { LoggedTrigger, SubMenuContainer } from "./styles";

interface Iprops {
  userName: string;
}

const SubMenuUser: React.FC<Iprops> = ({ userName }) => {
  const { logOut } = useUser();
  const history = useHistory();

  return (
    <DropdownMenu.Root>
      <LoggedTrigger>
        <Avatar userName={userName} />
      </LoggedTrigger>

      <SubMenuContainer>
        <DropItem onSelect={() => history.push("/profile")}>
          Meu Perfil
        </DropItem>
        <DropItem>Gerenciar Endereços</DropItem>
        <DropItem>Minhas Compras</DropItem>
        <DropItem onSelect={logOut}>Sair</DropItem>
        <DropdownMenu.Arrow />
      </SubMenuContainer>
    </DropdownMenu.Root>
  );
};

export default SubMenuUser;
