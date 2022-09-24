import React from "react";
import { Routes, Route } from "react-router-dom";
import DisplayServices from "./DisplayServices";
import ServicesPage from "./ServicesPage";

function ServiceBySubCategories() {
  return (
    <Routes>
      <Route path="/" element={<ServicesPage />} />
      <Route path=":category_id/:service_id" element={<DisplayServices />} />
      <Route
        path="*"
        element={<div>Not Found What you were looking for</div>}
      />
    </Routes>
  );
}

export default ServiceBySubCategories;
