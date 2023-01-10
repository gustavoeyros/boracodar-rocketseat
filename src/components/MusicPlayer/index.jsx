import { Wrapper } from "./styled";
import Logo from "../../assets/musicLogo.svg";
import Description from "../Description";
import Button from "../Button";
import ProgressBar from "../ProgressBar";
const MusicPlayer = () => {
  return (
    <Wrapper>
      <img src={Logo} />
      <Description />
      <Button />
      <ProgressBar />
    </Wrapper>
  );
};

export default MusicPlayer;
