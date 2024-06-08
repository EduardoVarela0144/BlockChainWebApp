import React, { useContext, useEffect } from "react";
import { AuthContext } from "@context/AuthContext";
import { Layout, Menu, Row, Col, Typography, Card, Divider } from "antd";
import { Link } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import CardsStats from "@components/Welcome/CardsStats";
import { tasks, statsData } from "@mocks/mocksData";

export default function Welcome() {
  const { Content, Header } = Layout;
  const { Auth } = useContext(AuthContext);
  const { Text } = Typography;
  useEffect(() => {
    document.title = "Welcome";
  }, []);

  
  return (
    <Layout className="flex-1 flex h-screen">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="2">
            <span className="text-left text-KarimNot text-xs md:text-xl font-bold">
              Bienvenido, {Auth?.user?.firstName} {Auth?.user?.lastName}{" "}
              {Auth?.user?.middleName}
            </span>
          </Menu.Item>
          <Menu.Item key="3" icon={<LogoutOutlined />}>
            <Link to="/Logout">Logout</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="bg-slate-200 h-full flex flex-col items-start justify-start px-8 py-4 space-y-8 overflow-auto">
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={16}>
            <Row gutter={[16, 16]}>
              {statsData.map((stat) => (
                <Col key={stat.id} xs={24} sm={12} lg={8}>
                  <CardsStats
                    title={stat.title}
                    percent={stat.percent}
                    color={stat.color}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={24} lg={8} >
            {tasks.map((task) => (
              <Col span={24} key={task.id}>
                <Card className="mb-4">
                  <Text strong>{task.title}</Text>
                  <Divider />
                  <Text type="secondary">Estado: {task.status}</Text>
                </Card>
              </Col>
            ))}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
