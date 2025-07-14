// src/pages/Home.tsx
import React, { FC } from "react";
import { useTheme, useMediaQuery, Box, Divider } from "@mui/material";

import PortfolioSection from "../components/PortfolioSection";
import TimelineSection from "../components/TimelineSection";
import GallerySection from "../components/GallerySection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import PublicationsSection from "../components/PublicationsSection";

const Home: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const dividerMargin = isMobile ? 2 : 4;

  return (
    <Box component="main">
      <PortfolioSection />

      <Divider sx={{ borderColor: "#000", my: dividerMargin }} />

      <PublicationsSection />

      <Divider sx={{ borderColor: "#000", my: dividerMargin }} />

      <TimelineSection />

      <Divider sx={{ borderColor: "#000", my: dividerMargin }} />

      <GallerySection />

      <Divider sx={{ borderColor: "#000", my: dividerMargin }} />

      <AboutSection />

      <Divider sx={{ borderColor: "#000", my: dividerMargin }} />

      <ContactSection />

      
    </Box>
  );
};

export default Home;
