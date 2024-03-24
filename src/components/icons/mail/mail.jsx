import React from "react";
import "./mail.scss";

function Mail(props) {
  const { showIcon } = props;

  return (
    <img className="mail-icon" src="/icons/mail-icon-new.svg"></img>
    // <svg
    //   className="mail-icon"
    //   id={showIcon}
    //   // id="Capa_1"
    //   data-name="Capa 1"
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 100 70.2"
    // >
    //   <title>mail-2</title>
    //   <path
    //     className="mail-icon__color"
    //     d="M0,66.34V3.88H3.88V66.34Zm96.12,3.89H3.88V66.34H96.12Zm0-66.35H3.88V0H96.12Zm0,62.46V3.88H100V66.34Z"
    //   />
    //   <polygon
    //     className="mail-icon__color"
    //     points="49.99 44.17 47.37 46.94 37.41 37.7 6.51 66.35 3.89 63.55 34.58 35.11 3.89 6.68 6.51 3.88 37.38 32.5 40.21 35.11 49.99 44.17"
    //   />
    //   <polygon
    //     className="mail-icon__color"
    //     points="49.99 44.17 52.61 46.94 62.57 37.7 93.47 66.35 96.09 63.55 65.39 35.11 96.09 6.68 93.47 3.88 62.6 32.5 59.77 35.11 49.99 44.17"
    //   />
    // </svg>
  );
}

export default Mail;
