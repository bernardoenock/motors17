import { Page, Image, Box, Main } from "./styles";
import { VscSearchStop } from "react-icons/vsc";

const PageNotFound: React.FC = () => {
  return (
    <Page>
      <Main>
        <Box>
          <h1>Opps!</h1>
          <h3>Página não encontrada</h3>
          <h2>404</h2>
        </Box>
        <Image>
          <VscSearchStop size={"100%"} />
        </Image>
      </Main>
    </Page>
  );
};

export default PageNotFound;
