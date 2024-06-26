import { Menu, Avatar, Layout } from "antd";
import Logo from "@assets/images/Logo.jpg";
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
          {Auth?.user?.name[0].toUpperCase()}
        </Avatar>
        <span className={`text-white ${collapsed ? "hidden" : "flex"}`}>
          {Auth?.user?.name}
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
