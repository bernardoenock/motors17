import React from "react";
import { ZipCodeProvider } from "./User/cepValidation";
import { LoginProvider } from "./User/login";
import { RegisterProvider } from "./User/register";
import { ActivateProvider } from "./User/activateUser";
import { ListAnounceProvider } from "./Auction/listAll";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <ActivateProvider>
          <ListAnounceProvider>
            <ZipCodeProvider>{children}</ZipCodeProvider>
          </ListAnounceProvider>
        </ActivateProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

export default Providers;
