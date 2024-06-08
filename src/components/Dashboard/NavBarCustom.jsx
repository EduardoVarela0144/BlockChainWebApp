import React from "react";
import { Layout, Menu } from "antd";

export default function NavBarCustom({ items, getSelectedKey }) {
  const { Header } = Layout;

  return (
    <Header className="flex md:hidden">
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[getSelectedKey()]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
}
