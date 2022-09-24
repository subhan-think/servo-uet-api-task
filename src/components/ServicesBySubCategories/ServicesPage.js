import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddServices from "./AddServices";

function ServicesPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.2rem",
        marginTop: "3rem",
      }}
    >
      <Button variant="contained">
        <Link
          to={"/categories/allCategories"}
          style={{ textDecoration: "none", color: "white" }}
        >
          {" "}
          Select Categories first{" "}
        </Link>
      </Button>

      <AddServices />
    </div>
  );
}

export default ServicesPage;
