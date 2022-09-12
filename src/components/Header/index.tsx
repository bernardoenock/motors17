import { useCallback, useEffect, useState } from "react";
import { IUser } from "../../interfaces/user";
import { useUser } from "../../Providers/User/login";
import Logo from "../Logo";
import DropDownMenu from "./DropDown";
import NavBar from "./NavBar";
import { ContainerHeader } from "./styles";

const Header: React.FC = () => {
  const { token, getUser } = useUser();

  const [user, setUser] = useState<IUser>({});

  const handleAuth = useCallback(async () => {
    const user = await getUser(token as string);
    setUser(user!);
  }, [getUser, token]);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  return (
    <ContainerHeader id="topo">
      <Logo />
      <DropDownMenu user={user} />
      <NavBar user={user} />
    </ContainerHeader>
  );
};

export default Header;
