import React, { useState } from "react";
import { BrowserView } from "react-device-detect";
import "./App.scss";
import Word from "./Browser/Word/WordDesktop";
import ButtonDesktop from "./Browser/Button/ButtonDesktop";
import PhoneticDesktop from "./Browser/Phonetic/PhoneticDesktop";
import ResultDesktop from "./Browser/Result/ResultDesktop";
import KeyBoardDesktop from "./Browser/KeyBoard/KeyBoardDesktop";
import list from "./data/list";

const App = () => {
  const [word, setWord] = useState();
  const [phoneticWord, setPhoneticWord] = useState("");
  const [resultClass, setResultClass] = useState("grey");
  const [resultMessage, setResultMessage] = useState("result");
  const [number, setNumber] = useState(0);
  const [showHint, setShowHint] = useState(true);

  console.log(number);

  return (
    <>
      <BrowserView>
        <main className="containerMain">
          <Word word={word} number={number} list={list} />
          <ButtonDesktop
            setResultClass={setResultClass}
            setResultMessage={setResultMessage}
            setWord={setWord}
            setNumber={setNumber}
            setPhoneticWord={setPhoneticWord}
            setShowHint={setShowHint}
            number={number}
            word={word}
            phoneticWord={phoneticWord}
          />
          <KeyBoardDesktop
            setResultClass={setResultClass}
            resultClass={resultClass}
            setResultMessage={setResultMessage}
            setShowHint={setShowHint}
            resultMessage={resultMessage}
            showHint={showHint}
            setPhoneticWord={setPhoneticWord}
            phoneticWord={phoneticWord}
            list={list}
            number={number}
          />
          <PhoneticDesktop
            phoneticWord={phoneticWord}
            showHint={showHint}
            number={number}
            list={list}
          />
          <ResultDesktop
            resultClass={resultClass}
            resultMessage={resultMessage}
            number={number}
            list={list}
          />
        </main>
      </BrowserView>
    </>
  );
};

export default App;
