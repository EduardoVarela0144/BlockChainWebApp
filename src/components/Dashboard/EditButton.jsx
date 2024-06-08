import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export default function EditButton({id}) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(`/Dashboard/Users/${id}`)}
      style={{ backgroundColor: "#008FD1" }}
      type="primary"
    >
      Editar
    </Button>
  );
}
