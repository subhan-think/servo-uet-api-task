import React, { useEffect, useState } from "react";
import {
  ListingSection as SectionListing,
  MainHeadingStyled,
  CardStyled,
  CardImageStyled,
  ListingDetailTextStyled,
  CardImageContainerStyled,
  CardInfoSectionStyled,
} from "./styled";
import { Grid } from "@mui/material";
import ContentContainer from "../Common/ContentContainer/index";
import { API_BASE_URL, getObjectFetch } from "../../api";
import { Link } from "react-router-dom";

function AllCategories() {
  const [allCategoriesData, setAllCategoriesData] = useState(false);
  useEffect(() => {
    let fetchAllCategories = async () => {
      let fetchCategories = await fetch(
        `${API_BASE_URL}category/allCategories`,
        getObjectFetch
      ).then((res) => res.json());
      setAllCategoriesData(fetchCategories);

      console.log(fetchCategories);
    };

    fetchAllCategories();
  }, []);

  return (
    <SectionListing>
      <ContentContainer>
        <MainHeadingStyled variant="h3">All Categories</MainHeadingStyled>
        {allCategoriesData ? (
          <Grid container spacing={3}>
            {allCategoriesData.doc.map((item, index) => {
              return (
                <Grid item lg={3} md={6} xl={3} sm={6} xs={12} key={index}>
                  <Link
                    to={`/categories/${item._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardStyled>
                      <CardImageContainerStyled>
                        <CardImageStyled
                          src={`https://84f2-45-140-185-103.eu.ngrok.io/api/getfile${item.image}`}
                        />
                      </CardImageContainerStyled>
                      <CardInfoSectionStyled>
                        <ListingDetailTextStyled variant="p">
                          {item.name}
                        </ListingDetailTextStyled>
                      </CardInfoSectionStyled>
                    </CardStyled>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <>...loading</>
        )}
      </ContentContainer>
    </SectionListing>
  );
}

export default AllCategories;
