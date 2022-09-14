import UserInfoBox from "../../components/UserInfoBox";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AuctionList from "../../components/Lists/AuctionList";
import CarsList from "../../components/Lists/CarsList";
import MotorcyclesList from "../../components/Lists/MotorcyclesList";

import { ProfileViewUserContainer, ProfileMain } from "./styles";
import { useUser } from "../../Providers/User/login";
import { useCallback, useEffect, useState } from "react";
import { IUser } from "../../interfaces/user";
import UpdateProfile from "../../components/Modals/UpdateProfile";
import CreateAd from "../../components/Modals/Ad/CreateAd";
import Modal from "../../components/Modals";

const ProfileViewUser: React.FC = (): JSX.Element => {
  const { token, getUser } = useUser();

  const [user, setUser] = useState<IUser>({});

  const handleAuth = useCallback(async () => {
    const user = await getUser(token as string);
    setUser(user!);
  }, [getUser, token]);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  const [editProfileModal, setEditProfileModal] = useState<boolean>(false);
  const [createAdModal, setCreateAdModal] = useState<boolean>(false);

  const handleModalProfile = () => {
    setEditProfileModal(!editProfileModal);
  };

  const handleModalCreateAd = () => {
    setCreateAdModal(!editProfileModal);
  };

  return (
    <>
      <Modal show={editProfileModal} close={handleModalProfile}>
        <UpdateProfile handleModal={handleModalProfile} />
      </Modal>
      <Modal show={createAdModal} close={handleModalCreateAd}>
        <CreateAd handleModal={handleModalCreateAd} />
      </Modal>

      <ProfileViewUserContainer>
        <Header />
        <ProfileMain>
          <UserInfoBox
            description={user.description as string}
            userName={user.name as string}
            typeUser={user.isSeller as boolean}
            openProfileModal={() => setEditProfileModal(true)}
            openAnounceModal={() => setCreateAdModal(true)}
          />
          <AuctionList />
          <CarsList />
          <MotorcyclesList />
        </ProfileMain>
        <Footer />
      </ProfileViewUserContainer>
    </>
  );
};

export default ProfileViewUser;
