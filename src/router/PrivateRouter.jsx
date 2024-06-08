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

  // Loading Auth
  if (isLoading) {
    return <Loader />;
  } else {
    // If loading is finish and user is autenticated
    if (Auth !== null && Auth !== undefined) {
      // If user is autenticated and try to use login or register
      if (allowedRoutes.includes(currentURL)) {
        if (Auth?.user?.roleId != 1) {
          return <Navigate to="/Welcome" />;
        } else {
          return <Navigate to="/Dashboard" />;
        }
      } // If user autenticated try to use Dashboard
      else if (
        currentURL.toLowerCase().includes("dashboard") &&
        Auth?.user?.roleId != 1
      ) {
        return <Navigate to="/403" />;
      } else {
        // In other case show component

        if (Auth?.user?.status) {
          return <Component />;
        } else {
          return <Navigate to="/Pending" />;
        }
      }
    } else {
      // If user is not autenticated and try to use Login or register
      if (allowedRoutes.includes(currentURL)) {
        return <Component />;
      } else {
        // If user is not autenticated and try to use protected routes
        return <Navigate to="/" />;
      }
    }
  }
}
