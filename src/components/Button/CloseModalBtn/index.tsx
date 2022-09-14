import { IButtonProps } from "..";
import { IoIosClose } from "react-icons/io";
import { ButtonModal } from "./styles";

export const CloseModalBtn: React.FC<IButtonProps> = ({ ...rest }) => {
  return (
    <ButtonModal>
      <button {...rest}>
        <IoIosClose size="1.5rem" color="#ADB5BD" />
      </button>
    </ButtonModal>
  );
};
