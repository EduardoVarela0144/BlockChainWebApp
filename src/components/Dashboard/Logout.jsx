import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@context/AuthContext";
import Loader from "@components/General/Loader";
export default function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const logout = () => {
    navigate("/");
    setAuth(null);
  };

  useEffect(() => {
    logout();
  }, []);

  return <Loader />;
}
