import React, { useContext } from "react";
import ThemeContext from "../../context/theme.context";

const themeTogglerStyle = {
  cursor: "pointer",
};

export const ThemeToggler: React.FC = () => {
  const [theme, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      style={themeTogglerStyle}
      onClick={() => {
        setThemeMode(theme === "light" ? "dark" : "light");
      }}
    >
      <span title="switch theme">{theme === "light" ? "🌙" : "☀️"}</span>
    </div>
  );
};
