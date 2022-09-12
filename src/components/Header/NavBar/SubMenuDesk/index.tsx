import { useUser } from "../../../../Providers/User/login";
import Avatar from "../../../Avatar";
import { Content, Item, LoggedMenu, Trigger } from "./styles";

interface Iprops {
  userName: string;
}

const SubMenuUserDesk: React.FC<Iprops> = ({ userName }) => {
  const { logOut } = useUser();

  return (
    <LoggedMenu>
      <Trigger>
        <Avatar userName={userName} />
      </Trigger>

      <Content sideOffset={21}>
        <Item>Editar Perfil</Item>
        <Item>Editar Endereço</Item>
        <Item>Minhas Compras</Item>
        <Item onSelect={logOut}>Sair</Item>
      </Content>
    </LoggedMenu>
  );
};

export default SubMenuUserDesk;
