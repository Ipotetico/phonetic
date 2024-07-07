import React from "react";
import "./Button.scss";
import list from "../data/list.js";

const Button = ({
  setResultClass,
  setResultMessage,
  phoneticWord,
  records,
  number,
  setWord,
  setNumber,
  setPhoneticWord,
}) => {
  const handleButton = () => {
    setNumber(() => Math.floor(Math.random() * list.length + 1));
    setWord(list[number]);
    if (phoneticWord === records) {
      setResultClass("grey");
      setResultMessage("result");
    }
    setPhoneticWord("");
  };

  return (
    <main onClick={handleButton} className="buttonContainer">
      pick a word
    </main>
  );
};

export default Button;
