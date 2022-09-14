import React from "react";

import { ThreeDots } from "react-loader-spinner";
import { Container } from "./styles";

const Loader: React.FC<{ isLoad: boolean }> = ({ isLoad }) => {
  return (
    <>
      {isLoad && (
        <Container>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#5126EA"
            ariaLabel="three-dots-loading"
          />
        </Container>
      )}
    </>
  );
};

export default Loader;
