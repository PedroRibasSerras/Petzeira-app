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
      <MenuItem component={<Link to="/Tirar Foto" />}> Tirar Foto </MenuItem>
      <MenuItem component={<Link to="/Agendar" />}> Agendar </MenuItem>
      <MenuItem component={<Link to="/Histórico" />}> Histórico </MenuItem>
    </SubMenu>
  );
}

export default PhotoToggle;
