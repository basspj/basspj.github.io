import React, { createContext, useState, useEffect } from "react";

const defaultState: IThemeContext = {
  dark: true,
  toggle: () => {
    console.log("default");
  }
};

const ThemeContext = createContext(defaultState);

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true;

export const ThemeProvider: React.SFC<IThemeProviderProps> = ({ children }) => {
  const [initialized, setInitialized] = useState(false);
  const [dark, setDark] = useState(defaultState.dark);

  const renderTheme = (dark: boolean) => {
    window.__setTheme(dark ? "dark" : "light");
  };

  const setTheme = (dark: boolean) => {
    setDark(dark);
    renderTheme(dark);
  };

  useEffect(() => {
    if (!initialized) {
      const localTheme = localStorage.getItem("dark");
      if (localTheme !== undefined) {
        setTheme(localTheme === "true");
      } else if (supportsDarkMode()) {
        setTheme(true);
      }
      setInitialized(true);
    }
  });

  const toggle = () => {
    const theme = !dark;
    localStorage.setItem("dark", `${theme}`);
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

interface IThemeContext {
  dark: boolean;
  toggle: () => void;
}

interface IThemeProviderProps {
  children: any;
}
