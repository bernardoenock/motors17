import * as yup from "yup";

export const CreateAddressSchema = yup.object().shape({
  zipCode: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[0-9]{5}-[0-9]{3}$/, "CEP inválido"),
  state: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  number: yup
    .number()
    .typeError("Somente números")
    .required("Campo obrigatório"),
  complement: yup.string(),
});

export const UpdateAddressSchema = yup.object().shape({
  zipCode: yup.string().matches(/^[0-9]{5}-[0-9]{3}$/, "CEP inválido"),
  state: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  number: yup.number().typeError("Somente números"),
  complement: yup.string(),
});
