import React from 'react'
import { Routes, Route } from "react-router-dom";
import DashboardMain from "@pages/DashboardMain";
import SemanticSearchArticles from '@pages/SemanticSearchArticles';
import DashboardUsers from "@pages/DashboardUsers";
import AddUser from "@pages/AddUser";
import EditUser from "@pages/EditUser";
import SeeArticle from '@pages/SeeArticle';
import Example from '@pages/Example';

export default function DashboardRouter() {
  return (
    <Routes>
    <Route index element={<DashboardMain />} />
    <Route path="/Users" element={<DashboardUsers />} />
    <Route path="/Search" element={<SemanticSearchArticles />} />
    <Route path="/AddUser" element={<AddUser />} />

    <Route path="/Example" element={<Example />} />

    <Route path="/Users/:id" element={<EditUser />} />
    <Route path="/Search/:id" element={<SeeArticle />} />

  </Routes>
  )
}
