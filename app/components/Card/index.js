import { Container, Card, Name, Description } from "./styles";

const data = [
  {
    name: "Jon Doe",
    desc: "This is one person"
  },
  // {
  //   name: "Alice Simon",
  //   desc: "This is another person"
  // }
];

// this is one way of setting styles, grabbing them from styles.js (styled-components)
// switching theme DOES NOT change anything in this component
function Cards() {
  return (
    <Container>
      <span>It doesn&apos;t apply theme</span>
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