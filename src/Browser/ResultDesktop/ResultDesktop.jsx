import React from "react";
import "./ResultDesktop.scss";

const Result = ({ resultClass, resultMessage, list, number }) => {
  return (
    <>
      <main className={`resultContainer ${resultClass}`}>{resultMessage}</main>
      <div className="definitions">
        <h5>MEANING:</h5>
        {list[number].definition.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </div>
    </>
  );
};

export default Result;
