import { useCallback, useEffect, useState } from "react";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header/Index";
import LoaderLocalComponent from "../../containers/Loader/LoaderLocalComponent";
import SellerInfoBox from "../../components/Boxes/SellerInfoBox";
import { IAccount } from "../../interfaces/user";
import { useUser } from "../../Providers/User";
import { EmptyContainer } from "../AdDetails/styles";

import * as S from "./styles";
import MyListPurchases from "../../components/Lists/MyListPurchases";

const MyPushase: React.FC = () => {
  const { token, getUser } = useUser();

  const [account, setAccount] = useState<IAccount>({});
  const [loadding, setLoadding] = useState(false);

  const handleAccount = useCallback(async () => {
    const accountGet = await getUser(token as string);
    setAccount(accountGet!);
    setLoadding(false);
  }, [getUser, token]);

  useEffect(() => {
    setLoadding(true);
    handleAccount();
  }, [handleAccount]);

  return (
    <S.ContainerMyPorchase>
      <Header />

      {loadding ? (
        <EmptyContainer>
          <LoaderLocalComponent />
        </EmptyContainer>
      ) : (
        <S.MainMyPorchase>
          <SellerInfoBox seller={account} />

          <MyListPurchases />
        </S.MainMyPorchase>
      )}
      <Footer />
    </S.ContainerMyPorchase>
  );
};

export default MyPushase;
