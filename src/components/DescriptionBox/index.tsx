import { DescriptionBoxContainer, ParagraphContainer } from "./styles";
import { TitleContainer } from "../VehicleInformation/styles";

const DescriptionBox: React.FC = (): JSX.Element => {
  return (
    <DescriptionBoxContainer>
      <TitleContainer>Descrição</TitleContainer>
      <ParagraphContainer>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
        impedit. Assumenda atque ipsam placeat architecto veritatis, nam ullam
        beatae quas reprehenderit cum impedit velit voluptates consequatur odio
        possimus commodi voluptas!
      </ParagraphContainer>
    </DescriptionBoxContainer>
  );
};

export default DescriptionBox;
