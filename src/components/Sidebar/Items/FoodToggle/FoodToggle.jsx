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
      <MenuItem component={<Link to="/feed" />}> Feed </MenuItem>
      <MenuItem component={<Link to="/feed/schedule" />}> Schedule </MenuItem>
      <MenuItem component={<Link to="/feed/measurements" />}> Measurements </MenuItem>
      <MenuItem component={<Link to="/feed/historic" />}> Historic </MenuItem>
    </SubMenu>
  );
}

export default FoodToggle;
