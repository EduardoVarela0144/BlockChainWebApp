import { useQuery } from "react-query";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import Loader from "@components/General/Loader";
import { useLocation } from "react-router-dom";

export default function PrivateRouter({ Component }) {
  const { Auth } = useContext(AuthContext);
  const { isLoading } = useQuery("auth", () => Auth);
  const location = useLocation();
  const currentURL = location.pathname;
  const allowedRoutes = ["/", "/Register", "/register"];


  if (isLoading) {
    return <Loader />;
  } else {
    if (Auth !== null && Auth !== undefined) {
      if (allowedRoutes.includes(currentURL)) {
        if (Auth?.user?.roleId != 1) {
          return <Navigate to="/Dashboard" />;
        } else {
          return <Navigate to="/Dashboard" />;
        }
      } 
      return <Component />;

    } else {
      if (allowedRoutes.includes(currentURL)) {
        return <Component />;
      } else {
        return <Navigate to="/" />;
      }
    }
  }
}
