import { List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { useState } from "react";
import { Header } from "./components/common";
import HomePage from "./pages/Home/Home";

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [drawerState, setDrawerState] = useState(false);
  const paletteType = darkMode ? "dark" : "light";

  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createMuiTheme({
    palette: {
      type: paletteType,
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const toggleDrawer = (state: boolean) => (event: any) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setDrawerState(state);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header menuButtonClick={toggleDrawer(true)} />
      {/* <ThemeToggler /> */}
      {/* <Switch checked={darkMode} onChange={handleThemeChange}></Switch> */}
      {/* <SwipeableDrawer anchor="left" open={drawerState} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        <List>
          <ListItem button key="Settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings"></ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer> */}
      <HomePage />
    </ThemeProvider>
  );
};
