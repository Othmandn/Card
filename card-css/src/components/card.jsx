import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  width: 20vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
  flex-wrap: wrap;
  box-sizing: border-box;
`;
const Header = styled.header`
background-color: gray;
    display: flex;
   
    justify-content: center;
    width: 100%;
    align-self: flex-start;
    padding: 25px;
    margin-bottom: 15px;
}
`;
const Img = styled.img`
  width: 40%;
  height: 5vh;
  object-fit: cover;
`;
const MainTitle = styled.h1`
  font-size: 2rem;
  align-self: flex-start;
`;
const Stars = styled.img`
  width: 10vw;
`;
const Line = styled.div`
  width: 80%;
  background-color: gray;
  height: 1px;
  margin: 10px;
`;
const Purple = styled.h2`
  color: purple;
  align-self: flex-start;
  padding: 10px;
`;
const Button = styled.button`
  background-color: #caced2;
  border-radius: 10px;
  margin: 10px;
`;

const MiniContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;
const Card = () => {
  return (
    <Container>
      <Header>
        <Img
          src="https://c8.alamy.com/compfr/p9gf3r/la-nourriture-avec-une-cuillere-et-fourchette-symbole-vecteur-modele-de-conception-de-logo-graphique-p9gf3r.jpg"
          alt="logo"
        />
      </Header>
      <MainTitle>Title</MainTitle>
      <MiniContainer className="star-container">
        <Stars
          src="https://www.rejoindre-plus-que-pro.fr/wp-content/uploads/2017/01/plus-que-pro-etoiles-big.png"
          alt="stars"
        />
        <p>4.5 (415)</p>
      </MiniContainer>
      <MiniContainer>
        <h2 className="h2">Secondary text</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          soluta officiis quisquam modi! Suscipit commodi esse rerum laboriosam
          !
        </p>
      </MiniContainer>
      <Line></Line>
      <h2>Subtitle</h2>
      <MiniContainer>
        <Button>Item 1</Button>
        <Button>Item 2</Button>
        <Button>Item 3</Button>
        <Button>Item 4</Button>
      </MiniContainer>
      <Purple>Action 1</Purple>
    </Container>
  );
};

export default Card;
