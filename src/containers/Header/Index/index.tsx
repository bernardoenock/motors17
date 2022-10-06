import { useCallback, useEffect, useState } from "react";
import { IUser } from "../../../interfaces/user";
import { useUser } from "../../../Providers/User";
import Logo from "../../../constants/Logo";
import Modal from "../../Modals";
import MyAddress from "../../Modals/Address/MyAddress";
import DropDownMenu from "../DropDown";
import NavBar from "../NavBar";
import { ContainerHeader } from "./styles";

const Header: React.FC = () => {
  const { token, getUser } = useUser();

  const [user, setUser] = useState<IUser>({});
  const [show, setShow] = useState(false);

  const handleAuth = useCallback(async () => {
    const user = await getUser(token as string);
    setUser(user!);
  }, [getUser, token]);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  return (
    <>
      <Modal show={show} close={() => setShow(false)}>
        <MyAddress handleModal={() => setShow(false)} />
      </Modal>
      <ContainerHeader id="topo">
        <Logo />
        <DropDownMenu user={user} handleModal={() => setShow(true)} />
        <NavBar user={user} handleModal={() => setShow(true)} />
      </ContainerHeader>
    </>
  );
};

export default Header;
