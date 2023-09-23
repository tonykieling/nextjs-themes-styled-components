import { Container, Card, Name, Description } from "./styles";

const data = [
  {
    name: "Jon Doe",
    desc: "This is one guy"
  },
  {
    name: "Alice Simon",
    desc: "This is a lady"
  }
];

// this is the another way of setting styles, by using theme
function Cards() {
  return (
    <Container id="cardTheme">  {/* difference is adding id for the element to be changed by theme  */}
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

export default Cards;