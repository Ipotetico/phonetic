import React from "react";
import "./Word.scss";

const Word = ({ word }) => {
  return (
    <main className="wordContainer">
      <h1>{word}</h1>
    </main>
  );
};

export default Word;
