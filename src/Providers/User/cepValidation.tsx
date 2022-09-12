import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

import { viaCepAPI } from "../../services/urls.api";

interface IAddress {
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
  verifyZipCode: (zipCode: string) => Promise<void>;
  address: IAddress;
}

export const ZipCodeContext = createContext({} as IContext);

export const ZipCodeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [address, setAddress] = useState<IAddress>({});

  const verifyZipCode = async (zipCode: string) => {
    zipCode[zipCode.length - 1] !== "_" &&
      (await viaCepAPI
        .get(`/ws/${zipCode}/json/`)
        .then((res) => {
          res.data.uf ? setAddress(res.data) : toast.warning("CEP inválido");
        })
        .catch((err) => {
          console.log(err.response.data);
        }));
  };

  return (
    <ZipCodeContext.Provider value={{ verifyZipCode, address }}>
      {children}
    </ZipCodeContext.Provider>
  );
};

export const useZipCode = () => useContext(ZipCodeContext);
