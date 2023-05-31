import { Outlet } from "react-router-dom";
import { useProSidebar} from 'react-pro-sidebar';
import {useEffect} from 'react'
import SidebarPetzeira from "../Sidebar/SidebarPetzeira.jsx";
import { LayoutWrapper } from "./layout.css.js"

import MenuToggle from '../MenuToggle/MenuToggle'

function Layout() {
  const { toggled, collapseSidebar} = useProSidebar();

  useEffect(() => {
      if(!toggled){
        collapseSidebar(true)
      }
      else{
        collapseSidebar(false)
      }
  },[toggled, collapseSidebar]);
  
  return (
    <LayoutWrapper>
      <SidebarPetzeira />
      <MenuToggle/>
      <Outlet />
    </LayoutWrapper>
  );
}

export default Layout;
