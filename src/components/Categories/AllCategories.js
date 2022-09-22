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
                          src={
                            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          }
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
