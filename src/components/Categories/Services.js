import React from "react";
import { useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function Services() {
  const { categorie_id, services_id } = useParams();
  console.log(categorie_id, services_id, useParams());

  return (
    <Routes>
      <Route path="/" element={<div>Services</div>} />
      <Route path=":services_id" element={<div>on any id</div>} />
    </Routes>
  );
}

export default Services;
