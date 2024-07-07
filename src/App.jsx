import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.scss";
import Word from "./Word/Word";
import Button from "./Button/Button";
import KeyBoard from "./KeyBoard/KeyBoard";
import Phonetic from "./Phonetic/Phonetic";
import Result from "./Result/Result";

const App = () => {
  const [records, setRecords] = useState([]);
  const [word, setWord] = useState("pick");
  const [phoneticWord, setPhoneticWord] = useState("");
  const [resultClass, setResultClass] = useState("grey");
  const [resultMessage, setResultMessage] = useState("result");
  const [number, setNumber] = useState(0);
  const [showHint, setShowHint] = useState(true);

  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  useEffect(() => {
    Axios.get(URL).then((res) => {
      setRecords(res.data[0].phonetic);
    });
  }, [URL]);

  console.log(word, records, phoneticWord, showHint);

  return (
    <main className="containerMain">
      <Word word={word} />
      <Button
        setResultClass={setResultClass}
        setResultMessage={setResultMessage}
        setWord={setWord}
        setNumber={setNumber}
        setPhoneticWord={setPhoneticWord}
        number={number}
        yarn
        run
        word={word}
        records={records}
        phoneticWord={phoneticWord}
      />
      <KeyBoard
        setResultClass={setResultClass}
        resultClass={resultClass}
        setResultMessage={setResultMessage}
        setShowHint={setShowHint}
        resultMessage={resultMessage}
        showHint={showHint}
        records={records}
        setPhoneticWord={setPhoneticWord}
        phoneticWord={phoneticWord}
      />
      <Phonetic
        phoneticWord={phoneticWord}
        records={records}
        showHint={showHint}
      />
      <Result resultClass={resultClass} resultMessage={resultMessage} />
    </main>
  );
};

export default App;
