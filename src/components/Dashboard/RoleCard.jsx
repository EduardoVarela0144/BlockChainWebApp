import React from "react";
import { Card } from "antd";
import moment from "moment";

const UserCard = ({ role }) => {
  const { id, name, description, createdAt } = role;

  return <Card title={`${name}`}>
    <p><strong>Id:</strong> {id}</p>
    <p><strong>Descripción:</strong> {description}</p>
    <p><strong>Fecha de creación:</strong> {moment(createdAt).format("DD/MM/YYYY")}</p>
  </Card>;
};

export default UserCard;
