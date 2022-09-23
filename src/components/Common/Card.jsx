import React from "react";
import { Link } from "react-router-dom";
// * importing mui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

function BasicCard({
  details: { createdDate, name, _id, fName },
  makeLink,
  id,
  imgSrc,
}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia
        component="img"
        height="194"
        image={`https://84f2-45-140-185-103.eu.ngrok.io/api/getfile${imgSrc}`}
        alt="Paella dish"
      />
      <CardContent>
        {/* <div style={{ width: "100%", height: "200px" }}>
            <img
              src={
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              }
              width={"100%"}
              height={"100%"}
              alt="person"
              style={{ aspectRatio: 1 }}
            />
          </div> */}
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {createdDate}
        </Typography>
        <Typography variant="h5" component="div">
          {fName ? fName : name}
        </Typography>
      </CardContent>
      <CardActions>
        {makeLink && (
          <Link
            to={`/services/${id}/${_id}`}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Button size="small"> Learn More</Button>{" "}
          </Link>
        )}
      </CardActions>
    </Card>
  );
}

export default BasicCard;
