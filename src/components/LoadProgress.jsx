import styled, { keyframes } from "styled-components";

export default function LoadProgress({ value }) {
  return (
    <Position>
      <Backdrop />
      <Container>
        <Percentage>% {value} Loading</Percentage>
        <Outerline>
          <Innerline value={value / 100}></Innerline>
        </Outerline>
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
  gap: 20px;
  margin-top: -20%;
`;

const beat = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Percentage = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  align-self: center;

  animation: ${beat} 1s ease-in 0.2s infinite forwards;
`;

const Outerline = styled.div`
  position: relative;

  width: 700px;
  max-width: 250px;
  max-width: 60svw;

  padding: 4px 0;

  background-color: #bae6fd;
  border-radius: 20px;
  border: none;
`;

const Innerline = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  padding: inherit;

  background-color: #0c4a6e;
  border-radius: inherit;

  transition: transform 0.4s ease-out;

  transform-origin: left;
  transform: scaleX(${(p) => p.value});
`;
