import { ReactionTagContainer } from "./styles";

const ReactionTag: React.FC<{ current: string }> = ({
  current,
}): JSX.Element => {
  return (
    <ReactionTagContainer>
      <span>{current}</span>
    </ReactionTagContainer>
  );
};

export default ReactionTag;
