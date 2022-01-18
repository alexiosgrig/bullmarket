import Border from "../Border/Border";
import React, { useContext } from "react";
import "../css/App.css";
import { useState, useEffect } from "react";
import { Context } from "../Context/Context";
export default function InputForm() {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [classChange, setClassChange] = useState("InputStock");
  const [context, setContext] = useContext(Context);
  const validCheck = (e) => {
    setValue(e.target.value.toUpperCase());
    if (e.target.value.length >= 5) {
      setValid(true);
    } else {
      setValid(false);
    }
    if (valid === true) {
      setClassChange("InputStockInvalid");
    } else {
      setClassChange("InputStock");
    }
  };
  // setContext(value);
  const onSubmit = (e) => {
    console.log(context);
    setContext(value);
    // console.log(context);
    e.preventDefault();
  };

  return (
    <Border nameClass="Border">
      <div className="InputPlacement">
        <p> Enter a stock symbol :</p>
        <input
          type="text"
          className={classChange}
          onChange={validCheck}
          maxlength="4"
        ></input>
        <h1> For example: {context}</h1>
        <input type="submit" className="Submit" onClick={onSubmit}></input>
        {valid && (
          <p style={{ color: "red" }}>
            Not valid, please use less than 4 letters
          </p>
        )}
      </div>
    </Border>
  );
}
