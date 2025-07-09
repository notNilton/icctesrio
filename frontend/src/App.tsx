// src/App.tsx
import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HeroAux from "./components/HeroAux";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import GalleryPage from "./pages/GalleryPage";
import AboutUsPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const Layout: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname === "/home";

  return (
    <>
      <Navbar />
      {isHome ? <HeroSection /> : <HeroAux />}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <ScrollToTop />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />

            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/sobre-nos" element={<AboutUsPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Box>
    </Router>
  </ThemeProvider>
);

export default App;
