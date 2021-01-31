import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangingProgressProvider";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";

const percentage = 66;

const Loader = ({fadeOut}) => {
  return (
    <div className={`loader ${fadeOut ? 'fade-out' : ''}`}>
      <div id="loader-content">
        <ChangingProgressProvider values={[0, 100]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text="PK"
            strokeWidth={3}
            styles={buildStyles({
              textColor: "white",
              pathColor: "white",
              trailColor: "grey",
              pathTransition:
                percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
            })}
          />
        )}
      </ChangingProgressProvider>
        <div id="loader-circle" />
      </div>
    </div>
  )
}

export default Loader;
