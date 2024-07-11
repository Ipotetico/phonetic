import React from "react";
import "./KeyDesktop.scss";

const Key = ({ text, clas, setPhoneticWord }) => {
  return (
    <button
      onClick={() => setPhoneticWord((prev) => prev + text)}
      className={clas === "option" ? "keyContainer option" : "keyContainer"}
    >
      {text}
    </button>
  );
};

export default Key;
