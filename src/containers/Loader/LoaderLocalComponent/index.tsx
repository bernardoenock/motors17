import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { LoadContainer } from "./styles";

const LoaderLocalComponent: React.FC = () => {
  return (
    <>
      <LoadContainer>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#5126EA"
          ariaLabel="three-dots-loading"
        />
      </LoadContainer>
    </>
  );
};

export default LoaderLocalComponent;
