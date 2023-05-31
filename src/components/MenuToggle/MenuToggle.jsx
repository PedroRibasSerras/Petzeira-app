import { MenuToggleButton } from './menuToggle.css';
import { FaBars } from 'react-icons/fa'
import {useProSidebar} from 'react-pro-sidebar';

const MENU_BUTTON_SIZE = 24

function MenuToggle({color}) {
  const { toggleSidebar} = useProSidebar();
  return (
        <MenuToggleButton color={color || 'rgb(221, 176, 12)'} size={MENU_BUTTON_SIZE/8} onClick={() =>{ 
          toggleSidebar()
        }}>
          <FaBars size={MENU_BUTTON_SIZE} color={ color || 'rgb(221, 176, 12)'} />
        </MenuToggleButton>
  );
}

export default MenuToggle;
