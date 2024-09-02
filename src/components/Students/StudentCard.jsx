import React from "react";
import { Card } from "antd";

export default function StudentCard({ name, age, grade }) {
  return (
    <Card
      size="small"
      title={`Hola mi nombre es ${name}`}
      style={{
        width: 300,
      }}
    >
      <p>Edad : {age}</p>
      <p>Grado: {grade}</p>
    </Card>
  );
}
