import "./buttons.scss";
import { Link } from "react-router-dom";
import Download from "../icons/download/download";
import Cv from "../icons/cv/cv";

function Cvbutton(props) {
  const { buttonType } = props;

  const btn = "btn";
  const h4 = "h4";

  const combinedClasses = `${btn} ${h4} ${buttonType}`;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* {" "}
        <Link to={props.url} onClick={scrollToTop}>
          <button className={combinedClasses}>
            {props.icon}
            {props.text}
          </button>
        </Link> */}
      <a
        className="btn primary h4 link"
        href="/img/cvjuantamaritabril24.pdf"
        download="cvjuantamaritabril24.pdf"
      >
        <Cv />
        {props.text}
      </a>
    </>
  );
}
export default Cvbutton;
