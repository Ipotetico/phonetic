import React from "react";
import "./KeyBoardDesktop.scss";
import KeyDesktop from "./Key/KeyDesktop";
import symbols from "../../data/symbols";
import KeyOptionDesktop from "./KeyOption/KeyOptionDesktop";

const KeyBoardDesktop = ({
  setPhoneticWord,
  setResultClass,
  resultClass,
  setResultMessage,
  resultMessage,
  phoneticWord,
  setShowHint,
  showHint,
  list,
  number,
}) => {
  const handleCheck = () => {
    if (phoneticWord === list[number].phonetic) {
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
        <KeyDesktop
          key={index}
          text={symbol}
          setPhoneticWord={setPhoneticWord}
        />
      ))}
      <div className="optionsKeys">
        <KeyOptionDesktop text="check" onclick={handleCheck} />
        <KeyOptionDesktop text="hint" onclick={handleShowHint} />
        <KeyOptionDesktop text="backspace" onclick={handleBackspace} />
        <KeyOptionDesktop text="clear" onclick={handleClear} />
      </div>
    </main>
  );
};

export default KeyBoardDesktop;
