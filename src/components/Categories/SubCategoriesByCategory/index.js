import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL, getObjectFetch } from "../../../api";
import BasicCard from "../../Common/Card";

const CategorieAndSubCategories = () => {
  const { categorie_id } = useParams();
  const [categoryData, setCategoryData] = useState(false);
  const [subCategory, setSubCategory] = useState(false);

  useEffect(() => {
    let fetchAllCategories = async () => {
      let fetchCategories = await fetch(
        `${API_BASE_URL}category/allCategories`,
        getObjectFetch
      ).then((res) => res.json());

      let findTODisplay = await fetchCategories.doc.find(
        (item) => item._id === categorie_id
      );
      findTODisplay = findTODisplay === undefined ? false : findTODisplay;

      setCategoryData(findTODisplay);
      let fetchSubCategory = await fetch(
        `${API_BASE_URL}category/getSubcategories/?category=${categorie_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            category: categorie_id,
          }),
        }
      ).then((res) => res.json());
      if (fetchSubCategory.doc) {
        fetchSubCategory.doc.length === 0
          ? setSubCategory(false)
          : setSubCategory(fetchSubCategory);
        console.log(findTODisplay, fetchSubCategory);
      }
    };

    fetchAllCategories();
  }, [categorie_id]);

  console.log(subCategory);

  return (
    <div style={{ marginTop: "4rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "4rem",
        }}
      >
        {categoryData ? (
          <BasicCard details={categoryData} makeLink={false}></BasicCard>
        ) : (
          <div>data is not found</div>
        )}
      </div>

      {subCategory ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {subCategory.doc.map((item, index) => {
            return (
              <BasicCard
                details={item}
                makeLink={true}
                key={index}
                id={categoryData._id}
              />
            );
          })}
        </div>
      ) : (
        <div> No sub categories were found </div>
      )}
    </div>
  );
};

export default CategorieAndSubCategories;
