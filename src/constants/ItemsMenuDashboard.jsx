
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  PoweroffOutlined,
  SearchOutlined
} from "@ant-design/icons";

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}


export const ItemsMenuDashboard = [
  getItem(<Link to="/Dashboard">Inicio</Link>, "1", <HomeOutlined />),
  getItem(<Link to="Users">Usuarios</Link>, "2", <UserOutlined />),
  getItem(<Link to="Search">Búsqueda</Link>, "3", <SearchOutlined/>),
  getItem(<Link to="/Logout">Cerrar sesión</Link>, "4", <PoweroffOutlined />),
];
