import React, { useState } from "react";

const Calculator = () => {
  const [val, setVal] = useState("");
  const operator = ["+", "-", "*", "/"];

  function btnClickHandler(e) {
    let enterValue = e.target.innerText;

    // Do operators ek saath na aaye
    if (
      operator.includes(val[val.length - 1]) &&
      operator.includes(enterValue)
    ) {
      return;
    }

    setVal(val + enterValue);
  }

  function clearHandler() {
    setVal("");
  }

  function equalHandler() {
    try {
      setVal(eval(val).toString());
    } catch {
      setVal("Error");
    }
  }

  return (
    <div className="calculator">
      <div className="display">{val || "0"}</div>

      <div className="buttons">
        <button onClick={clearHandler}>C</button>
        <button onClick={btnClickHandler}>/</button>
        <button onClick={btnClickHandler}>*</button>
        <button onClick={btnClickHandler}>-</button>

        <button onClick={btnClickHandler}>7</button>
        <button onClick={btnClickHandler}>8</button>
        <button onClick={btnClickHandler}>9</button>
        <button onClick={btnClickHandler}>+</button>

        <button onClick={btnClickHandler}>4</button>
        <button onClick={btnClickHandler}>5</button>
        <button onClick={btnClickHandler}>6</button>

        <button onClick={btnClickHandler}>1</button>
        <button onClick={btnClickHandler}>2</button>
        <button onClick={btnClickHandler}>3</button>

        <button onClick={btnClickHandler}>0</button>
        <button onClick={btnClickHandler}>.</button>
        <button className="equal" onClick={equalHandler}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;