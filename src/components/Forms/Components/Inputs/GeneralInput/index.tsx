import { Container } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: any;
  register: any;
  name: string;
}

const GeneralInput: React.FC<IProps> = ({
  label,
  register,
  name,
  error,
  ...rest
}) => {
  return (
    <Container error={!!error}>
      <label>{label}</label>
      <input {...register(name)} {...rest} />
      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default GeneralInput;
