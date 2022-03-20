import { createContext, useContext, useState } from "react";

export const NavContext = createContext();

export const useSearch = () => {
  const myData = useContext(NavContext);
  if (!myData) {
    throw new Error("useSearch need to used in NavbarProvider");
  }
  return myData;
};

export const SearchProvider = ({ children }) => {
  const [val, setVal] = useState("");

  return (
    <NavContext.Provider value={{ val, setVal }}>
      {children}
    </NavContext.Provider>
  );
};
