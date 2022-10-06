import UserInfoBox from "../../components/Boxes/UserInfoBox";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header/Index";

import { ProfileViewUserContainer, ProfileMain } from "./styles";
import { useUser } from "../../Providers/User";
import { useCallback, useEffect, useState } from "react";
import { IUser } from "../../interfaces/user";

import UpdateProfile from "../../containers/Modals/User/UpdateProfile";
import CreateAd from "../../containers/Modals/Ad/CreateAd";
import Modal from "../../containers/Modals";

import MyAnnouncesList from "../../components/Lists/MyAnnouncesList";
import MyBidsList from "../../components/Lists/MyBidsList";
import LoaderLocalComponent from "../../containers/Loader/LoaderLocalComponent";
import { EmptyContainer } from "../AdDetails/styles";

const ProfileViewUser: React.FC = (): JSX.Element => {
  const { token, getUser, avatarColor } = useUser();

  const [user, setUser] = useState<IUser>({});
  const [loadding, setLoadding] = useState(false);

  const handleAuth = useCallback(async () => {
    const user = await getUser(token as string);
    setUser(user!);
    setLoadding(false);
  }, [getUser, token]);

  useEffect(() => {
    setLoadding(true);
    handleAuth();
  }, [handleAuth]);

  const [editProfileModal, setEditProfileModal] = useState<boolean>(false);
  const [createAdModal, setCreateAdModal] = useState<boolean>(false);

  const handleModalProfile = () => {
    setEditProfileModal(!editProfileModal);
  };

  const handleModalCreateAd = () => {
    setCreateAdModal(!createAdModal);
  };
  return (
    <>
      <Modal show={editProfileModal} close={handleModalProfile}>
        <UpdateProfile handleModal={handleModalProfile} user={user} />
      </Modal>
      <Modal show={createAdModal} close={handleModalCreateAd}>
        <CreateAd handleModal={handleModalCreateAd} />
      </Modal>

      <ProfileViewUserContainer>
        <Header />
        {loadding ? (
          <EmptyContainer>
            <LoaderLocalComponent />
          </EmptyContainer>
        ) : (
          <ProfileMain>
            <UserInfoBox
              description={user.description as string}
              userName={user.name as string}
              typeUser={user.isSeller as boolean}
              openProfileModal={handleModalProfile}
              openAnounceModal={handleModalCreateAd}
              color={avatarColor!}
            />
            {user.isSeller ? <MyAnnouncesList /> : <MyBidsList />}
          </ProfileMain>
        )}
        <Footer />
      </ProfileViewUserContainer>
    </>
  );
};

export default ProfileViewUser;
