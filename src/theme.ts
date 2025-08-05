// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    background: {
      default: "#F5F9FF",
      paper: "#F5F9FF",
    },

    text: {
      primary: "#212121",
      secondary: "rgba(0, 0, 0, 0.6)",
    },

    primary: {
      main: "#4A90E2",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFC107",
      contrastText: "#212121",
    },

    error: { main: "#D32F2F" },
    warning: { main: "#ED6C02" },
    success: { main: "#2E7D32" },
    info:    { main: "#0288D1" },
  },

  typography: {
    fontFamily: `"Roboto Condensed", sans-serif`,

    h4: {
      fontWeight: 800,
      fontSize: "1.5rem",
      "@media (min-width:600px)": { fontSize: "1.75rem" },
      "@media (min-width:900px)": { fontSize: "2.25rem" },
      "@media (min-width:1200px)": { fontSize: "2.75rem" },
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "0.9rem",
      "@media (min-width:600px)": { fontSize: "1rem" },
      "@media (min-width:900px)": { fontSize: "1.125rem" },
      lineHeight: 1.8,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "0.8rem",
      "@media (min-width:600px)": { fontSize: "0.9rem" },
      "@media (min-width:900px)": { fontSize: "1rem" },
    },
  },

  zIndex: {
    appBar: 1200,
    modal: 1300,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: "100vh",
          backgroundColor: "#FFFFFF",
          color: "#212121",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& strong": {
            color: theme.palette.primary.main,
            fontWeight: 800,
          },
        }),
      },
    },
  },
});

export default theme;
