import { useState } from "react";
import LoadProgress from "./LoadProgress";
import Modal from "./Modal";

const quantity = 15;
const api_url = `https://pokeapi.co/api/v2/pokemon?limit=${quantity}`;

function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Load({ start, setData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [startClicked, setStartClicked] = useState(false);

  async function createImageObject(url) {
    const resp = await fetch(url);
    const imageBlob = await resp.blob();

    const imageSrc = URL.createObjectURL(imageBlob);
    return imageSrc;
  }

  async function extractData(items) {
    let temp = [];
    for (const item of items) {
      const resp = await fetch(item.url);
      const data = await resp.json();

      const image = await createImageObject(data.sprites["front_default"]);

      temp.push({ id: data.id, name: data.name, image });
    }
    return temp;
  }

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
      const temp = await extractData(Items.results);

      setData(temp);
      setIsLoading(false);
      start();
    } catch (error) {
      setServerError(error);
      setIsLoading(false);
    }
  }

  function handleTryAgain() {
    setServerError(null);
    setData([]);
    getData();
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
      {(isLoading || serverError) && (
        <LoadProgress error={serverError} onTryAgain={handleTryAgain} />
      )}
    </>
  );
}

export default Load;
