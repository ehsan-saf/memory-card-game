import styled from "styled-components";

export default function Modal({ onClick }) {
  return (
    <Position>
      <Backdrop />
      <Container>
        <Title>Welcome to memory card game !</Title>
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
