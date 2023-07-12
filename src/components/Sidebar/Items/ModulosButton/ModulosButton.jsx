import { Link } from "react-router-dom";
import { MenuItem } from 'react-pro-sidebar';
import { useProSidebar} from 'react-pro-sidebar';
import { TextAlignerBox } from '../../../../utils.css'

import { FaBuromobelexperte } from 'react-icons/fa';

function ModulosButton() {
  const { toggled } = useProSidebar();
  
  return (
  <MenuItem component={<Link to="/modulos" />}>
    <TextAlignerBox>
    <FaBuromobelexperte color="rgb(33, 33, 33)" size={40}></FaBuromobelexperte>
      {toggled && <span>Modulos</span>}
    </TextAlignerBox>
  </MenuItem>
  );
}

export default ModulosButton;
