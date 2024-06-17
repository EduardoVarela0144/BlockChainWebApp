import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { Button } from "antd";
import CustomCarousel from "@components/General/CustomCarousel";
import UserForm from "@components/Forms/UserForm";
import Logo from "@assets/images/Logo.jpg";
import { ArrowLeftOutlined } from "@ant-design/icons";
import AnimationLayout from "@components/General/AnimationLayout";

export default function Register() {

  useEffect(() => {
    document.title = "Registro";
  }, []);

  return (
    // <AnimationLayout>
    <div className="flex h-screen ">
      <div className="absolute top-4 left-6 z-[100]flex-row space-x-4 hidden md:flex">
        <Button
          type="primary"
          className="bg-BC "
          shape="circle"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate("/")}
        />
        <img src={Logo} className="h-8 w-auto" />
      </div>
      <Row className="w-full h-full">
        <Col
          xs={{ span: 0 }}
          sm={{ span: 0 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >
          <CustomCarousel />
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          className="flex flex-col items-center justify-center p-4  md:px-16 md:pt-6"
        >
          <UserForm />
        </Col>
      </Row>
    </div>
    // </AnimationLayout>
  );
}
