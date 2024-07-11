import React from "react";
import "./PhoneticDesktop.scss";

const PhoneticDesktop = ({ phoneticWord, showHint, number, list }) => {
  return (
    <main className="phoneticContainer">
      <h2>/ {phoneticWord} / </h2>
      {!showHint && <p>/{list[number].phonetic}/</p>}
    </main>
  );
};

export default PhoneticDesktop;
