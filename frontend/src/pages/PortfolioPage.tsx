// src/pages/PortfolioPage.tsx
import React, { FC } from "react";
import {
  Box,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

interface DetailItem {
  id: number;
  title: string;
  description: string;
  longText: string;
  details: string[];
  image: string;
}

const PortfolioPage: FC = () => {
  const { t } = useTranslation("portfolio");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const items = t("items", { returnObjects: true }) as DetailItem[];
  const backToHome = t("backToHome") as string;

  return (
    // remover gutters e usar margem de 10% em cada lado
    <Box sx={{ px: "20%", py: 6 }}>
      {items.map((proj, idx) => {
        const isImageLeft = idx % 2 === 0;

        return (
          <Box
            key={proj.id}
            sx={{
              mb: 12,
              display: "flex",
              flexDirection: isMobile
                ? "column"
                : isImageLeft
                ? "row"
                : "row-reverse",
              alignItems: "flex-start",
              gap: 4,
            }}
          >
            {/* Imagem ocupa 50% em desktop, 100% em mobile */}
            <Box
              component="img"
              src={proj.image}
              alt={proj.title}
              sx={{
                width: isMobile ? "100%" : "50%",
                aspectRatio: "1/1",
                objectFit: "cover",
                borderRadius: 1,
                boxShadow: 3,
              }}
            />

            {/* Texto ocupa 50% em desktop, 100% em mobile */}
            <Box
              sx={{
                width: isMobile ? "100%" : "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant={isMobile ? "h5" : "h4"}
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: "medium",
                  mb: 1,
                }}
              >
                {proj.title}
              </Typography>

              <Divider
                sx={{
                  mb: 3,
                  borderColor: theme.palette.divider,
                  width: isMobile ? "50%" : "30%",
                }}
              />

              <Typography variant="subtitle2" color="text.secondary" paragraph>
                {proj.description}
              </Typography>

              <Typography variant="body1" color="text.secondary" paragraph>
                {proj.longText.trim()}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default React.memo(PortfolioPage);
