import { Menu, Avatar, Layout } from "antd";
import Logo from "@assets/images/Logo.png";
import { AuthContext } from "@context/AuthContext";
import { useContext } from "react";

export default function SiderCustom({
  collapsed,
  toggleCollapsed,
  getSelectedKey,
  items,
}) {
  const { Sider } = Layout;
  const { Auth } = useContext(AuthContext);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      breakpoint="md"
      className="hidden md:inline-block"
      style={{ backgroundColor: "black" }}
    >
      <div
        className={`flex flex-row ${
          collapsed ? "hidden" : "flex flex-col"
        } items-center px-2 py-1`}
      >
        <img src={Logo} className="h-8 w-auto" />
        <span className="font-bold text-white">BlockChain App</span>
      </div>

      <div
        className={`flex flex-col space-y-4 ${
          collapsed ? "py-4" : "py-8"
        } items-center px-2 py-1 justify-center`}
      >
        <Avatar
          style={{
            backgroundColor: "#008FD1",
            fontSize: collapsed ? 20 : 30,
          }}
          size={collapsed ? 30 : 60}
          text="true"
        >
          {Auth?.user?.firstName[0].toUpperCase()}
        </Avatar>
        <span className={`text-white ${collapsed ? "hidden" : "flex"}`}>
          {Auth?.user?.firstName}
        </span>
      </div>

      <Menu
        defaultSelectedKeys={[getSelectedKey()]}
        mode="inline"
        theme="dark"
        items={items}
        style={{ backgroundColor: "black" }}
      />

 
    </Sider>
  );
}
