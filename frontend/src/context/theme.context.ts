import { createMuiTheme, Theme } from "@material-ui/core";
import React from "react";

const ThemeContext: React.Context<[Theme, React.Dispatch<React.SetStateAction<Theme>>]> = React.createContext([
  createMuiTheme({
    palette: {
      type: "dark",
    },
  }),
  () => {},
]) as any;

export default ThemeContext;
