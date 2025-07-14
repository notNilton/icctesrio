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


// 1) importe as imagens
import golfOlimpico from "../assets/images/portfolio/port-golfolimpico.png";
import eventoFertilizantes from "../assets/images/portfolio/port-fertilizantes.png";
import projetoEsporteLegado from "../assets/images/portfolio/port-esportelegado.png";
import mutiraoBaia from "../assets/images/portfolio/port-mutiraobaialimpa.png";
import aquaBossalounge from "../assets/images/portfolio/port-aquabossalounge.png";
import pipocaCarioca from "../assets/images/portfolio/port-pipocacarioca.png";
import inauguracaoAqua from "../assets/images/portfolio/port-inauguracaoaqua.png";
import atelierDoAroma from "../assets/images/portfolio/port-atelierdoaroma.png";
import flavioGuimaraes from "../assets/images/portfolio/port-flavioguimaraes.png";
import oscarIocas from "../assets/images/portfolio/port-oscariocas.png";
import showInLua from "../assets/images/portfolio/port-showinlua.png";

// 2) mapeie cada `id` ao seu import
const imageMap: Record<number, string> = {
  1: golfOlimpico,
  2: eventoFertilizantes,
  3: projetoEsporteLegado,
  4: mutiraoBaia,
  5: aquaBossalounge,
  6: pipocaCarioca,
  7: inauguracaoAqua,
  8: atelierDoAroma,
  9: flavioGuimaraes,
  10: oscarIocas,
  11: showInLua,
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
