// src/components/HeroSection.tsx
import React, { FC } from "react";
import { Box, Typography, useTheme, useMediaQuery, alpha } from "@mui/material";
import heroVideo from "../assets/videos/hero/hero-video.mp4";

const HeroSection: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const fgPrimary   = theme.palette.primary.main;
  const fgSecondary = theme.palette.secondary.main;
  const baseColor   = "#F5F9FF";

  // usa baseColor em vez de background.default
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
        backgroundColor: baseColor, // fundo geral também seguindo o tom
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
            textShadow: `2px 2px 4px rgba(0,0,0,0.7), -2px -2px 4px rgba(0,0,0,0.7)`,
            WebkitTextStroke: `0.75px black`,
            color: fgPrimary,
          }}
        >
          ICCTES-RIO
        </Typography>

        <Typography
          variant={isMobile ? "h6" : "h4"}
          sx={{
            fontWeight: 900,
            fontSize: { xs: "1.75rem", sm: "2.5rem", md: "2.5rem" },
            textShadow: `1px 1px 3px rgba(0,0,0,0.6)`,
            WebkitTextStroke: `0.75px black`,
            color: fgSecondary,
            mb: 4,
            maxWidth: "75%",
            mx: "auto",
          }}
        >
          Instituto de Ciência, Cultura, Tecnologia, Esporte e Sociedade
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(HeroSection);
