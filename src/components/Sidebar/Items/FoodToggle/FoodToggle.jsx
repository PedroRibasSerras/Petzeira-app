import { Link } from "react-router-dom";
import { MenuItem, SubMenu } from 'react-pro-sidebar';
import { useProSidebar} from 'react-pro-sidebar';
import { TextAlignerBox } from '../../../../utils.css'
import { MdNoFood } from 'react-icons/md'

function FoodToggle() {
  const { toggled } = useProSidebar();
  
  return (
    <SubMenu label={
      <TextAlignerBox style={{ marginLeft: "4px"}}>
        <MdNoFood color="rgb(33, 33, 33)" size={30} className="logo" />
        {toggled && <span>Alimentação</span>}
      </TextAlignerBox>
    }>
      <MenuItem component={<Link to="/feed" />}> Alimentar </MenuItem>
      <MenuItem component={<Link to="/feed/schedule" />}> Agendar </MenuItem>
      <MenuItem component={<Link to="/feed/historic" />}> Histórico </MenuItem>
    </SubMenu>
  );
}

export default FoodToggle;
