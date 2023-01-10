import { Wrapper } from "./styled";
import Logo from "../../assets/musicLogo.svg";
import Description from "../Description";
import Button from "../Button";
import ProgressBar from "../ProgressBar";
import { useState } from "react";

const MusicPlayer = () => {
  const [verifyTouch, setVerifyTouch] = useState(false);

  const onVerifyTouch = () => {
    setVerifyTouch(!verifyTouch);
  };
  return (
    <Wrapper>
      <img src={Logo} />
      <Description />
      <Button touchChecked={onVerifyTouch} />
      <ProgressBar checked={verifyTouch} />
    </Wrapper>
  );
};

export default MusicPlayer;
