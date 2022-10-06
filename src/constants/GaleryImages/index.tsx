import React, { useState } from "react";
import IndividualImageContainer from "../IndividualImageContainer";
import EmptyMessage from "../EmptyMessage";
import { Empty, ImageGalleryContainer, Title } from "./styles";
import Modal from "../../containers/Modals";
import ImgVehicle from "../../containers/Modals/ImgVehicle";

const GaleryImages: React.FC<{ images: string[] }> = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectImg, setSelectImg] = useState(0);

  const openModal = (id: number) => {
    setShowModal(true);
    setSelectImg(id);
  };

  return (
    <>
      <Modal
        close={() => setShowModal(false)}
        show={showModal}
        height="80%"
        width="90%"
      >
        <ImgVehicle
          selectImg={selectImg}
          handleModal={() => setShowModal(false)}
          images={images}
        />
      </Modal>
      <ImageGalleryContainer>
        <Title>Fotos</Title>
        <div>
          {images.length ? (
            images.map((item, index) => (
              <IndividualImageContainer
                key={index}
                img={item}
                id={index}
                openModal={openModal}
              />
            ))
          ) : (
            <Empty>
              <EmptyMessage message="Nenhuma foto encontrada" />
            </Empty>
          )}
        </div>
      </ImageGalleryContainer>
    </>
  );
};

export default GaleryImages;
