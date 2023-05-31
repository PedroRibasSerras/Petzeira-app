import { Link } from "react-router-dom";
import { MenuItem } from 'react-pro-sidebar';
import { useProSidebar} from 'react-pro-sidebar';
import { TextAlignerBox } from '../../../../utils.css'
import { LogoButtonText } from './logoButton.css'

import { GiDogBowl } from 'react-icons/gi';

function LogoButton() {
  const { toggled } = useProSidebar();
  
  return (
  <MenuItem component={<Link to="/" />}>
    <TextAlignerBox>
    <GiDogBowl color="rgb(33, 33, 33)" size={40}></GiDogBowl>
      {toggled && <LogoButtonText>Petzeira</LogoButtonText>}
    </TextAlignerBox>
  </MenuItem>
  );
}

export default LogoButton;
