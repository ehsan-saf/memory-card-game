import styled from "styled-components";
import { useState } from "react";
import Load from "./Load";
import Main from "./Main";

export default function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [data, setData] = useState([]);
  const [started, setStarted] = useState(false);

  function startGame() {
    setStarted(true);
  }

  return (
    <>
      {!started ? (
        <Load start={startGame} setData={setData} />
      ) : (
        <Main data={data} setData={setData} />
      )}
    </>
  );
}
