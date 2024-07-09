import React from "react";
import "./KeyOptionDesktop.scss";

const KeyOption = ({ text, onclick }) => {
  return (
    <main onClick={onclick} className="keyContainer option">
      {text}
    </main>
  );
};

export default KeyOption;
