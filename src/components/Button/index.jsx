import { ButtonContainer } from "./styled";
//icons
import Play from "../../assets/play.svg";
import PlayBack from "../../assets/play-back.svg";
import Skip from "../../assets/play-forward.svg";

const Button = () => {
  return (
    <ButtonContainer>
      <img src={PlayBack} />

      <img src={Play} />

      <img src={Skip} />
    </ButtonContainer>
  );
};

export default Button;
