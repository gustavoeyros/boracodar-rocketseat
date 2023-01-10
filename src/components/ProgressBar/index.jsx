import { useEffect, useState } from "react";
import {
  TotalProgress,
  CurrentProgress,
  Timer,
  WrapperProgress,
} from "./styled";

const ProgressBar = () => {
  const [currentProgress, setCurrentProgress] = useState(10);

  useEffect(() => {
    if (currentProgress < 100) {
      const interval = setTimeout(() => {
        setCurrentProgress((prev) => (prev += 1));
      }, 50);
    } else {
      setCurrentProgress(10);
    }
  }, [currentProgress]);

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
