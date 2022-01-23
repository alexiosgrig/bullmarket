import Border from "../Border/Border";
import React, { useContext } from "react";
import "../css/App.css";
import { useState } from "react";
import { Context } from "../Context/Context";
//importing Hooks and Components
//
//
export default function InputForm() {
  const [value, setValue] = useState(""); //Initiaze State
  const [setContext] = useContext(Context);
  const getValue = (e) => {
    setValue(e.target.value.toUpperCase());
  };
  // getValue function sets a value typed by the user in uppercase to state

  const onSubmit = (e) => {
    setContext(value);
    e.preventDefault();
  };
  // onSubmit function sets the value of the context according to what the user typed
  return (
    <Border nameClass="Border">
      <div className="InputPlacement">
        <p> Enter a stock symbol :</p>
        <input type="text" onChange={getValue} maxlength="4"></input>
        <h1> For example: AAPL </h1>
        <input type="submit" className="Submit" onClick={onSubmit}></input>
      </div>
    </Border>
  );
}
