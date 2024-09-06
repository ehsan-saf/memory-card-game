import styled from "styled-components";

export default function Main({ data }) {
  return (
    <Container>
      <Scoreboard></Scoreboard>
      <Grid>
        {data.map((item) => {
          return (
            <>
              <Card id={item.id}>
                <Image src={item.image} />
                <Name>{item.name}</Name>
              </Card>
            </>
          );
        })}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Scoreboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-self: center;
`;

const Grid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  justify-content: center;
  gap: 25px;
  padding: 30px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 10px;
  }
`;

const Card = styled.button`
  appearance: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 3px solid #1d3357;
  border-radius: 15px;

  padding: 0;

  background: none;

  cursor: pointer;
`;

const Image = styled.img`
  width: 120px;
  height: auto;
`;

const Name = styled.p`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
  font-weight: bold;

  border-top: 1px solid black;

  padding-top: 10px;
  padding-bottom: 10px;
`;
