import React, { useEffect, useState } from "react";
import "./ButtonDesktop.scss";

const ButtonDesktop = ({
  setResultClass,
  setResultMessage,
  phoneticWord,
  records,
  number,
  setNumber,
  setPhoneticWord,
  setShowHint,
  list,
  valueInput,
  setValueInput,
}) => {
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    setFiltered(list.filter((lis) => lis.word.includes(valueInput)));
  }, [valueInput, list]);

  console.log(number);

  const handleNumberPlus = () => {
    if (number <= list.length) {
      setNumber((prev) => prev + 1);
    }
    if (number === list.length - 1) {
      setNumber(0);
    }
  };
  const handleNumberMinus = () => {
    if (number > 0) {
      setNumber((prev) => prev - 1);
    }
    if (number <= 0) {
      setNumber(list.length - 1);
    }
  };

  const handleButton = () => {
    if (phoneticWord === records) {
      setResultClass("grey");
      setResultMessage("result");
    }
    setPhoneticWord("");
    setResultClass("grey");
    setResultMessage("result");
    setShowHint(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(filtered.map((el) => Math.abs(el.id + 1)));
    setValueInput("");
  };

  return (
    <main onClick={handleButton} className="buttonContainerDesktop">
      <button className="stearing" onClick={handleNumberMinus}>
        –
      </button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setValueInput(() => e.target.value)}
          type="text"
          placeholder="find your word"
          value={valueInput}
        />
      </form>
      <button className="stearing" onClick={handleNumberPlus}>
        +
      </button>
    </main>
  );
};

export default ButtonDesktop;
