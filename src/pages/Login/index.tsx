import Footer from "../../components/Footer";
import FormSingIn from "../../components/Forms/SingInForm";
import Header from "../../components/Header";
import { Main, Page } from "./styles";

const Login: React.FC = () => {
  return (
    <Page>
      <Header />
      <Main>
        <FormSingIn />
      </Main>
      <Footer />
    </Page>
  );
};
export default Login;
