import { useEffect, useState } from "react";
import Load from "./Load";

export default function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [started, setStarted] = useState(false);

  function startGame() {
    setStarted(true);
  }

  return <>{!started ? <Load /> : <Main />}</>;
}

function Main() {
  return (
    <>
      <h1>Main Page !</h1>
    </>
  );
}
