import { ContainerBurguer } from "./styles";

const BurguerIcon: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <ContainerBurguer open={open}>
      <div></div>
      <div></div>
      <div></div>
    </ContainerBurguer>
  );
};

export default BurguerIcon;
