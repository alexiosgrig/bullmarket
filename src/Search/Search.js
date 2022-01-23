import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import "../css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

export const Search = () => {
  const [value, setValue] = useState();
  const [context, setContext] = useContext(Context);
  const Submit = () => {
    setContext(value);
  };
  const handleChange = (e) => {
    setValue(e.target.value.toUpperCase());
  };

  return (
    <div>
      <div className="Search">
        <input
          maxLength={4}
          required
          autoFocus
          placeholder="Search for stock symbols"
          type="text"
          style={{
            height: "25px",
            width: "500px",
            borderColor: "grey",
            borderWidth: "1px",
            outline: "none",
          }}
          onChange={handleChange}
        ></input>
        <button
          style={{
            height: "29px",
            width: "100px",
            backgroundColor: "#38f",
            borderStyle: "none",
          }}
          onClick={Submit}
        >
          <FontAwesomeIcon icon={faSearch} color="white"></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};
