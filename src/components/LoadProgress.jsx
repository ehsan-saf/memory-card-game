import styled, { keyframes } from "styled-components";

export default function LoadProgress() {
  return (
    <Position>
      <Backdrop />
      <Container>
        <Title>Loading</Title>
        <Circle />
      </Container>
    </Position>
  );
}

const Position = styled.div`
  width: 100svw;
  height: 100svh;
  display: grid;
  place-content: center;
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  background-color: hsla(0, 0%, 99%, 0.9);
  z-index: -1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: -20%;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0turn);
  }
  100% {
    transform: rotate(1turn);
  }
`;

const Circle = styled.div`
  padding: 30px;
  border-radius: 50%;
  border-top: 7px solid #0369a1;
  background: transparent;

  will-change: transform;
  animation: ${rotate} 0.8s linear infinite;
`;
