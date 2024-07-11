import React from "react";
import "./WordDesktop.scss";

const WordDesktop = ({ number, list }) => {
  return (
    <main className="wordContainer">
      <h1>
        <p>{Math.abs(list[number].id) + 1}.</p>
        {list[number].word}
        {list[number].option && (
          <p className="second">{list[number].option}.</p>
        )}
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

export default WordDesktop;
