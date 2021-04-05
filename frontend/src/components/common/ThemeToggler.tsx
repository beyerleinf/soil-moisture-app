import { createMuiTheme } from "@material-ui/core";
import React, { useContext } from "react";
import ThemeContext from "../../context/theme.context";

const themeTogglerStyle = {
  cursor: "pointer",
};

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});

export const ThemeToggler: React.FC = () => {
  const [theme, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      style={themeTogglerStyle}
      onClick={() => {
        setThemeMode(theme === lightTheme ? darkTheme : lightTheme);
      }}
    >
      <span title="switch theme">{theme === lightTheme ? "🌙" : "☀️"}</span>
    </div>
  );
};
