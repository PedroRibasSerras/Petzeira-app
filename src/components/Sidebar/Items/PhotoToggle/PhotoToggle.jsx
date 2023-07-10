import { Link } from "react-router-dom";
import { MenuItem, SubMenu } from 'react-pro-sidebar';
import { useProSidebar} from 'react-pro-sidebar';
import { TextAlignerBox } from '../../../../utils.css'
import { BsCameraFill } from 'react-icons/bs'

function PhotoToggle() {
  const { toggled } = useProSidebar();
  
  return (
    <SubMenu label={
      <TextAlignerBox style={{ marginLeft: "4px"}}>
        <BsCameraFill color="rgb(33, 33, 33)" size={30} className="logo" />
        {toggled && <span>Foto</span>}
      </TextAlignerBox>
    }>
      <MenuItem component={<Link to="/picture" />}> Tirar Foto </MenuItem>
      <MenuItem component={<Link to="/picture/schedule" />}> Agendar </MenuItem>
      <MenuItem component={<Link to="/picture/historic" />}> Histórico </MenuItem>
    </SubMenu>
  );
}

export default PhotoToggle;
