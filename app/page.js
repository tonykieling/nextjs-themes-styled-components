"use client";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes/ThemeConfig";
import CardsTheme from "./components/CardTheme";
import Cards from "./components/Card";

export default function MyApp() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => theme == 'light' ? setTheme('dark') : setTheme('light');

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}> Switch Theme to {theme === "light" ? "DARK" : "LIGHT"} </button>
      <CardsTheme />
      <Cards />
    </ThemeProvider>
  );
}
