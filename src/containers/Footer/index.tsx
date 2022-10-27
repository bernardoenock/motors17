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
      <span>
        © 2022 - Todos os direitos reservados.{" "}
        <a href="https://www.linkedin.com/in/bernardoenock/">Bernardo Enock</a>,{" "}
        <a href="https://www.linkedin.com/in/leonardo-marchioro/">
          Leonardo Marchioro
        </a>{" "}
        e <a href="https://www.linkedin.com/in/renandcr/">Renan Ribeiro</a>.
      </span>
      <button onClick={scrollToTop}>
        <RiArrowUpSLine size={30} />
      </button>
    </ContainerFooter>
  );
};
export default Footer;
