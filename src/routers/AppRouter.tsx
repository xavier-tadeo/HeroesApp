import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../components/Login/Login";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
