import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import forestBackground from "../assets/image/bg-forest.jpg";
import replayIcon from "../assets/icon/replay.svg";

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Main({ data, setData, setStarted }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const selectedCards = useRef(new Set());

  function restart() {
    setData([]);
    setStarted(false);
  }

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
      <Scoreboard>
        <ScoreContainer>
          <Score>Score : {score}</Score>
          <Bestscore>Best Score : {bestScore}</Bestscore>
        </ScoreContainer>
        <ReplayButton onClick={restart}>
          <img src={replayIcon} alt="" width={40} />
          <span>Replay</span>
        </ReplayButton>
      </Scoreboard>
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

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100svw;
    height: 100svh;

    background-image: url(${forestBackground});
    background-size: cover;
    background-position: center;
  }
`;

const Scoreboard = styled.div`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;

  padding: 10px;

  border-radius: 0 0 20px 20px;

  background: hsla(0, 0%, 100%, 0.9);
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Score = styled.p`
  font-size: 1.5rem;
`;

const Bestscore = styled.p`
  font-size: 1.5rem;
  color: #daa520;
`;

const ReplayButton = styled.button`
  appearance: none;
  background: none;
  border: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  cursor: pointer;

  & > span {
    font-size: 1.18rem;
  }
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

  background: hsla(0, 0%, 100%, 0.8);

  cursor: pointer;

  transition: 0.3s background, 0.3s transform;

  &:hover {
    background: hsla(0, 0%, 100%, 1);
    transform: scale(1.1);
  }
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
