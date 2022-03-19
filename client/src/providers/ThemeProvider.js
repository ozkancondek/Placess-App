import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const lightTheme = {
    body: "#E2E2E2",
    text: "#363537",

    gradient: "linear-gradient(#39598A, #79D7ED)",
  };

  const darkTheme = {
    body: "#363537",
    text: "#FAFAFA",

    gradient: "linear-gradient(#091236, #1E215D)",
  };

  //states for night mood button
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeContext.Provider
      value={{ lightTheme, darkTheme, checked, setChecked, theme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const myTheme = useContext(ThemeContext);
  if (!myTheme) {
    throw new Error("useTheme must be used in ThemeProvider");
  }
  return myTheme;
};
