import { ToggleItem, ToggleRoot } from "./styles";

interface IProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectTypeAccount: React.FC<IProps> = ({ value, setValue }) => {
  return (
    <ToggleRoot
      type="single"
      defaultValue={"client"}
      onValueChange={(value: string) => {
        if (value) {
          setValue(value);
        }
      }}
    >
      <ToggleItem value="client">Comprador</ToggleItem>
      <ToggleItem value="seller">Anunciante</ToggleItem>
    </ToggleRoot>
  );
};

export const SelectTypeSale: React.FC<IProps> = ({ value, setValue }) => {
  return (
    <ToggleRoot
      type="single"
      defaultValue={"sale"}
      onValueChange={(value: string) => {
        if (value) {
          setValue(value);
        }
      }}
    >
      <ToggleItem value="sale">Venda</ToggleItem>
      <ToggleItem value="auction">Leilão</ToggleItem>
    </ToggleRoot>
  );
};

export const SelectTypeVehicle: React.FC<IProps> = ({ value, setValue }) => {
  return (
    <ToggleRoot
      type="single"
      defaultValue={"car"}
      onValueChange={(value: string) => {
        if (value) {
          setValue(value);
        }
      }}
    >
      <ToggleItem value="car">Carro</ToggleItem>
      <ToggleItem value="motocycle">Moto</ToggleItem>
    </ToggleRoot>
  );
};
