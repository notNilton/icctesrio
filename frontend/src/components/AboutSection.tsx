// src/components/AboutSection.tsx
import React, { FC } from "react";
import {
  Box,
  Avatar,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import avatar1 from "../assets/images/team/alice.png";
import avatar2 from "../assets/images/team/bruno.png";
import avatar3 from "../assets/images/team/carla.png";
import avatar4 from "../assets/images/team/diego.png";

interface Member {
  id: number;
  name: string;
  role: string;
  bio: string;
}

const avatarMap: Record<number, string> = {
  1: avatar1,
  2: avatar2,
  3: avatar3,
  4: avatar4,
};

const AboutSection: FC = () => {
  const { t } = useTranslation("about");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const aboutSectionTitle = t("aboutSectionTitle");
  const aboutSectionDescription = t("aboutSectionDescription");

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
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                  }}
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
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  {emp.bio}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default React.memo(AboutSection);
