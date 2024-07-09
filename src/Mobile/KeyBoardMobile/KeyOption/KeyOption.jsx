import React from "react";
import "./KeyOption.scss";

const KeyOption = ({ text, onclick }) => {
  return (
    <main onClick={onclick} className="keyContainer option">
      {text}
    </main>
  );
};

export default KeyOption;
