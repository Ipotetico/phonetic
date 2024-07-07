import React from "react";
import "./KeyBoard.scss";
import Key from "./Key/Key";
import symbols from "../data/symbols";
import KeyOption from "./KeyOption/KeyOption";

const Keyboard = ({
  setPhoneticWord,
  setResultClass,
  resultClass,
  setResultMessage,
  resultMessage,
  phoneticWord,
  setShowHint,
  showHint,
  records,
}) => {
  const handleCheck = () => {
    console.log(showHint);
    if (phoneticWord === records.slice(0, -1).slice(1)) {
      setResultClass("green");
      setResultMessage("essa");
    } else {
      setResultClass("red");
      setResultMessage("no i dupa");
    }
  };

  const handleShowHint = () => {
    setShowHint(!showHint);
  };

  const handleBackspace = () => {
    if (phoneticWord.length > 0) {
      setPhoneticWord(phoneticWord.slice(0, -1));
    }
  };

  const handleClear = () => {
    setPhoneticWord("");
  };

  return (
    <main className="keyboardContainer">
      {symbols.map((symbol, index) => (
        <Key key={index} text={symbol} setPhoneticWord={setPhoneticWord} />
      ))}
      <div className="optionsKeys">
        <KeyOption text="check" onclick={handleCheck} />
        <KeyOption text="hint" onclick={handleShowHint} />
        <KeyOption text="backspace" onclick={handleBackspace} />
        <KeyOption text="clear" onclick={handleClear} />
      </div>
    </main>
  );
};

export default Keyboard;
