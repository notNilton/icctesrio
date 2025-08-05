// src/components/AboutSection.tsx
import React, { FC } from "react";
import {
  Box,
  Avatar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import pfpwilmar from "../assets/images/team/pfp-wilmar.png";
import pfpraphael from "../assets/images/team/pfp-raphael.png";
import pfpgiovanna from "../assets/images/team/pfp-giovanna.png";
import pfpdaniel from "../assets/images/team/pfp-daniel.png";
import pfparmando from "../assets/images/team/pfp-armando.png";

// Importe os logos dos patrocinadores
import logoAmbev    from "../assets/images/sponsors/logo-ambev.png";
import logoHeineken from "../assets/images/sponsors/logo-heineken.png";
import logoSonrisal from "../assets/images/sponsors/logo-sonrisal.png";

interface Member {
  id: number;
  name: string;
  role: string;
  bio: string;
}

const avatarMap: Record<number, string> = {
  1: pfpwilmar,
  2: pfpraphael,
  3: pfpgiovanna,
  4: pfpdaniel,
  5: pfparmando,
};

const AboutSection: FC = () => {
  const { t } = useTranslation("about");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const aboutSectionTitle       = t("aboutSectionTitle");
  const aboutSectionDescription = t("aboutSectionDescription");
  const aboutSponsorsTitle      = t("aboutSponsorsTitle");
  const team = t("team", { returnObjects: true }) as Member[];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.palette.background.default,
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 8 },
        mx: isMobile ? 2 : "15vw",
      }}
    >
      {/* TÍTULO */}
      <Typography
        variant={isMobile ? "h5" : "h2"}
        sx={{
          mb: 4,
          fontWeight: 900,
          textAlign: "center",
          background: `linear-gradient(
            45deg,
            ${theme.palette.primary.dark} 0%,
            ${theme.palette.grey[800]} 50%,
            #000000 100%
          )`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {aboutSectionTitle}
      </Typography>

      {/* DESCRIÇÃO */}
      <Typography
        variant={isMobile ? "body1" : "h6"}
        sx={{
          maxWidth: 640,
          mx: "auto",
          mb: 6,
          fontWeight: 400,
          textAlign: "center",
          color: theme.palette.text.secondary,
          lineHeight: 1.6,
          letterSpacing: 0.5,
          px: { xs: 2, sm: 0 },
        }}
      >
        {aboutSectionDescription}
      </Typography>

      {/* EQUIPE */}
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {team.map((emp, idx) => {
          const direction = isMobile
            ? "column"
            : idx % 2 === 0
            ? "row"
            : "row-reverse";
          const textAlign = isMobile
            ? "center"
            : idx % 2 === 0
            ? "left"
            : "right";

          return (
            <Box
              component="li"
              key={emp.id}
              sx={{
                display: "flex",
                flexDirection: direction,
                alignItems: "center",
                gap: 4,
              }}
            >
              <Avatar
                src={avatarMap[emp.id]}
                alt={emp.name}
                sx={{
                  width: 100,
                  height: 100,
                  flexShrink: 0,
                  boxShadow: 3,
                }}
              />

              <Box sx={{ textAlign }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: theme.palette.text.primary }}
                >
                  {emp.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: theme.palette.primary.main,
                    mb: 1,
                  }}
                >
                  {emp.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}
                >
                  {emp.bio}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* PATROCÍNIOS */}
      <Typography
        variant={isMobile ? "h6" : "h4"}
        sx={{
          mt: 8,
          mb: 4,
          fontWeight: 700,
          textAlign: "center",
          background: `linear-gradient(
            45deg,
            ${theme.palette.primary.dark} 0%,
            ${theme.palette.grey[800]} 50%,
            #000000 100%
          )`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {aboutSponsorsTitle}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: isMobile ? "wrap" : "nowrap",
          justifyContent: "center",
          alignItems: "center",
          gap: isMobile ? 2 : 6,
        }}
      >
        {[logoAmbev, logoHeineken, logoSonrisal].map((logo, i) => (
          <Box
            key={i}
            component="img"
            src={logo}
            alt={`Sponsor ${i + 1}`}
            sx={{
              height: isMobile ? 32 : 48,
              objectFit: "contain",
              m: isMobile ? 1 : 0,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default React.memo(AboutSection);
