import {
  ContainerBanner,
  ContainerButtons,
  ContainerMain,
  ContainerTitle,
} from "./styles";

import { ButtonOutlineLight } from "../../Button";

const BannerHome: React.FC = () => {
  return (
    <ContainerMain id="main">
      <ContainerBanner>
        <ContainerTitle>
          <h1>Velocidade e experiência em um lugar feito para você</h1>
          <p>Um ambiente feito para você explorar o seu melhor</p>
        </ContainerTitle>
        <ContainerButtons>
          <ButtonOutlineLight>Leilão</ButtonOutlineLight>
          <ButtonOutlineLight>Carros</ButtonOutlineLight>
          <ButtonOutlineLight>Motos</ButtonOutlineLight>
        </ContainerButtons>
      </ContainerBanner>
    </ContainerMain>
  );
};

export default BannerHome;

// export const BannerDash: React.FC = () => {
//   return (
//     <ContainerMain id="main">
//       <ContainerBanner>
//         <ContainerTitle>
//           <h1>Velocidade e experiência em um lugar feito para você</h1>
//           <p>Encontre o automovel dos sonhos!</p>
//         </ContainerTitle>
//         <ContainerButtons>
//           <ButtonOutlineLight>Login</ButtonOutlineLight>
//           <ButtonOutlineLight>Cadastrar</ButtonOutlineLight>
//         </ContainerButtons>
//       </ContainerBanner>
//     </ContainerMain>
//   );
// };
