import React from 'react'
import { Routes, Route } from "react-router-dom";
import DashboardMain from "@pages/DashboardMain";
import SemanticSearchArticles from '@pages/SemanticSearchArticles';
import DashboardUsers from "@pages/DashboardUsers";
import AddUser from "@pages/AddUser";
import EditUser from "@pages/EditUser";
import SeeArticle from '@pages/SeeArticle';
import Example from '@pages/Example';
import Students from '@pages/Students';
import AddStudent from '@pages/AddStudent';
export default function DashboardRouter() {
  return (
    <Routes>
    <Route index element={<DashboardMain />} />
    <Route path="/Users" element={<DashboardUsers />} />
    <Route path="/Search" element={<SemanticSearchArticles />} />
    <Route path="/AddUser" element={<AddUser />} />
    <Route path="/Example" element={<Example />} />
    <Route path="/Students" element={<Students />} />
    <Route path="/Users/:id" element={<EditUser />} />
    <Route path="AddStudent" element={<AddStudent />} />
    <Route path="/Search/:id" element={<SeeArticle />} />

  </Routes>
  )
}
