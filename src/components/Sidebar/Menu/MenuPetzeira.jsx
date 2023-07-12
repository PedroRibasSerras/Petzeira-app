import { Menu } from 'react-pro-sidebar';

import LogoButton from '../Items/LogoButton/LogoButton.jsx'
import AvatarButton from '../Items/AvatarButton/AvatarButton.jsx'
import FoodToogle from '../Items/FoodToggle/FoodToggle.jsx'
import PhotoToogle from '../Items/PhotoToggle/PhotoToggle.jsx'
import ModulosButton from '../Items/ModulosButton/ModulosButton.jsx';
import CalibreButton from '../Items/CalibreButton/CalibreButton.jsx';

let menuItemStyles = {
  button: ({ level, active, disabled }) => {
    // only apply styles on first level elements of the tree

    if (level == 1)
      return {
        backgroundColor: "#d1a60a",
        transition: '0.3s',
      };
    else
      return {
        transition: '0.3s',
      }
  },
}

function MenuPetzeira() {  
  return (
      <Menu menuItemStyles={menuItemStyles}>
        <LogoButton   />
        <AvatarButton />
        <ModulosButton   />
        <CalibreButton />
        <FoodToogle   />
        <PhotoToogle  />
      </Menu>
  );
}

export default MenuPetzeira;
