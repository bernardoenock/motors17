import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useUser } from "../../../../Providers/User/login";
import Avatar from "../../../Avatar";
import { DropItem } from "../styles";
import { LoggedTrigger, SubMenuContainer } from "./styles";

interface Iprops {
  userName: string;
}

const SubMenuUser: React.FC<Iprops> = ({ userName }) => {
  const { logOut } = useUser();

  return (
    <DropdownMenu.Root>
      <LoggedTrigger>
        <Avatar userName={userName} />
      </LoggedTrigger>

      <SubMenuContainer>
        <DropItem>Editar Perfil</DropItem>
        <DropItem>Editar endereço</DropItem>
        <DropItem>Minhas Compras</DropItem>
        <DropItem onSelect={logOut}>Sair</DropItem>
        <DropdownMenu.Arrow />
      </SubMenuContainer>
    </DropdownMenu.Root>
  );
};

export default SubMenuUser;
