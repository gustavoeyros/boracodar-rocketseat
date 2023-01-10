import { useState } from "react";
import { ButtonContainer } from "./styled";
//icons
import Play from "../../assets/play.svg";
import PlayBack from "../../assets/play-back.svg";
import Skip from "../../assets/play-forward.svg";
import { IoMdPause } from "react-icons/io";

const Button = (props) => {
  const [isTouched, setIsTouched] = useState(false);

  const touchedHandler = () => {
    setIsTouched(!isTouched);
    props.touchChecked();
  };

  return (
    <ButtonContainer>
      <img src={PlayBack} />

      {!isTouched && <img src={Play} onClick={touchedHandler} />}
      {isTouched && isTouched && (
        <IoMdPause
          onClick={touchedHandler}
          style={{
            width: "28.81px",
            height: " 28.81px",
            cursor: "pointer",
            color: "white",
          }}
        />
      )}

      <img src={Skip} />
    </ButtonContainer>
  );
};

export default Button;
