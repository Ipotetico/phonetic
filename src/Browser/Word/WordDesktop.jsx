import React from "react";
import "./WordDesktop.scss";

const Word = ({ number, list }) => {
  return (
    <main className="wordContainer">
      <h1>
        <p>{list[number].id}.</p>
        {list[number].word}
      </h1>
      {list[number].flag && (
        <img
          src={process.env.PUBLIC_URL + `/images/${list[number].flag}`}
          alt={list[number].flag}
        />
      )}
    </main>
  );
};

export default Word;
