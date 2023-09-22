"use client";

import { useState } from "react"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes/ThemeConfig"; 
import Test from "./components/Test";
import Footer from "./components/Footer";

export default function MyApp() {
  const [theme, setTheme] = useState("light") 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}> Switch Theme to {theme === "light" ? "dark" : "light"} </button>
      <Test />
      <Footer />
    </ThemeProvider>
  );
}
