import { Container } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: any;
  register: any;
  name: string;
}

const TextArea: React.FC<IProps> = ({
  label,
  register,
  name,
  error,
  ...rest
}) => {
  return (
    <Container error={!!error}>
      <label>{label}</label>
      <textarea {...register(name)} {...rest} />
      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default TextArea;
