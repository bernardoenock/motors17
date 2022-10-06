import React from "react";

import { Message } from "./styles";

const EmptyMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <>
      <Message>{message}</Message>
    </>
  );
};

export default EmptyMessage;
