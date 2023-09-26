import { createGlobalStyle} from "styled-components";

/////////////////// first part
// all theme objects mapped with their respective CSS properties
export const lightTheme = {
  body: {
    bgColor: "beige"
  },
  cardTheme: {
    bgColor: "lightgray",
    fontColor: "slategray"
  }
}

export const darkTheme = {
  body: {
    bgColor: "darkslategrey"
  },
  cardTheme: {
    bgColor: "MidnightBlue",
    fontColor: "rebeccapurple"
  }
}


//////////////////////// second part
// the CSS properties being applied in their respective contexts and using the theme object from part 1
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body.bgColor};
  }
  #cardTheme {
    background-color: ${({ theme }) => theme.cardTheme.bgColor};
    color: ${({ theme }) => theme.cardTheme.fontColor};
  }
`;
