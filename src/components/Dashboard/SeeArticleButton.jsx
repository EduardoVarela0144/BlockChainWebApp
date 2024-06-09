import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export default function SeeArticleButton({ id }) {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(`/Dashboard/Search/${id}`)}
      style={{ backgroundColor: "#008FD1" }}
      type="primary"
    >
      Seguir leyendo
    </Button>
  );
}
