import React, { useCallback, useEffect, useState } from "react";
import Modal from "../..";
import { IResAddress } from "../../../../interfaces/address";
import { useUpdateAddress } from "../../../../Providers/Address/deleteUpdateAddress";
import { useAddress } from "../../../../Providers/Address/listCreateAddress";
import { useLoad } from "../../../../Providers/Loading";
import { ButtonOutline1, ButtonPrimary } from "../../../../components/Buttons";
import { CloseModalBtn } from "../../../../components/Buttons/CloseModalBtn";
import EmptyMessage from "../../../../constants/EmptyMessage";
import LoaderLocalComponent from "../../../Loader/LoaderLocalComponent";
import CreateAddress from "../CreateAddress";
import UpdateAddress from "../UpdateAddress";
import AddressCard from "./AddressCard";
import {
  Container,
  ContainerGroup,
  FooterModal,
  HeaderModal,
  MainModal,
  Title,
} from "./styles";

interface IProps {
  handleModal: () => void;
}

const MyAddress: React.FC<IProps> = ({ handleModal }) => {
  const [newAddress, setNewAddress] = useState(false);
  const [updateAddress, setUpdateAddress] = useState("");
  const [mainAddress, setMainAddress] = useState(false);

  const [address, setAddress] = useState<IResAddress[]>([]);
  const [loadding, setLoadding] = useState(false);

  const { getMyAddress } = useAddress();
  const { setDefaultAddress } = useUpdateAddress();
  const { showLoad } = useLoad();

  const updateMainAddress = useCallback(
    async (id: string) => {
      showLoad();
      await setDefaultAddress(id);
      setMainAddress(false);
    },
    [showLoad, setDefaultAddress]
  );

  const handleAddress = useCallback(async () => {
    const myAddress = await getMyAddress();
    setAddress(myAddress);
    setLoadding(false);
  }, [getMyAddress]);

  useEffect(() => {
    setLoadding(true);
    handleAddress();
  }, [handleAddress]);

  return (
    <>
      <Modal show={newAddress} close={() => setNewAddress(false)}>
        <CreateAddress handleModal={() => setNewAddress(false)} />
      </Modal>
      <Modal show={!!updateAddress} close={() => setUpdateAddress("")}>
        <UpdateAddress
          handleModal={() => setUpdateAddress("")}
          id={updateAddress}
        />
      </Modal>
      <>
        <Container>
          <HeaderModal>
            <Title>Endereços cadastrados</Title>
            <CloseModalBtn onClick={handleModal} />
          </HeaderModal>
          <MainModal>
            {loadding ? (
              <LoaderLocalComponent />
            ) : address.length ? (
              <ContainerGroup select={mainAddress}>
                {address.map((item) => (
                  <>
                    <AddressCard
                      key={item.id}
                      address={item}
                      handleUpdate={() =>
                        mainAddress
                          ? updateMainAddress(item.id!)
                          : setUpdateAddress(item.id!)
                      }
                    />
                  </>
                ))}
              </ContainerGroup>
            ) : (
              <EmptyMessage message="Nenhum endereço cadastrado" />
            )}
          </MainModal>
          <FooterModal>
            <ButtonOutline1 onClick={() => setMainAddress(!mainAddress)}>
              Alterar Principal
            </ButtonOutline1>
            <ButtonPrimary onClick={() => setNewAddress(true)}>
              Novo Endereço
            </ButtonPrimary>
          </FooterModal>
        </Container>
      </>
    </>
  );
};

export default MyAddress;
