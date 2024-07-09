import React from "react";
import "./ButtonDesktop.scss";
import list from "../../data/list";

const Button = ({
  setResultClass,
  setResultMessage,
  phoneticWord,
  records,
  number,
  setWord,
  setNumber,
  setPhoneticWord,
  setShowHint,
  word,
}) => {
  const handleButton = () => {
    setNumber(() => Math.floor(Math.random() * list.length + 1));
    if (phoneticWord === records) {
      setResultClass("grey");
      setResultMessage("result");
    }
    setPhoneticWord("");
    setResultClass("grey");
    setResultMessage("result");
    setShowHint(true);
  };
  console.log(number, word);
  return (
    <main onClick={handleButton} className="buttonContainerDesktop">
      pick a word
    </main>
  );
};

export default Button;
