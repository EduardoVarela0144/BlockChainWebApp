import { Space } from "antd";
import DeleteModal from "@components/Dashboard/DeleteModal";
import EditButton from "@components/Dashboard/EditButton";

export const ColumnsTableUsers = (handleRefetch) => [
  {
    title: "Id",
    dataIndex: "_id",
  },
  {
    title: "Nombre",
    dataIndex: ["_source", "name"],
  },
  {
    title: "Apellidos",
    dataIndex: ["_source", "lastname"],
  },
  {
    title: "Correo electrónico",
    dataIndex: ["_source", "email"],
  },
  {
    title: "Acciones",
    dataIndex: "",
    render: (_, record) => (
      <Space size="middle">
        <EditButton id={record?._id} />
        <DeleteModal name={record?._source?.name} id={record?.id} refetch={handleRefetch} />
      </Space>
    ),
  },
];
