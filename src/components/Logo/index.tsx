import { BigTitle, Container, SmallTitle } from "./styles";
import { useHistory } from "react-router-dom";

const Logo: React.FC = () => {
  const history = useHistory();

  return (
    <Container onClick={() => history.push("/")}>
      <BigTitle>Motors</BigTitle>
      <SmallTitle>shop</SmallTitle>
    </Container>
  );
};
export default Logo;
