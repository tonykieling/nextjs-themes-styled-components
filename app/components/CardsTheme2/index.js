// import { Container, Card, Name, Description } from "./styles"; // there is NO styles.js

const data = [
  {
    name: "Card 2",
    desc: "Second way - Card 1 and Card 2 behave the same, but they were implemented a bit differently"
  }
];

// this is one way of setting styles having all CSS in themeConfig.js
// it needs to set HTML elements accordingly, i.e. h1, p, div, a, span, etc, in this current file, 
// instead of doing this in the styled-components
function CardsTheme2() {
  return (
    <div id="container-cardTheme2">
      { data.map((e, index) => (
          <div id="card" key={index}>
            <h1 id="name"> {e.name} </h1>
            <p id="description"> {e.desc} </p>
          </div>
        ))
      }
    </div>
  )
}

export default CardsTheme2;