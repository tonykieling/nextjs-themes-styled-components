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

// this is one way of setting styles
// switching theme DOES NOT change anything in this component
function Cards() {
  return (
    <Container>
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