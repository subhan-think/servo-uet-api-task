import { styled } from "@mui/material";

const ContentContainer = styled("div")(({ theme, ...props }) => ({
  maxWidth: props.widthc ? "1220px" : "1280px",

  paddingLeft: "0.4rem",
  paddingRight: "0.4rem",
  margin: "0 auto",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "4rem",
    paddingRight: "4rem",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "3rem",
    paddingRight: "3rem",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
}));
export { ContentContainer };
// rgba(0, 0, 0, 0.1) 0px 1px 4px 0px
// rgba(0, 0, 0, 0.15) 0px 2px 8px 0px
