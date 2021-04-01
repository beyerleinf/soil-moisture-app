import React, { useContext, useState } from "react";
import { Header } from "./components/common";
import { ThemeToggler } from "./components/common/ThemeToggler";
import ThemeContext from "./context/theme.context";

export const App: React.FC = () => {
  return (
    <ThemeContext.Provider value={useState("dark")}>
      <ThemeContext.Consumer>
        {([theme]) => (
          <div className={theme}>
            <Header />
            {/* <ThemeToggler /> */}
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
};
