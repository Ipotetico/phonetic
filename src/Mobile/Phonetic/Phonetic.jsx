import React from "react";
import "./Phonetic.scss";

const Phonetic = ({ phoneticWord, records, showHint }) => {
  return (
    <main className="phoneticContainer">
      <h2>/ {phoneticWord} / </h2>
      {!showHint && <p>{records}</p>}
    </main>
  );
};

export default Phonetic;
