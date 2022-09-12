import React from "react";
import { ZipCodeProvider } from "./User/cepValidation";
import { LoginProvider } from "./User/login";
import { RegisterProvider } from "./User/register";
import { ActivateProvider } from "./User/activateUser";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <ActivateProvider>
          <ZipCodeProvider>{children}</ZipCodeProvider>
        </ActivateProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

export default Providers;
