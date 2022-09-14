import BannerDash from "../../components/Banners/BannerDash";

import Header from "../../components/Header";
import Modal from "../../components/Modals";
// import ShowButtons from "../../components/Button/ShowButtons";
// import CreateAd from "../../components/Modals/CreateAd";
// import UpdateAd from "../../components/Modals/UpdateAd";
// import ImgVehicle from "../../components/Modals/ImgVehicle";
// import AccountSucess from "../../components/Modals/AccountSucess";
// import DeleteAd from "../../components/Modals/Ad/DeleteAd";
// import SucessAd from "../../components/Modals/Ad/SucessAd";
// import UpdateProfile from "../../components/Modals/UpdateProfile";
import UpdateAddress from "../../components/Modals/UpdateAddress";

import { useState } from "react";
import * as S from "./styles";

const Dashboard: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Modal show={modal} close={handleModal} height="36rem" width="100%">
        <UpdateAddress handleModal={handleModal} />
      </Modal>
      <S.Page>
        <Header />
        <S.Main>
          <BannerDash />
          {/* <div>
            <ShowButtons />
          </div> */}

          <button onClick={handleModal} type="button">
            Editar Endereço
          </button>
        </S.Main>
      </S.Page>
    </>
  );
};

export default Dashboard;
