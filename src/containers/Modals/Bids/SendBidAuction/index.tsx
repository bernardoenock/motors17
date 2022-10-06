import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

import Modal from "../..";
import { ISetBidUser } from "../../../../interfaces/bids";
import { useBids } from "../../../../Providers/Bids";
import { useLoad } from "../../../../Providers/Loading";
import { BidSchema } from "../../../../validations/bid.validations";
import { ButtonPrimary } from "../../../../components/Buttons";
import GeneralInput from "../../../../components/Forms/Components/Inputs/GeneralInput";
import { Container } from "./styles";

import { useQuery } from "../../../../hooks/useQuery";

interface IProps {
  show: boolean;
  handle: () => void;
}

const SendBidAuction: React.FC<IProps> = ({ handle, show }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(BidSchema),
  });

  const { setBid } = useBids();

  const { showLoad } = useLoad();

  const query = useQuery();

  const handleBid = async (data: ISetBidUser) => {
    const id = query.get("id");
    const value = { ...data };
    showLoad();
    await setBid(id!, value);
  };

  return (
    <Modal show={show} close={handle} height={"15rem"}>
      <Container onSubmit={handleSubmit(handleBid)}>
        <p>Novo lance</p>

        <GeneralInput
          label="Lance"
          register={register}
          name={"value"}
          error={errors.value?.message}
          placeholder="R$00,00"
          type="number"
        />

        <ButtonPrimary type="submit">Dar lance</ButtonPrimary>
      </Container>
    </Modal>
  );
};

export default SendBidAuction;
