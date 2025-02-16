import { createTheme } from "@mui/material";
import { esES } from "@mui/material/locale";
import shadows from "./shadows";
import { light } from "./palette-blue";
import { grey, pink } from "@mui/material/colors";

export const theme = createTheme(
  {
    palette: {
      primaryDark: {
        main: "#0041a0",
        contrastText: "#fff",
      },
    },
    //shadows: shadows("light"),
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: shadows("light")[2],
            //border: "1px solid #e0e0e0",
            borderRadius: 12,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 14,
            textTransform: "none",
            //padding: "8px 16px",

            "&:hover": {
              boxShadow: "none",
            },
            "&:active": {
              boxShadow: "none",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 8,
            },
            "& .MuiInputBase-input": {
              borderRadius: 8,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: 8,
            },
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          paper: {
            boxShadow: shadows("light")[2],
            border: "1px solid #e0e0e0",
            borderRadius: 6,
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            borderRadius: 6,
          },
        },
      },
    },

    typography: {
      button: {
        fontWeight: 600,
      },
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.57,
      },
      subtitle1: {
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: 1.75,
      },
      subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1.57,
      },
      overline: {
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.5px",
        lineHeight: 2.5,
        textTransform: "uppercase",
      },
      caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
        lineHeight: 1.66,
      },
      h1: {
        fontWeight: 700,
        fontSize: "3.5rem",
        lineHeight: 1.375,
      },
      h2: {
        fontWeight: 700,
        fontSize: "3rem",
        lineHeight: 1.375,
      },
      h3: {
        fontWeight: 700,
        fontSize: "2.25rem",
        lineHeight: 1.375,
      },
      h4: {
        fontWeight: 700,
        fontSize: "2rem",
        lineHeight: 1.375,
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: 1.375,
      },
      h6: {
        fontWeight: 600,
        fontSize: "1.125rem",
        lineHeight: 1.375,
      },
    },
  },
  esES
);

export const getTheme = createTheme(
  {
    palette: light,
    layout: {
      contentWidth: 1236,
    },
    shadows: shadows("light"),
    typography: {
      fontFamily: '"Inter", sans-serif',
      button: {
        textTransform: "none",
        fontWeight: "medium",
      },
    },
    zIndex: {
      appBar: 1200,
      drawer: 1300,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            "&.MuiButton-contained": {
              backgroundColor: pink[300],
              "&:hover": {
                boxShadow: "none",
                backgroundColor: pink[400],
              },
            },
            "&.MuiButton-outlined": {
              backgroundColor: "transparent",
              borderColor: pink[300],
              color: pink[400],
              "&:hover": {
                backgroundColor: pink[50],
                borderColor: pink[400],
              },
            },
            "&.Mui-disabled": {
              backgroundColor: grey[200],
              borderColor: grey[300],
            },
            // "&.MuiButton-text": {
            //   color: pink[400],
            //   "&:hover": {
            //     backgroundColor: pink[50],
            //   },
            // },
            "&:active": {
              boxShadow: "none",
            },
          },
          label: {
            fontWeight: 600,
          },
          containedSecondary: "white",
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: shadows("light"),
            borderRadius: 12,
          },
        },
      },
    },
  },
  esES
);
