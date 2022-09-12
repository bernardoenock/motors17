import Footer from "../../components/Footer";
import FormSingUp from "../../components/Forms/SignUpForm";
import Header from "../../components/Header";
import { Main, Page } from "./styles";

const Register: React.FC = () => {
  return (
    <Page>
      <Header />
      <Main>
        <FormSingUp />
      </Main>
      <Footer />
    </Page>
  );
};

export default Register;
