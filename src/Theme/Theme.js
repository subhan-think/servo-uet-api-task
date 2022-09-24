import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff3f55",
    },
    secondary: {
      main: "#0040a2",
    },
    common: {
      white: "#fff",
      black: "#000",
    },
    text: {
      primary: "#2c2c2c",
      secondary: "#424242",
    },
    shades: {
      grey: {
        light: "rgb(247,247,247)",
        semiLight: "#ddd",
      },
    },
  },
  typography: {
    h1: {
      fontSize: "6rem",
      fontWeight: 700,
      lineHeight: "6rem",
    },
    h2: {
      fontWeight: 600,

      fontSize: "4.5rem",
      lineHeight: "5.6rem",
    },
    h3: {
      fontWeight: 600,

      fontSize: "2.4rem",
      lineHeight: "5.6rem",
    },
    h4: {
      fontWeight: 600,

      fontSize: "2rem",
    },
    p: {
      fontSize: "1.4rem",
      lineHeight: "1.8rem",
      fontWeight: 400,
    },
    // subtitle1: {
    //   fontSize: "2rem",
    //   fontWeight: 500,
    // },
    subtitle1: {
      fontSize: "1.2rem",
      lineHeight: "1.6rem",
      fontWeight: 400,
    },
    fontFamily: "poppins",
  },
});
//Setting responsive font for h1

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down("md")]: {
    fontSize: "5.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "4rem",
    lineHeight: "4.5rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "3rem",
    lineHeight: "3.3rem",
  },
};
//Setting responsive font for subtitile 1
theme.typography.subtitle1 = {
  ...theme.typography.subtitle1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.2rem",
  },
};
//Setting responsive font for h2
theme.typography.h2 = {
  ...theme.typography.h2,
  // fontWeight: 600,
  // fontSize: "4.5rem",
  // lineHeight: "5.6rem"
  [theme.breakpoints.down("md")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
    lineHeight: "3.6rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "2.4rem",
    lineHeight: "3.1rem",
  },
};

//Setting resposive font for h3
theme.typography.h3 = {
  ...theme.typography.h3,
  // fontWeight: 600,
  // fontSize: "4.5rem",
  // lineHeight: "5.6rem"
  [theme.breakpoints.down("md")]: {
    fontSize: "2.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.8rem",
  },
};
//Setting responsive font for h4
theme.typography.h4 = {
  ...theme.typography.h4,
  // fontWeight: 600,
  // fontSize: "4.5rem",
  // lineHeight: "5.6rem"
  [theme.breakpoints.down("md")]: {
    fontSize: "1.9rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.6rem",
  },
};

//Setting responsive font for p
theme.typography.p = {
  ...theme.typography.p,
  // fontWeight: 400,
  // fontSize: "1.6rem",
  // lineHeight: "2.6rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.down("sm")]: {
    // lineHeight: "2.3rem",
    fontSize: "1.35rem",
  },
  [theme.breakpoints.down("xs")]: {
    // lineHeight: "2rem",
    fontSize: "1.1rem",
  },
};

//Setting responsive font for subtitle1
theme.typography.subtitle1 = {
  ...theme.typography.subtitle1,
  // fontWeight: 400,
  // fontSize: "1.6rem",
  // lineHeight: "2.6rem",

  [theme.breakpoints.down("sm")]: {
    // lineHeight: "2.3rem",
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("xs")]: {
    // lineHeight: "2rem",
    fontSize: "1rem",
  },
};
