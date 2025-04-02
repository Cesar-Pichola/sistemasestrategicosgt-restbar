import { Outlet } from "react-router-dom";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";
import logo from "../../assets/img/logo-sistema.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div style={{ display: "flex", height: "100vh", minHeight: "400px" }}>
      <Sidebar 
      collapsed={collapsed} transitionDuration={200}
      style={{
        padding: collapsed? "1px" : "5px"
      }}
      >
      <div className="flex justify-center items-center ">
            <img
              src={logo}
              alt="Logo"
              style={{
                width: collapsed ? "80px" : "250px",
                transition: "width 0.3s, height 0.3s",
                margin:'0px 10px'
              }}
            />
          </div>

          
          <Menu
            menuItemStyles={{
              button: ({ active }) => ({
                backgroundColor: active ? "#DEE3FF" : "transparent",
              
                color: active ? "#007BFF" : "#333",
                fontSize: "13px",
                borderRadius: collapsed? "15px" : "30px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#007BFF",
                  color: "white",
                  borderRadius: collapsed? "15px" : "30px",
                },
              }),
            }}
          >
            <MenuItem icon={<CiUser />}>Mesas</MenuItem>
            <MenuItem icon={<CiUser />}>Ventas Mostrador</MenuItem>
            <MenuItem icon={<CiUser />}>Caja</MenuItem>
            <SubMenu label="Menus" icon={<CiUser />}>
              <MenuItem> Menus</MenuItem>
              <MenuItem> Complementos</MenuItem>
              <MenuItem> Guarniciones</MenuItem>
              <MenuItem> Extras</MenuItem>
            </SubMenu>
            <MenuItem active icon={<FaUsers />}>Clientes</MenuItem>
          </Menu>
          
        </Sidebar>
        <main className="h-screen w-full flex flex-col">
    
    {/* Barra superior */}
    <div className="h-10 flex items-center bg-[#155DFC]">
      <GiHamburgerMenu
        className="text-[18px] text-white cursor-pointer"
        style={{ margin: "0px 10px" }}
        onClick={() => setCollapsed(!collapsed)}
      />
    </div>

    <div className="flex-1 overflow-auto">
      <Outlet />
    </div>

    <div className="h-6 bg-white  flex justify-end mr-4">
  <p className="text-[12px] flex content-center">RestBar - Copyright © 2025</p>
</div>
  </main>

      </div>
    </>
  );
}

export default Layout;
