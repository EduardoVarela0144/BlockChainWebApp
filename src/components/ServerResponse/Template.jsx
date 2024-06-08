import React, { useEffect, useContext } from "react";
import Lottie from "react-lottie";
import { Button } from "antd";
import { AuthContext } from "@context/AuthContext";
import Logo from "@assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function Template({ title, lottie, message }) {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    document.title = title;
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const back = () => {
    if (title === "Revisión") {
      setAuth(null);
    }

    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center px-8 md:px-0">
      <div className="absolute top-4 left-6 z-[100] flex flex-row space-x-4 items-center justify-center">
        <Button
          type="primary"
          className="bg-KarimNot"
          shape="circle"
          icon={<ArrowLeftOutlined />}
          onClick={() => back()}
        />
        <span className="text-KarimNot font-bold">Regresar al inicio</span>
      </div>
      <div className="w-auto h-36">
        <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
      </div>
      <div className="w-full flex flex-row items-center justify-center ">
        <img src={Logo} className="h-8 w-auto" />
        <div className="w-0.5 h-full bg-KarimNot mr-4" />
        <span className="text-KarimNot font-bold text-xl text-center">
          {message}
        </span>
      </div>
    </div>
  );
}
