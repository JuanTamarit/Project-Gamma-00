import React from "react";
import "./cv.scss";

function Cv(props) {
  const { showIcon } = props;

  return <img className="cv-icon" src="/icons/cv-icon.svg"></img>;
}

export default Cv;
