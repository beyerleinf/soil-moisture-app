import React from "react";

const ThemeContext: React.Context<[string, React.Dispatch<React.SetStateAction<string>>]> = React.createContext([
  "dark",
  () => {},
]) as any;

export default ThemeContext;
