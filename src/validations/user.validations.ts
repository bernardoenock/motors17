import * as yup from "yup";

export const RegisterUserschema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "Deve conter apenas letras"),
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  cpf: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
  phone: yup
    .string()
    .required("Campo obrigatório")
    .matches(/(\(\d{2}\)\s)(\d{4,5}-\d{4})/g, "Telefone inválido"),
  birhtDate: yup
    .string()
    .required("Campo obrigatório")
    .test(
      (dateString) =>
        new Date(dateString!) <=
        new Date(
          new Date().getFullYear() - 18,
          new Date().getMonth(),
          new Date().getDay()
        )
    ),
  description: yup.string(),
  zipCode: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[0-9]{5}-[0-9]{3}$/, "CEP inválido"),
  state: yup.string(),
  city: yup.string(),
  street: yup.string(),
  number: yup
    .number()
    .typeError("Somente números")
    .required("Campo obrigatório"),
  complement: yup.string(),
  password: yup.string().required("Campo obrigatório"),
  confirmPassword: yup
    .string()
    .required("Confirmação obrigatória")
    .oneOf([yup.ref("password"), null], "Senhas diferentes"),
});

export const Loginschema = yup.object().shape({
  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Formato de email inválido"),
  password: yup.string().required("Senha é obrigatória"),
});

export const UpdateUserschema = yup.object().shape({
  name: yup
    .string()
    .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "Deve conter apenas letras"),
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  cpf: yup.string().matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
  phone: yup
    .string()
    .matches(/(\(\d{2}\)\s)(\d{4,5}-\d{4})/g, "Telefone inválido"),
  birhtDate: yup
    .date()
    .test(
      (dateString) =>
        new Date(dateString!) <=
        new Date(
          new Date().getFullYear() - 18,
          new Date().getMonth(),
          new Date().getDay()
        )
    ),
  description: yup.string(),
});

export const UpdateUserPasswordschema = yup.object().shape({
  currentPassword: yup.string().required("Campo obrigatório"),
  newPassword: yup.string().required("Campo obrigatório"),
});

export const NewPasswordSchema = yup.object().shape({
  accessToken: yup.string().required("Campo obrigatório"),
  newPassword: yup.string().required("Campo obrigatório"),
});
