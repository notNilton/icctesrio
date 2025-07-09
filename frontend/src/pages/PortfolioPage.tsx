// src/pages/PortfolioPage.tsx

import React, { FC } from "react";
import {
  Box,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";

// 1) importe as mesmas imagens que mapeamos nos outros componentes
import golfOlimpico from "../assets/images/portfolio/golf-olimpico.png";
import eventoFertilizantes from "../assets/images/portfolio/evento-fertilizantes.png";
import projetoBoxe from "../assets/images/portfolio/projeto-boxe-praia.png";
import mutiraoBaia from "../assets/images/portfolio/mutirao-baia-limpa.png";
import aquaBossa from "../assets/images/portfolio/aqua-bossa.png";
import pipocaCarioca from "../assets/images/portfolio/pipoca-carioca.png";
import inauguracaoAqua from "../assets/images/portfolio/inauguracao-aqua.png";

// 2) crie o map de id → import
const imageMap: Record<number, string> = {
  1: golfOlimpico,
  2: eventoFertilizantes,
  3: projetoBoxe,
  4: mutiraoBaia,
  5: aquaBossa,
  6: pipocaCarioca,
  7: inauguracaoAqua,
};

interface DetailItem {
  id: number;
  title: string;
  description: string;
  longText: string;
  details: string[];
  // NOTE: não declaramos `image` aqui, pois vamos injetar depois
}

const PortfolioPage: FC = () => {
  const { t } = useTranslation("portfolio");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // 3) carrega do JSON sem image e injeta a importação certa
  const rawItems = t("items", { returnObjects: true }) as DetailItem[];
  const items = rawItems.map(item => ({
    ...item,
    image: imageMap[item.id],
  }));

  return (
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
            {/* Imagem */}
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

            {/* Texto */}
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
