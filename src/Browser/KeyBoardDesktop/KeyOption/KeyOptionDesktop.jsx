import React from "react";
import "./KeyOptionDesktop.scss";

const KeyOption = ({ text, onclick }) => {
  return (
    <button onClick={onclick} className="keyContainer option">
      {text}
    </button>
  );
};

export default KeyOption;
