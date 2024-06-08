import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "@pages/Login";
import Register from "@pages/Register";
import NotFound from "@pages/NotFound";
import NotPermissions from "@pages/NotPermissions";
import AccountInReview from "@pages/AccountInReview";
import { AnimatePresence } from "framer-motion";
import DashboardLayout from "@components/Dashboard/DashboardLayout";
import Logout from "@components/Dashboard/Logout";
import PrivateRouter from "@router/PrivateRouter";
import Welcome from "@pages/Welcome";

export default function PageRouter() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<PrivateRouter Component={Login} />} />
            <Route path="/Register" element={<PrivateRouter Component={Register} />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
            <Route path="/403" element={<NotPermissions />} />
            <Route path="/Pending" element={<AccountInReview />} />
            <Route path="/Logout" element={<Logout/>} />
            <Route path="/Dashboard/*" element={ <PrivateRouter Component={DashboardLayout} /> } />
            <Route path="/Welcome" element={ <PrivateRouter Component={Welcome} /> } />

          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}
