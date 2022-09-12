import { RenderModalBackdropProps } from "react-overlays/cjs/Modal";
import { BackgroundModal, ModalContainer } from "./styles";

interface IProps {
  children: React.ReactNode;
  show: boolean;
  close: () => void;
  height?: string;
  width?: string;
}

const Modal: React.FC<IProps> = ({
  children,
  show,
  close,
  height = "80%",
  width = "50%",
}) => {
  const renderBackdrop = (props: RenderModalBackdropProps) => (
    <BackgroundModal {...props} />
  );

  return (
    <ModalContainer
      height={height}
      width={width}
      onHide={close}
      show={show}
      renderBackdrop={renderBackdrop}
    >
      {children}
    </ModalContainer>
  );
};

export default Modal;
