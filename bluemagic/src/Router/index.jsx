import React from "react";
import HomePage from "../Components/Pages/HomePage";
import DetailsPage from "../Components/Pages/DetailsPage";
import AddFormPage from "../Components/Pages/AddFormPage";
import { Route, Routes, Navigate } from "react-router-dom";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="DetailsPage/:travelId" element={<DetailsPage />} />
          <Route path="AddFomrPage/" element={<AddFormPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
