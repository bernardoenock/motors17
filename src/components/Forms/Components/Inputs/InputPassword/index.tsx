import { FiEyeOff, FiEye } from "react-icons/fi";

import { useState } from "react";
import { Container } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: any;
  register: any;
  name: string;
}

const InputPassword: React.FC<IProps> = ({
  label,
  error,
  register,
  name,
  ...rest
}) => {
  const [show, setShow] = useState("password");

  const handleType = () => {
    show === "text" ? setShow("password") : setShow("text");
  };

  return (
    <Container error={!!error}>
      <label>{label}</label>
      <input {...register(name)} type={show} {...rest} />

      {show === "text" ? (
        <FiEyeOff onClick={handleType} />
      ) : (
        <FiEye onClick={handleType} />
      )}

      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default InputPassword;
