import React, { useEffect, useState } from "react";
import "./PhoneticDesktop.scss";

const Phonetic = ({ phoneticWord, showHint, number, list }) => {
  const [hintWord, setHintWord] = useState("");
  useEffect(() => {
    setHintWord(() => list[number].word);
  }, [number]);
  console.log(number);
  return (
    <main className="phoneticContainer">
      <h2>/ {phoneticWord} / </h2>
      {!showHint && <p>/{list[number].phonetic}/</p>}
    </main>
  );
};

export default Phonetic;
