import React from "react";
import "../css/App.css";
export default function Border({ children, nameClass }) {
  return <div className={nameClass}> {children}</div>;
}
