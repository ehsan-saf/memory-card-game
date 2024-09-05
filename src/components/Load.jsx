import { useState } from "react";
import LoadProgress from "./LoadProgress";
import Modal from "./Modal";

const api_url = `https://pokeapi.co/api/v2/pokemon?limit=10`;

function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Load() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [serverError, setServerError] = useState(null);
  const [startClicked, setStartClicked] = useState(false);

  async function getData() {
    const randomOffset = randomInt(100);
    const url = `${api_url}&offset=${randomOffset}`;

    const abortController = new AbortController();

    setIsLoading(true);
    try {
      const resp = await fetch(url, {
        signal: abortController.signal,
      });
      const Items = await resp.json();
      const temp = [];

      for (const item of Items.results) {
        const resp = await fetch(item.url);
        const data = await resp.json();
        temp.push(data);
      }
      console.log(temp);
      setData(temp);
      setIsLoading(false);
    } catch (error) {
      setServerError(error);
      setIsLoading(false);
    }
  }

  return (
    <>
      {!startClicked && (
        <Modal
          onClick={() => {
            setStartClicked(true);
            getData();
          }}
        />
      )}
      {isLoading && <LoadProgress error={serverError} />}
    </>
  );
}

export default Load;
