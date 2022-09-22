import React from "react";
import { Routes, Route } from "react-router-dom";
import AllCategories from "./AllCategories";
import SubCategories from "./SubCategoriesByCategory/index";

const Categories = () => {
  return (
    <Routes>
      <Route path="/" element={<AllCategories />} />
      <Route path="/allcategories" element={<AllCategories />} />

      <Route path=":categorie_id" element={<SubCategories />} />
      <Route
        path="*"
        element={<div>Not Found What you were looking for</div>}
      />
    </Routes>
  );
};

export default Categories;
