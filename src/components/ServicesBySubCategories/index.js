import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "@mui/material";
import DisplayServices from "./DisplayServices";

function ServiceBySubCategories() {
  return (
    <Routes>
      <Route path="/" element={<BackToCategories />} />
      <Route path=":category_id/:service_id" element={<DisplayServices />} />
      <Route
        path="*"
        element={<div>Not Found What you were looking for</div>}
      />
    </Routes>
  );
}

function BackToCategories() {
  return (
    <Button variant="contained">
      <Link
        to={"/categories/allCategories"}
        style={{ textDecoration: "none", color: "white" }}
      >
        {" "}
        Select Categories first{" "}
      </Link>
    </Button>
  );
}

export default ServiceBySubCategories;
