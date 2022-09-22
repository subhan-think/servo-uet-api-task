import { styled, Typography, Button } from "@mui/material";

const HomeWrapperStyled = styled("div")(({ theme, ...props }) => ({
  width: "100%",
  backgroundImage: `url(https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80)`,
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const MainHeadingStyled = styled(Typography)(({ theme, ...props }) => ({
  color: "white",
}));

const MainButtonStyled = styled(Button)(({ theme, ...props }) => ({
  color: "white",
}));

export { HomeWrapperStyled, MainButtonStyled, MainHeadingStyled };
// rgba(0, 0, 0, 0.1) 0px 1px 4px 0px
// rgba(0, 0, 0, 0.15) 0px 2px 8px 0px
