import { useEffect, useState } from "react";
import {
  TotalProgress,
  CurrentProgress,
  Timer,
  WrapperProgress,
} from "./styled";

const ProgressBar = (props) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentTimer, setCurrentTimer] = useState(0);
  const [currentMinute, setCurrentMinute] = useState(0);

  let second = 0;

  useEffect(() => {
    if (props.checked) {
      setTimeout(() => {
        setCurrentProgress((prev) => (prev += 0.52083333333333));
        setCurrentTimer((prev) => {
          if (prev >= 59) {
            return (second += 1);
          }
          return (prev += 1);
        });
        if (currentTimer >= 59) {
          setCurrentMinute((prev) => prev + 1);
        }
      }, 50);

      if (currentMinute === 3 && currentTimer == 20) {
        setCurrentMinute(0);
        setCurrentTimer(0);
      }

      if (currentProgress >= 100) {
        setCurrentProgress(0);
        setCurrentMinute(0);
        setCurrentTimer(0);
      }
    } else {
      setCurrentProgress((prev) => prev);
    }
    console.log("Minuto:" + currentMinute);
    console.log("Segundo:" + currentTimer);
    console.log("Progresso:" + currentProgress + "%");
  }, [currentProgress, props.checked, currentMinute]);

  return (
    <WrapperProgress>
      <TotalProgress>
        <CurrentProgress value={currentProgress} />
      </TotalProgress>

      <Timer>
        <span>03:20</span>
        <span>
          {currentTimer < 10
            ? `0${currentMinute}:0${currentTimer}`
            : ` 0${currentMinute}:${currentTimer}`}
        </span>
      </Timer>
    </WrapperProgress>
  );
};

export default ProgressBar;
