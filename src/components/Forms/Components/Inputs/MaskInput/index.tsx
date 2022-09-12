import { Container } from "./styles";
import InputMask from "react-input-mask";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: any;
  register: any;
  name: string;
  mask: string;
}

const MaskInput: React.FC<IProps> = ({
  label,
  register,
  name,
  error,
  mask,
  ...rest
}) => {
  return (
    <Container error={!!error}>
      <label>{label}</label>
      <InputMask {...register(name)} {...rest} mask={mask} />
      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default MaskInput;
