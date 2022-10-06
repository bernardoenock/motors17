import * as yup from "yup";

export const BidSchema = yup.object().shape({
  value: yup.number().required("Coloque um valor para o lance"),
});
