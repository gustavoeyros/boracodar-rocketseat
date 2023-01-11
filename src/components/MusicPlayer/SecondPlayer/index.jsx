import { Wrapper, DescContainer } from "./styled";
import Logo from "../../../assets/musicLogo.svg";
import Description from "../../Description";
import Button from "../../Button";
import ProgressBar from "../../ProgressBar";
import { useState } from "react";

const SecondPlayer = () => {
  const [verifyTouch, setVerifyTouch] = useState(false);

  const onVerifyTouch = () => {
    setVerifyTouch(!verifyTouch);
  };

  return (
    <>
      <Wrapper>
        <DescContainer>
          <img src={Logo} />
          <Description />
        </DescContainer>
        <Button touchChecked={onVerifyTouch} />
        <ProgressBar checked={verifyTouch} />
      </Wrapper>
    </>
  );
};

export default SecondPlayer;
