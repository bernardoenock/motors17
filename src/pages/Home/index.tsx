import { useCallback, useEffect, useState } from "react";
import ActivateUserSpan from "../../containers/Modals/ActivateUser";
import BannerHome from "../../components/Banners/BannerHome";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header/Index";
import AuctionList from "../../components/Lists/AuctionList";
import CarsList from "../../components/Lists/CarsList";
import FilterLists from "../../components/Lists/FilterLists";
import MotorcyclesList from "../../components/Lists/MotorcyclesList";
import { IUser } from "../../interfaces/user";
import { useFilters } from "../../Providers/Filters";
import { useUser } from "../../Providers/User";

import { ContainerLists, Main, Page } from "./styles";

const Home: React.FC = () => {
  const { token, getUser } = useUser();
  const { filtersActive } = useFilters();

  const [user, setUser] = useState<IUser>({});

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
        {user.id && !user.isActivate && <ActivateUserSpan />}
        <BannerHome />
        <ContainerLists>
          {filtersActive ? (
            <FilterLists />
          ) : (
            <>
              <AuctionList />
              <CarsList />
              <MotorcyclesList />
            </>
          )}
        </ContainerLists>
      </Main>
      <Footer />
    </Page>
  );
};

export default Home;
