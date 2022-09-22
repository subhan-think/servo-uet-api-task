import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL, getObjectFetch } from "../../api";
import BasicCard from "../Common/Card";

function DisplayServices() {
  const { service_id, category_id } = useParams();
  console.log(useParams());
  const [categoryData, setCategoryData] = useState(false);
  const [servicesBySubcategory, setServicesBySubcategory] = useState(false);

  useEffect(() => {
    let fetchAllCategories = async () => {
      let fetchCategories = await fetch(
        `${API_BASE_URL}category/allCategories`,
        getObjectFetch
      ).then((res) => res.json());
      console.log(fetchCategories);

      let findTODisplay = await fetchCategories.doc.find(
        (item) => item._id === category_id
      );
      findTODisplay = findTODisplay === undefined ? false : findTODisplay;
      console.log(findTODisplay);

      setCategoryData(findTODisplay);
      let fetchSubCategory = await fetch(
        `${API_BASE_URL}serviceprovider/listingsBySubcategory1/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            subcategory: service_id,
          }),
        }
      ).then((res) => res.json());
      if (fetchSubCategory.doc) {
        fetchSubCategory.doc.listings.length === 0
          ? setServicesBySubcategory(false)
          : setServicesBySubcategory(fetchSubCategory);
        console.log(fetchSubCategory);
      }
      console.log("this is sub", fetchSubCategory);
    };

    fetchAllCategories();
  }, [category_id, service_id]);

  console.log(categoryData, servicesBySubcategory);
  //   useEffect(() => {
  //     const fetchImage = async () => {
  //       let fetchimg = await fetch(
  //         "https://84f2-45-140-185-103.eu.ngrok.io/?image=f7c07acf57f5e35a63a29f25976a8b3c",
  //         getObjectFetch
  //       ).then((res) => JSON.stringify(res));
  //       console.log(fetchimg.json());
  //     };
  //     fetchImage();
  //   }, []);

  console.log(categoryData, servicesBySubcategory);

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

      {servicesBySubcategory ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {servicesBySubcategory.doc.listings.map((item, index) => {
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
        <div> No Services were found </div>
      )}
    </div>
  );
}

export default DisplayServices;
