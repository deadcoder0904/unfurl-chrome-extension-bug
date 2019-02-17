import useDidMount from "@rooks/use-did-mount";
import React, { useState } from "react";
import unfurl from "unfurl.js";

const _fetchMeta = async setResult => {
  try {
    let result = await unfurl("https://imgur.com/gallery/fhAIf");
    setResult(result);
  } catch (e) {
    console.error("e", e);
  }
};

const App = () => {
  const [result, setResult] = useState("This must be changed by UNFURL");

  useDidMount(() => {
    _fetchMeta(setResult);
  });

  return (
    <>
      <h1>UNFURL BUG</h1>
      <h4>{JSON.stringify(result)}</h4>
      <p>Right Click & Open Inspect & Check Console to see the error</p>
    </>
  );
};

export default App;
