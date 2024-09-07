import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Main({ data, setData }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const selectedCards = useRef(new Set());

  useEffect(() => {
    const shuffledArray = shuffle([...data]);
    setData(shuffledArray);
  }, []);

  function updateScore(id) {
    const set = selectedCards.current;
    if (set.has(id)) {
      set.clear();
      setBestScore(Math.max(score, bestScore));
      setScore(0);
    } else {
      set.add(id);
      setBestScore(Math.max(score + 1, bestScore));
      setScore(score + 1);
    }
  }

  function handleClick(id) {
    updateScore(id);
    const shuffledArray = shuffle([...data]);
    setData(shuffledArray);
  }

  return (
    <Container>
      <Scoreboard></Scoreboard>
      <Grid>
        {data.map((item) => {
          return (
            <Card key={item.id} onClick={() => handleClick(item.id)}>
              <Image src={item.image} />
              <Name>{item.name}</Name>
            </Card>
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
  gap: 30px;
  padding: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
    margin: 0;
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
  letter-spacing: 2px;

  border-top: 1px solid black;

  padding-top: 10px;
  padding-bottom: 10px;
`;
