import React from 'react';
import { Card, Switch } from 'antd';
import DeleteModal from "@components/Dashboard/DeleteModal";
import EditButton from "@components/Dashboard/EditButton";
import moment from "moment";
import CustomToggle from './CustomToggle';
const UserCard = ({ user, refetch }) => {
  const { id, firstName, lastName, middleName, email, Role, status, birthDate } = user;

  return (
    <Card title={`${firstName} ${lastName} ${middleName}`} className='' >
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Fecha de cumpleaños:</strong>{moment(birthDate).format("DD/MM/YYYY")} </p>
      <p><strong>Rol:</strong> {Role?.name}</p>
      <p><strong>Estado:</strong> {status ? 'Activo' : 'Inactivo'}</p>
      <div className='flex flex-row items-center space-x-4 py-4'>
      <EditButton id={id} />
      <DeleteModal name={user?.firstName} refetch={refetch} id={id} />
      <CustomToggle refetch={refetch} status={user?.status} id={id} />
      </div>
    </Card>
  );
};

export default UserCard;
