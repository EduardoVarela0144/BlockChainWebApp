import { Space } from "antd";
import DeleteModal from "@components/Dashboard/DeleteModal";
import EditButton from "@components/Dashboard/EditButton";
import moment from "moment";
import CustomToggle from "@components/Dashboard/CustomToggle";


export const ColumnsTableUsers = (handleRefetch) => [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Nombre",
    dataIndex: "firstName",
  },
  {
    title: "Apellido paterno",
    dataIndex: "lastName",
  },
  {
    title: "Apellido Materno",
    dataIndex: "middleName",
  },
  {
    title: "Correo electrónico",
    dataIndex: "email",
  },
  {
    title: "Número de teléfono",
    dataIndex: "phoneNumber",
  },
  {
    title: "Fecha de cumpleaños",
    dataIndex: "birthDate",
    render: (date) => moment(date).format("DD/MM/YYYY"),
  },
  {
    title: "Rol",
    dataIndex: "Role",
    render: (role) => role?.name || "Sin rol",
  },
  {
    title: "Estatus",
    dataIndex: "",
    render: (_, record) => (
      <CustomToggle id={record?.id} refetch={handleRefetch} status={record?.status} />
    ),
  },
  {
    title: "Fecha de creación",
    dataIndex: "createdAt",
    render: (date) => moment(date).format("DD/MM/YYYY"),
  },
  {
    title: "Acciones",
    dataIndex: "",
    render: (_, record) => (
      <Space size="middle">
        <EditButton id={record?.id} />
        <DeleteModal name={record?.firstName} id={record?.id} refetch={handleRefetch} />
      </Space>
    ),
  },
];
