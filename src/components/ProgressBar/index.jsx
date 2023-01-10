import { useEffect, useState } from "react";
import {
  TotalProgress,
  CurrentProgress,
  Timer,
  WrapperProgress,
} from "./styled";

const ProgressBar = (props) => {
  const [currentProgress, setCurrentProgress] = useState(10);
  console.log(props.checked);
  useEffect(() => {
    if (props.checked) {
      setTimeout(() => {
        setCurrentProgress((prev) => (prev += 1));
      }, 500);
    } else {
      setCurrentProgress(10);
    }
  }, [currentProgress, props.checked]);

  return (
    <WrapperProgress>
      <TotalProgress>
        <CurrentProgress value={currentProgress} />
      </TotalProgress>

      <Timer>
        <span>03:20</span>
        <span>00:12</span>
      </Timer>
    </WrapperProgress>
  );
};

export default ProgressBar;
