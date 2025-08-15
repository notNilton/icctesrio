// src/components/HeroSection.tsx
import React, { FC } from "react";
import { Box, Typography, useTheme, useMediaQuery, alpha } from "@mui/material";
import heroVideo from "../assets/videos/hero/hero-video.mp4";

const HeroSection: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const fgPrimary   = theme.palette.primary.main;   // azul
  const fgSecondary = theme.palette.secondary.main; // amarelo
  const baseColor   = "#F5F9FF";

  const overlayGradient = `linear-gradient(
    to bottom,
    ${alpha(baseColor, 1)} 60%,
    ${alpha(baseColor, 0)} 100%
  )`;

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "60vh", sm: "75vh", md: "100vh" },
        position: "relative",
        overflow: "hidden",
        backgroundColor: baseColor,
      }}
    >
      <Box
        component="video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          maskImage: overlayGradient,
          WebkitMaskImage: overlayGradient,
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, md: 4 },
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Typography
          variant={isMobile ? "h3" : "h1"}
          gutterBottom
          sx={{
            fontWeight: 1000,
            fontSize: { xs: "2.5rem", sm: "4rem", md: "5rem" },
            letterSpacing: { xs: "0.1em", sm: "0.15em", md: "0.2em" },
            color: fgPrimary, // azul
          }}
        >
          ICCTES-RIO
        </Typography>

        <Typography
          variant={isMobile ? "h6" : "h4"}
          sx={{
            fontWeight: 900,
            fontSize: { xs: "1.75rem", sm: "2.5rem", md: "2.5rem" },
            color: fgSecondary, // amarelo
            mb: 4,
            maxWidth: "75%",
            mx: "auto",
          }}
        >
          Instituto do Cinturaão Cultura, Turístico e Esportivo do Estado do Rio de Janeiro
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(HeroSection);
