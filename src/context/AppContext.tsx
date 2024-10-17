// App context.
import { createContext, ReactNode } from "react";
import { doctors } from "../assets/assets";

type AppContextType = {
  doctors: typeof doctors;
  currencySymbol: string;
};

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const currencySymbol = "$";

  const value = {
    doctors,
    currencySymbol,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

