import { SingleCommetContainer } from "./styles";
import { NameContainer } from "../Card/VehicleCard/styles";

const SingleComment: React.FC<{ PROFILE: string }> = ({
  PROFILE,
}): JSX.Element => {
  return (
    <SingleCommetContainer>
      <NameContainer>
        <div>
          <img src={PROFILE} alt="Imagem de perfil" />
        </div>
        <span>Julia Lima</span>
      </NameContainer>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae alias
        molestias ab rerum aperiam nesciunt fugit, rem illo, debitis numquam a
        sapiente quidem animi saepe. Aliquam aspernatur recusandae saepe ex.
      </p>
    </SingleCommetContainer>
  );
};

export default SingleComment;
