import React, { useContext, useState } from "react";

interface IValues {
  showLoad: () => void;
  hiddenLoad: () => void;
  isLoad: boolean;
}

export const LoadingContext = React.createContext({} as IValues);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoad, setIsLoad] = useState(false);

  const showLoad = () => {
    setIsLoad(true);
  };

  const hiddenLoad = () => {
    setIsLoad(false);
  };

  return (
    <LoadingContext.Provider value={{ showLoad, isLoad, hiddenLoad }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoad = () => useContext(LoadingContext);
