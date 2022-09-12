import axios from "axios";

export const motorShopAPI = axios.create({
  baseURL: "https://motor-shop.herokuapp.com/",
});

export const viaCepAPI = axios.create({
  baseURL: "https://viacep.com.br/",
});

export const APILocal = axios.create({
  baseURL: "http://localhost:6000/",
});
