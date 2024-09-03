import { useState } from "react";
import Modal from "./Modal";
import LoadProgress from "./LoadProgress";

export default function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [started, setStarted] = useState(false);

  function startGame() {
    setStarted(true);
  }

  return (
    <>
      {!started ? <Modal onClick={startGame} /> : <LoadProgress value={50} />}
    </>
  );
}
