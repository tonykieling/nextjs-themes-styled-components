import { Container, Card, Name, Description } from "./styles";

const data = [
  {
    name: "Card 1",
    desc: "First way of doing theme"
  }
];

// a way of setting styles by using theme
// the style comes from styles.js (styled-components) AND also from ThemeConfig.js
function CardsTheme1() {
  return (
    <Container id="cardTheme">  {/* it needs to add id to the element to be changed by theme  */}
      { data.map((e, index) => (
          <Card key={index}>
            <Name> {e.name} </Name>
            <Description> {e.desc} </Description>
          </Card>
        ))
      }
    </Container>
  )
}

export default CardsTheme1;