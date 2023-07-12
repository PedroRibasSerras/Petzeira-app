import { Link } from "react-router-dom";
import { MenuItem } from 'react-pro-sidebar';
import { useProSidebar} from 'react-pro-sidebar';
import { TextAlignerBox } from '../../../../utils.css'

import { FaBalanceScaleLeft } from 'react-icons/fa';

function CalibreButton() {
  const { toggled } = useProSidebar();
  
  return (
  <MenuItem component={<Link to="/calibre" />}>
    <TextAlignerBox>
    <FaBalanceScaleLeft color="rgb(33, 33, 33)" size={40}></FaBalanceScaleLeft>
      {toggled && <span>Calibre</span>}
    </TextAlignerBox>
  </MenuItem>
  );
}

export default CalibreButton;
