import {
  TotalProgress,
  CurrentProgress,
  Timer,
  WrapperProgress,
} from "./styled";

const ProgressBar = () => {
  return (
    <WrapperProgress>
      <TotalProgress>
        <CurrentProgress />
      </TotalProgress>

      <Timer>
        <span>03:20</span>
        <span>00:12</span>
      </Timer>
    </WrapperProgress>
  );
};

export default ProgressBar;
