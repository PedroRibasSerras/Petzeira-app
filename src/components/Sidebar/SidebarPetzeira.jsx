import { Sidebar } from 'react-pro-sidebar';
import { sidebarClasses, useProSidebar} from 'react-pro-sidebar';
import MenuPetzeira from './Menu/MenuPetzeira';

function SidebarPetzeira() {
  const { toggled } = useProSidebar();
  
  return (
    <Sidebar
            breakPoint="sm"
            transitionDuration={800}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "#DDB00C",
          color: "rgb(33, 33, 33)",
          borderRight: toggled? "solid 1px #DDB00C": "solid 1px rgb(33, 33, 33)",
          marginRight:  "-1px",
          height: "100%",
        },
      }}
    >
      <MenuPetzeira />
    </Sidebar>
  );
}

export default SidebarPetzeira;
