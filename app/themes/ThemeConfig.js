import { createGlobalStyle} from "styled-components";

/////////////////// first part
export const lightTheme = {
  body: '#fff',
  text: '#363537',
  footer: {
    background: "blue",
    fontColor: "red"
  },
  test: {
    background: "#fff",
    fontColor: "#000",
    border: "2px solid lime",
    margin: "2rem",
    padding: "2rem" // exceptional case where only lightTheme has padding - not in darkTheme
  },
  h2: { // h2 will have its own settings regardless of the component's definition for text
    fontColor: "darkblue"
  }
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  footer: {
    background: "yellow",
    fontColor: "lime"
  },
  test: {
    background: "gray",
    fontColor: "#fff",
    border: "2px solid lightgray",
    margin: "4rem"
  },
  h2: { // h2 will have their own settings regardless the component's definition
    fontColor: "lightblue"
  }
}


//////////////////////// second part
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif; /* static values - when not receiving params*/
    transition: all 0.50s linear;
  }

  /* settings to be applied for a component tagged as footer */
  footer { 
    background: ${({ theme }) => theme.footer.background};
    color: ${({ theme }) => theme.footer.fontColor};
  }

  /* this settings are applied for a component with id = test */
  #test {   
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border: ${({ theme }) => theme.test.border};
    margin: ${({ theme }) => theme.test.margin};
    padding: ${({ theme }) => theme.test.padding};
    border-radius: 11px; /* static values - when not receiving params*/
  }

  /* settings applied for all h2 in the page */
  h2 { 
    color: ${({ theme }) => theme.h2.fontColor};
  }
`;