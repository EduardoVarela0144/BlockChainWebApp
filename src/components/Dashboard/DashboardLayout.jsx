import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import SiderCustom from "@components/Dashboard/SiderCustom";
import NavBarCustom from "@components/Dashboard/NavBarCustom";
import { ItemsMenuDashboard } from "@constants/ItemsMenuDashboard";
import DashboardRouter from "../../router/DashboardRouter";

const { Content } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const getSelectedKey = () => {
    const path = location.pathname;
    console.log(path)
    if (path === "/Dashboard") return "1";
    if (
      path === "/Dashboard/Users" ||
      path === "/Dashboard/AddUser" ||
      path === "/dashboard/Users"
    )
      return "2";
    if (path === "/Dashboard/Search") return "3";
    return "1";
  };

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderCustom
        collapsed={collapsed}
        toggleCollapsed={toggleCollapsed}
        getSelectedKey={getSelectedKey}
        items={ItemsMenuDashboard}
      />
      <Layout>
        <Content>
          <NavBarCustom
            items={ItemsMenuDashboard}
            getSelectedKey={getSelectedKey}
          />
          <DashboardRouter />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
