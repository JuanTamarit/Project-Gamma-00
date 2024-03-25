import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.scss";
import Mail from "../icons/mail/mail";

function Topbar(props) {
  const handleMailClick = () => {
    const emailAddress = "tamaritvaju@gmail.com";
    const subject = "JUANTAMARIT.COM - Motivo de contacto:";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="topbar h6">
      <Link to="#" onClick={handleMailClick}>
        <Mail color="#2d00f6" />
        Contacto
      </Link>
      <Link to={props.url}>{props.link}</Link>
    </div>
  );
}

export default Topbar;
