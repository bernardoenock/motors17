import BannerDash from "../../components/Banners/BannerDash";
// import ShowButtons from "../../components/Button/ShowButtons";
import Header from "../../components/Header";

import * as S from "./styles";

const Dashboard: React.FC = () => {
  return (
    <S.Page>
      <Header />
      <S.Main>
        <BannerDash />
        {/* <div>
          <ShowButtons />
        </div> */}
      </S.Main>
    </S.Page>
  );
};

export default Dashboard;
