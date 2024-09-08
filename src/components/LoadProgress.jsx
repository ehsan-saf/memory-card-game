import styled, { keyframes } from "styled-components";

export default function LoadProgress({ error, onTryAgain }) {
  return (
    <Position>
      <Backdrop />
      <Container>
        {error === null ? (
          <>
            <Title>Loading</Title>
            <Circle />{" "}
          </>
        ) : (
          <>
            <ErrorMessage>Connection Error</ErrorMessage>
            <TryButton onClick={onTryAgain}>Try Again</TryButton>
          </>
        )}
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

const ErrorMessage = styled.h2`
  font-size: 1.2rem;
  color: red;
`;

const TryButton = styled.button`
  display: flex;
  justify-content: center;

  border: 3px solid green;
  border-radius: 8px;

  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;

  background-color: white;

  padding: 5px 22px;
  cursor: pointer;
`;
