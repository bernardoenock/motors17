import React, { createContext, ReactNode, useContext, useState } from "react";

interface IFilters {
  ltPrice?: number;
  gtPrice?: number;
  ltYear?: number;
  gtrYear?: number;
  type?: string;
  typeVehicle?: string;
}

interface IContext {
  filtersActive?: boolean;
  setFilters: (dataFilters: IFilters) => void;
  filterBy: (dataFilters: IFilters) => void;
  clearFilters: () => void;
  propsFilters: IFilters;
}

export const FiltersContext = createContext({} as IContext);

export const FiltersProviders: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filtersActive, setFiltersActive] = useState(false);
  const [propsFilters, setPropsFilters] = useState<IFilters>({});

  const setFilters = (dataFilters: IFilters) => {
    setFiltersActive(true);
    setPropsFilters({ ...propsFilters, ...dataFilters });
  };

  const filterBy = (dataFilters: IFilters) => {
    setFiltersActive(true);
    setPropsFilters(dataFilters);
  };

  const clearFilters = () => {
    setFiltersActive(false);
    setPropsFilters({});
  };

  return (
    <FiltersContext.Provider
      value={{
        clearFilters,
        filterBy,
        setFilters,
        filtersActive,
        propsFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
