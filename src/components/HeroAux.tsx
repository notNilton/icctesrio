// src/components/HeroAux.tsx
import React, { FC } from "react";
import { Box, useTheme, useMediaQuery, alpha } from "@mui/material";
import heroVideo from "../assets/videos/hero/hero-video.mp4";

const HeroAux: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const bgColor = theme.palette.background.default;
  const fadeGradient = `linear-gradient(
    to bottom,
    ${alpha(theme.palette.background.default, 1)} 60%,
    ${alpha(theme.palette.background.default, 0)} 100%
  )`;

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "25vh", sm: "35vh", md: "45vh" },
        position: "relative",
        overflow: "hidden",
        backgroundColor: bgColor,
      }}
    >
      {/* Vídeo de fundo em loop */}
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
          maskImage: fadeGradient,
          WebkitMaskImage: fadeGradient,
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
          pointerEvents: "none",
        }}
      />

      {/* Overlay vazio (sem título) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default React.memo(HeroAux);
