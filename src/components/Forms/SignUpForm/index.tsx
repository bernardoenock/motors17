import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterUserschema } from "../../../validations/user.validations";

import { ButtonOutline2, ButtonPrimary } from "../../Buttons";
import GeneralInput from "../Components/Inputs/GeneralInput";
import { Container, FooterForm, InputsContainer, SpanText } from "./styles";
import InputPassword from "../Components/Inputs/InputPassword";
import { SelectTypeAccount } from "../Components/SelectType";
import { useCallback, useState } from "react";
import MaskInput from "../Components/Inputs/MaskInput";
import { useRegister } from "../../../Providers/User/register";
import { useHistory } from "react-router-dom";
import { IUserRegister } from "../../../interfaces/user";
import { useLoad } from "../../../Providers/Loading";
import { IAddress, useZipCode } from "../../../Providers/Address/cepValidation";

const FormSingUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterUserschema),
  });

  const [typeAccount, setTypeAccount] = useState("client");
  const [zipCodeAddress, setZipCodeAddress] = useState<IAddress>({});

  const { registerUser } = useRegister();
  const { verifyZipCode } = useZipCode();
  const history = useHistory();
  const { showLoad } = useLoad();

  const autoComplete = useCallback(
    async (value: string) => {
      const verify = await verifyZipCode(value);
      if (verify) {
        setZipCodeAddress(verify);
      }
    },
    [verifyZipCode]
  );

  const handleRegister = async (data: IUserRegister) => {
    delete data.confirmPassword;
    showLoad();
    await registerUser({ ...data, typeAccount: typeAccount });
  };

  return (
    <Container onSubmit={handleSubmit(handleRegister)}>
      <h1>Cadastro</h1>
      <InputsContainer>
        <SpanText>Informações de usuário</SpanText>
        <GeneralInput
          label="Nome"
          register={register}
          name={"name"}
          error={errors.name?.message}
          placeholder="Seu nome..."
        />
        <GeneralInput
          label="E-mail"
          register={register}
          name={"email"}
          error={errors.email?.message}
          type="email"
          placeholder="Digitar usuário"
        />
        <MaskInput
          label="CPF"
          register={register}
          name={"cpf"}
          error={errors.cpf?.message}
          placeholder="Seu CPF..."
          mask="999.999.999-99"
        />
        <MaskInput
          label="Celular"
          register={register}
          name={"phone"}
          error={errors.phone?.message}
          placeholder="Seu telefone..."
          mask="(99) 99999-9999"
        />
        <GeneralInput
          label="Data de nascimento"
          type="date"
          register={register}
          name={"birhtDate"}
          error={errors.birhtDate?.message}
          placeholder="Sua data de nascimento..."
        />
        <GeneralInput
          label="Descrição"
          register={register}
          name={"description"}
          error={errors.description?.message}
          placeholder="Descrição..."
        />
        <SpanText>Informações de endereço</SpanText>
        <MaskInput
          label="CEP"
          register={register}
          name={"zipCode"}
          error={errors.zipCode?.message}
          placeholder="CEP..."
          mask="99999-999"
          onChange={(e) => {
            autoComplete(e.target.value);
          }}
        />
        <GeneralInput
          label="Estado"
          register={register}
          name={"state"}
          error={errors.state?.message}
          placeholder="Estado..."
          defaultValue={zipCodeAddress.uf!}
        />
        <GeneralInput
          label="Cidade"
          register={register}
          name={"city"}
          error={errors.city?.message}
          placeholder="Cidade..."
          defaultValue={zipCodeAddress.localidade!}
        />
        <GeneralInput
          label="Rua"
          register={register}
          name={"street"}
          error={errors.street?.message}
          placeholder="Rua..."
          defaultValue={zipCodeAddress.logradouro!}
        />
        <GeneralInput
          label="Número"
          register={register}
          name={"number"}
          error={errors.number?.message}
          placeholder="Número..."
          type="number"
        />
        <GeneralInput
          label="Complemento"
          register={register}
          name={"complement"}
          error={errors.complement?.message}
          placeholder="Complemento..."
          defaultValue={zipCodeAddress.complemento!}
        />
        <SpanText>Tipo de conta</SpanText>
        <SelectTypeAccount value={typeAccount} setValue={setTypeAccount} />
        <InputPassword
          label="Senha"
          register={register}
          name={"password"}
          error={errors.password?.message}
          placeholder="Digitar senha"
        />
        <InputPassword
          label="Confimar Senha"
          register={register}
          name={"confirmPassword"}
          error={errors.confirmPassword?.message}
          placeholder="Confirmar senha"
        />
      </InputsContainer>
      <FooterForm>
        <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
        <SpanText>Já possuí uma conta?</SpanText>
        <ButtonOutline2 type="button" onClick={() => history.push("/login")}>
          Login
        </ButtonOutline2>
      </FooterForm>
    </Container>
  );
};

export default FormSingUp;
