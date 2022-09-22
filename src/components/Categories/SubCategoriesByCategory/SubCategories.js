import React from "react";
import { useParams } from "react-router-dom";

function SubCategories() {
  const { categorie_id } = useParams();
  console.log(categorie_id);
  return <div>SubCategories</div>;
}

export default SubCategories;
