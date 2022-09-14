import ThemeSelector from "../../ThemeSelector";

import { Container, Nav, NotLoggedContainer } from "./styles";
import SubMenuUserDesk from "./SubMenuDesk";

import { ButtonOutline2, ButtonLink } from "../../Button";

import { useHistory } from "react-router-dom";
import { IUser } from "../../../interfaces/user";

const NavBar: React.FC<{ user: IUser }> = ({ user }) => {
  const history = useHistory();

  const handlePage = (path: string) => {
    history.push(path);
  };

  return (
    <Container>
      <Nav>
        <ButtonLink
          onClick={() => {
            handlePage("/preview");
          }}
        >
          Carros
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            handlePage("/preview");
          }}
        >
          Motos
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            handlePage("/preview");
          }}
        >
          Leilão
        </ButtonLink>
      </Nav>

      {user.id ? (
        <SubMenuUserDesk userName={user.name!} />
      ) : (
        <NotLoggedContainer>
          <ButtonLink onClick={() => handlePage("/login")}>Login</ButtonLink>
          <ButtonOutline2 onClick={() => handlePage("/register")}>
            Cadastrar
          </ButtonOutline2>
        </NotLoggedContainer>
      )}
      <ThemeSelector />
    </Container>
  );
};

export default NavBar;
