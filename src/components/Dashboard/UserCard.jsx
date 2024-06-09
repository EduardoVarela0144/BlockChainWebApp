import React from 'react';
import { Card } from 'antd';
import DeleteModal from "@components/Dashboard/DeleteModal";
import EditButton from "@components/Dashboard/EditButton";

const UserCard = ({ user, refetch }) => {
  const { id, name, lastname, email, Role, status, birthDate } = user;

  return (
    <Card title={`${name} ${lastname}`} className='' >
      <p><strong>Email:</strong> {email}</p>
      <div className='flex flex-row items-center space-x-4 py-4'>
      <EditButton id={id} />
      <DeleteModal name={user?.firstName} refetch={refetch} id={id} />
      </div>
    </Card>
  );
};

export default UserCard;
