import Router from "./Router";
import { Body, GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./Theme/ThemeProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Theme>
        <Body>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <GlobalStyle />
          <Router />
        </Body>
      </Theme>
    </>
  );
}

export default App;
