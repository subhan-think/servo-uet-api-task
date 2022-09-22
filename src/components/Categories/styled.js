import { styled, Typography } from "@mui/material";

const ListingSection = styled("section")(({ theme }) => ({
  marginTop: "3rem",
}));

const MainHeadingStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  textAlign: "left",
  lineHeight: 1,
  marginBottom: "3rem",
}));

const CardWrapperStyled = styled("a")(({ theme }) => ({
  display: "block",
  width: "100%",
  textDecoration: "none",
}));

const CardStyled = styled("div")(({ theme }) => ({
  borderRadius: "0.4rem",
  border: "1px solid #e0e0e0",
  paddingTop: "0.6rem",
}));
const CardImageContainerStyled = styled("div")(({ theme }) => ({
  width: "100%",
  overflow: "hidden",
  padding: "0.4rem",
  height: "16rem",
  display: "flex",
  justifyContent: "center",
}));
const CardImageStyled = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "100%",
}));
const CardInfoSectionStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "0.8rem 1.6rem",
}));

const LocationNTimeWrapperStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

const PriceStyled = styled(Typography)(({ theme }) => ({
  color: "grey",
}));
const LocationNTimeTextStyled = styled(Typography)(({ theme }) => ({
  color: "lightgray",
  fontWeight: 300,
  fontSize: "1rem",
}));
const ListingDetailTextStyled = styled(Typography)(({ theme, ...props }) => ({
  color: "lightgray",

  marginTop: "0.5rem",
  marginBottom: "0.4rem",
}));

export {
  ListingSection,
  MainHeadingStyled,
  CardStyled,
  CardImageStyled,
  PriceStyled,
  ListingDetailTextStyled,
  LocationNTimeTextStyled,
  LocationNTimeWrapperStyled,
  CardImageContainerStyled,
  CardInfoSectionStyled,
  CardWrapperStyled,
};
