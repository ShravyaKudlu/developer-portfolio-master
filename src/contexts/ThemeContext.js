/* eslint-disable */
import React, { createContext, useState } from "react";
import { themeData } from "../data/themeData";
import Header from "../components/Header/Header";
import {
  pinkThemeLight,
  pinkThemeDark,
  purpleThemeDark,
  purpleThemeLight,
} from "../theme/theme";
export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  // eslint-disable-next-line
  const [theme, setTheme] = useState(pinkThemeLight);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked); // Toggle checked state
    setTheme((prevTheme) =>
      prevTheme === pinkThemeLight ? pinkThemeDark : pinkThemeLight
    );
  };

  const value = { theme, drawerOpen, setHandleDrawer };
  return (
    <>
      <Header onChange={handleChange} theme={theme} />
      <ThemeContext.Provider value={value}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeContextProvider;
