import { ContainerMultipleReactions } from "./styles";
import { NameContainer } from "../Card/VehicleCard/styles";
import { TextFieldContainer } from "./styles";
import { ButtonPrimary } from "../Button";
import ReactionTag from "../ReactionTag";

const TextField: React.FC<{ PROFILE: string; REACTION: Array<string> }> = ({
  PROFILE,
  REACTION,
}): JSX.Element => {
  return (
    <TextFieldContainer>
      <NameContainer>
        <div>
          <img src={PROFILE} alt="Imagem de perfil" />
        </div>
        <span>Julia Lima</span>
      </NameContainer>
      <textarea>
        Carro muito confortável, foi uma ótima experiência de compra...
      </textarea>
      <ButtonPrimary>Comentar</ButtonPrimary>
      <ContainerMultipleReactions>
        {REACTION.map((current: string, index) => (
          <ReactionTag key={index} current={current} />
        ))}
      </ContainerMultipleReactions>
    </TextFieldContainer>
  );
};

export default TextField;
