import React from "react";
import "./Key.scss";

const Key = ({ text, clas, setPhoneticWord }) => {
  return (
    <main
      onClick={() => setPhoneticWord((prev) => prev + text)}
      className={clas === "option" ? "keyContainer option" : "keyContainer"}
    >
      {text}
    </main>
  );
};

export default Key;
