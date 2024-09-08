import styled from "styled-components";

const options = {
  easy: 8,
  medium: 14,
  hard: 22,
};

export default function Modal({ onClick, quantity, setQuantity }) {
  function updateDifficulty(e) {
    setQuantity(Number(e.target.value));
  }

  return (
    <Position>
      <Backdrop />
      <Container>
        <Title>Welcome to memory card game !</Title>
        <Options>
          <Difficulty selected={options.easy === quantity} mode={"easy"}>
            Easy
            <Input
              type="radio"
              name="difficulty"
              value={options.easy}
              checked={options.easy === quantity}
              onChange={updateDifficulty}
            />
          </Difficulty>

          <Difficulty selected={options.medium === quantity} mode={"medium"}>
            Medium
            <Input
              type="radio"
              name="difficulty"
              value={options.medium}
              checked={options.medium === quantity}
              onChange={updateDifficulty}
            />
          </Difficulty>

          <Difficulty selected={options.hard === quantity} mode={"hard"}>
            Hard
            <Input
              type="radio"
              name="difficulty"
              value={options.hard}
              checked={options.hard === quantity}
              onChange={updateDifficulty}
            />
          </Difficulty>
        </Options>
        <StartButton onClick={onClick}>Start</StartButton>
      </Container>
    </Position>
  );
}

const Position = styled.div`
  width: 100svw;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-block-start: 20svh;

  @media (width <= 500px) {
    padding-block-start: 0;
    align-items: center;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  background-color: hsla(0, 0%, 99%, 0.2);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(3svh + 25px);

  position: relative;

  padding: 15px;

  font-size: calc(0.8rem + 0.6svw);

  border-radius: 35px 15px;
  border: 1px solid black;
`;

const Title = styled.h2`
  font-weight: bold;
`;

const Options = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 400px) {
    gap: 10px;
  }
`;

const Difficulty = styled.label`
  padding: 10px;
  border-radius: 10px;

  background: ${(option) => {
    if (option.selected) {
      switch (option.mode) {
        case "easy":
          return "#34d399";

        case "medium":
          return "#fb923c";

        case "hard":
          return "#f87171";
      }
    } else {
      return "#e5e5e5";
    }
  }};
`;

const Input = styled.input`
  display: none;
`;

const StartButton = styled.button`
  display: flex;
  justify-content: center;

  border: 3px solid green;
  border-radius: 8px;

  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;

  padding: 5px 22px;

  color: white;
  background-color: green;

  transition: transform 0.2s;

  &:hover {
    color: green;
    background-color: white;

    transform: translateY(-2px) scale(1.1);
  }
`;
