import React, { useState } from "react";
import { BrowserView } from "react-device-detect";
import "./App.scss";
import WordDesktop from "./Browser/WordDesktop/WordDesktop";
import ButtonDesktop from "./Browser/ButtonDesktop/ButtonDesktop";
import ResultDesktop from "./Browser/ResultDesktop/ResultDesktop";
import KeyBoardDesktop from "./Browser/KeyBoardDesktop/KeyBoardDesktop";
import PhoneticDesktop from "./Browser/PhoneticDesktop/PhoneticDesktop";
import list from "./data/list";

const App = () => {
  const [word, setWord] = useState();
  const [phoneticWord, setPhoneticWord] = useState("");
  const [resultClass, setResultClass] = useState("grey");
  const [resultMessage, setResultMessage] = useState("result");
  const [number, setNumber] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [valueInput, setValueInput] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [filtered, setFiltered] = useState();

  return (
    <>
      <BrowserView>
        <main className="containerMain">
          <WordDesktop number={number} list={list} searchWord={searchWord} />
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
            list={list}
            valueInput={valueInput}
            setValueInput={setValueInput}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            filtered={filtered}
            setFiltered={setFiltered}
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
