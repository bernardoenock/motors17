import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

import { viaCepAPI } from "../../services/urls.api";

export interface IAddress {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
}

interface IContext {
  verifyZipCode: (zipCode: string) => Promise<IAddress>;
}

export const ZipCodeContext = createContext({} as IContext);

export const ZipCodeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const verifyZipCode = async (zipCode: string) => {
    if (zipCode[zipCode.length - 1] !== "_") {
      return await viaCepAPI
        .get(`/ws/${zipCode}/json/`)
        .then((res) => {
          if (res.data.uf) {
            return res.data;
          } else {
            toast.warning("CEP inválido");
          }
        })
        .catch((err) => {
          toast.warning("CEP inválido");
          console.log(err.response.data);
        });
    }
    return {};
  };

  return (
    <ZipCodeContext.Provider value={{ verifyZipCode }}>
      {children}
    </ZipCodeContext.Provider>
  );
};

export const useZipCode = () => useContext(ZipCodeContext);
