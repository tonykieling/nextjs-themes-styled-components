"use client";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes/ThemeConfig";
import CardsTheme1 from "./components/CardsTheme1";
import CardsTheme2 from "./components/CardsTheme2";
import Footer from "./components/Footer";

export default function MyApp() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => theme == 'light' ? setTheme('dark') : setTheme('light');

  return (
    // <div style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <button onClick={toggleTheme}> Switch Theme to {theme === "light" ? "DARK" : "LIGHT"} </button>
        <CardsTheme1 />
        <CardsTheme2 />
        <Footer />
      </ThemeProvider>
    // </div>
  );
}
