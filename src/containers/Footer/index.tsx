import { ContainerFooter } from "./styles";
import { RiArrowUpSLine } from "react-icons/ri";
import MotorShop from "../../assets/img/Motors.png";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ContainerFooter>
      <img src={MotorShop} alt="Logo" />
      <span>© 2022 - Todos os direitos reservados. angle-up</span>
      <button onClick={scrollToTop}>
        <RiArrowUpSLine size={30} />
      </button>
    </ContainerFooter>
  );
};
export default Footer;
