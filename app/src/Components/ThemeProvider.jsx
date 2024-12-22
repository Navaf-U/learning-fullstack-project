import { createContext } from "react";

export const ThemeContext = createContext();
const value = { color: "red" };
// eslint-disable-next-line react/prop-types
function ThemeProvider({ children }) {
  return (
    <div>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </div>
  );
}

export default ThemeProvider;
