import { createGlobalStyle} from "styled-components";

/////////////////// first part
// all theme objects mapped with their respective customized CSS properties
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
  // ### general CSS settings
  body {
    background-color: ${({ theme }) => theme.body.bgColor};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    width: 100%;
    height: 2.5rem;
  }


  // ### CardsTheme1
  // first way of styling, keeping the original style.js files in each component
  // only what needs to be changed by theme will be in here
  #cardTheme {
    background-color: ${({ theme }) => theme.cardTheme.bgColor};
    color: ${({ theme }) => theme.cardTheme.fontColor};
  }


  // ### CardsTheme2
  // second way of styling, bringing all properties from style.js for this very file
  // two things to note
  //  1. the current file will get big easily and potentially hard to manage
  //  2. the index.js file for each element needs to be rewritten, removing the calling for styles.js and making every 
  //   of its internal HTML elements defined in there (index.js). That means instead of having the HTML definiton on styles.js, 
  //   it will happen at index.js
  #container-cardTheme2 {
    background-color: ${({ theme }) => theme.cardTheme.bgColor};
    color: ${({ theme }) => theme.cardTheme.fontColor};
    border: 1px solid green;
    border-radius: 15px;
    padding: 2rem;
    margin: 1rem 0;
    width: 50%;
  }
  #card {
    border: 1px solid darkgray;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  #name {
    &:hover {
      font-style: italic;
    }
  }
`;
  
