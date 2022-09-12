import IMG_PROFILE from "../../assets/img/default_profile.png";


import UserInfoBox from "../../components/UserInfoBox";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AuctionList from "../../components/Lists/AuctionList";
import CarsList from "../../components/Lists/CarsList";
import MotorcyclesList from "../../components/Lists/MotorcyclesList";

import {
  ProfileViewUserContainer,

  ProfileMain,
} from "./styles";

const ProfileViewUser: React.FC = (): JSX.Element => {
  return (
    <ProfileViewUserContainer>
      <Header />
      <ProfileMain>
        <UserInfoBox IMG_PROFILE={IMG_PROFILE} />
        <AuctionList />
        <CarsList />
        <MotorcyclesList />
      </ProfileMain>
      <Footer />
    </ProfileViewUserContainer>
  );
};

export default ProfileViewUser;
