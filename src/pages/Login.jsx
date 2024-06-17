import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import CustomCarousel from "@components/General/CustomCarousel";
import Logo from "@assets/images/Logo.jpg";
import AnimationLayout from "@components/General/AnimationLayout";
import { useLogin } from "@hooks/Users/useLogin";
import ConfigurationModal from "@components/Configuration/ConfigurationModal";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const { login } = useLogin();

  const onFinish = (values) => {
    login(values)
  };

  const [open, setOpen] = React.useState(false);

  return (
    // <AnimationLayout>
      <div className="flex h-screen ">
        <Row className="w-full h-full">
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            xl={{ span: 12 }}
            className="flex items-center justify-center p-4 md:p-16"
          >
            <Form
              name="login-form"
              onFinish={onFinish}
              layout="vertical"
              initialValues={{ remember: true }}
              style={{ width: "100%", margin: "0 auto" }}
            >
              <img src={Logo} className="h-24 w-auto mb-4" />
              <Form.Item
                label="Correo electrónico"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa tu correo electrónico.",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Contraseña"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa tu contraseña.",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button
                  style={{ backgroundColor: "#008FD1" }}
                  type="primary"
                  htmlType="submit"
                  className="w-full my-4"
                >
                  Iniciar sesión
                </Button>
                <Button
                  onClick={() => navigate("/Register")}
                  className="w-full"
                >
                  Registrarse
                </Button>
                <Button
                  onClick={() => setOpen(true)}
                  className="w-full my-4"
                >
                  Cambiar configuración
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col
            xs={{ span: 0 }}
            sm={{ span: 0 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            xl={{ span: 12 }}
          >
            <CustomCarousel />
          </Col>
        </Row>
        <ConfigurationModal open={open} setOpen={setOpen} />
      </div>
    // </AnimationLayout>
  );
}
