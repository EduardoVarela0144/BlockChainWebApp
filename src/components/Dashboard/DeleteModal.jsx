import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useDeleteUser } from "@hooks/Users/useDeleteUser";

export default function DeleteModal({ name, refetch, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { deleteUser } = useDeleteUser();


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    await deleteUser(id)
    refetch()
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button type="primary" danger onClick={showModal}>
        Eliminar
      </Button>
      <Modal
        title={`Eliminar usuario ${name}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Confirmar"
        cancelText="Cancelar"
        okButtonProps={{
          style: { backgroundColor: "red", borderColor: "red" },
        }}
        cancelButtonProps={{ style: { borderColor: "black" } }}
      >
        <p>¿Estás seguro que deseas eliminar al usuario {name} ?</p>
      </Modal>
    </div>
  );
}
