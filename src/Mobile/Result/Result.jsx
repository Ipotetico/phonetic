import React from "react";
import "./Result.scss";

const Result = ({ resultClass, resultMessage, records }) => {
  return (
    <main className={`resultContainer ${resultClass}`}>{resultMessage}</main>
  );
};

export default Result;
