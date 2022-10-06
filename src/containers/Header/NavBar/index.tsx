import ThemeSelector from "../../../constants/ThemeSelector";

import { Container, Nav, NotLoggedContainer } from "./styles";
import SubMenuUserDesk from "./SubMenuDesk";

import { ButtonOutline2, ButtonLink } from "../../../components/Buttons";

import { useHistory } from "react-router-dom";
import { IUser } from "../../../interfaces/user";
import { useFilters } from "../../../Providers/Filters";
import { IFiltersParams } from "../../../interfaces/auction";

interface IProps {
  handleModal: () => void;
  user: IUser;
}

const NavBar: React.FC<IProps> = ({ user, handleModal }) => {
  const history = useHistory();
  const { filterBy } = useFilters();

  const handlePage = (data: IFiltersParams) => {
    history.push("/");
    filterBy(data);
  };

  return (
    <Container>
      <Nav>
        <ButtonLink
          onClick={() => {
            handlePage({ typeVehicle: "car" });
          }}
        >
          Carros
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            handlePage({ typeVehicle: "motocycle" });
          }}
        >
          Motos
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            handlePage({ type: "auction" });
          }}
        >
          Leilão
        </ButtonLink>
      </Nav>

      {user.id ? (
        <SubMenuUserDesk handleModal={handleModal} userName={user.name!} />
      ) : (
        <NotLoggedContainer>
          <ButtonLink onClick={() => history.push("/login")}>Login</ButtonLink>
          <ButtonOutline2 onClick={() => history.push("/register")}>
            Cadastrar
          </ButtonOutline2>
        </NotLoggedContainer>
      )}
      <ThemeSelector />
    </Container>
  );
};

export default NavBar;
