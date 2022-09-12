import { useCallback, useEffect, useState } from "react";
import ActivateUserSpan from "../../components/ActivateUser";
import BannerHome from "../../components/Banners/BannerHome";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AuctionList from "../../components/Lists/AuctionList";
import CarsList from "../../components/Lists/CarsList";
import MotorcyclesList from "../../components/Lists/MotorcyclesList";
import { IUser } from "../../interfaces/user";
import { useUser } from "../../Providers/User/login";

import { Main, Page } from "./styles";

const Home: React.FC = () => {
  const { token, getUser } = useUser();

  const [user, setUser] = useState<IUser>({});

  console.log(user);

  const handleAuth = useCallback(async () => {
    const user = await getUser(token as string);
    setUser(user!);
  }, [getUser, token]);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  return (
    <Page>
      <Header />
      <Main>
        {user.isActivate === false && <ActivateUserSpan />}
        <BannerHome />

        <AuctionList />
        <CarsList />
        <MotorcyclesList />
      </Main>
      <Footer />
    </Page>
  );
};

export default Home;
