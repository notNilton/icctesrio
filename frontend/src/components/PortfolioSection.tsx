// src/components/PortfolioSection.tsx

import React, { FC, useRef } from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 1) Importe as imagens diretamente do diretório de assets:
import golfOlimpico from "../assets/images/portfolio/golf-olimpico.png";
import eventoFertilizantes from "../assets/images/portfolio/evento-fertilizantes.png";
import projetoBoxe from "../assets/images/portfolio/projeto-boxe-praia.png";
import mutiraoBaia from "../assets/images/portfolio/mutirao-baia-limpa.png";
import aquaBossa from "../assets/images/portfolio/aqua-bossa.png";
import pipocaCarioca from "../assets/images/portfolio/pipoca-carioca.png";
import inauguracaoAqua from "../assets/images/portfolio/inauguracao-aqua.png";

// 2) Mapeie cada `id` ao seu arquivo de imagem:
const imageMap: Record<number, string> = {
  1: golfOlimpico,
  2: eventoFertilizantes,
  3: projetoBoxe,
  4: mutiraoBaia,
  5: aquaBossa,
  6: pipocaCarioca,
  7: inauguracaoAqua,
};

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  date: string;
  longText: string;
  details: string[];
  // note: não declaramos `image` no tipo vindo do JSON
}

const PortfolioSection: FC = () => {
  const { t } = useTranslation("portfolio");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Traduções simples:
  const sectionTitle = t("sectionTitle");
  const buttonText = t("buttonText");
  const backToHome = t("backToHome");
  const detailsButton = t("detailsButton");

  // 3) Carregue o array de projetos do JSON (sem `image`) e injete a imagem correta:
  const rawItems = t("items", { returnObjects: true }) as ProjectItem[];
  const items = rawItems.map((item) => ({
    ...item,
    image: imageMap[item.id], // injeta aqui a string da importação
  }));

  // Configurações do slider:
  const sliderRef = useRef<Slider>(null);
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: isMobile ? "40px" : "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1, centerPadding: "20px" },
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
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
        {sectionTitle}
      </Typography>

      <Slider ref={sliderRef} {...settings}>
        {items.map(({ id, title, description, image }) => {
          // gera slug para link, se precisar:
          const slug = title.toLowerCase().replace(/\s+/g, "-");

          return (
            <Box key={id} sx={{ px: 1, outline: "none" }}>
              <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                  width: "100%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />

              <Typography
                variant="h6"
                sx={{ mt: 2, textAlign: "center", fontWeight: 500 }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  mb: 2,
                  color: theme.palette.text.secondary,
                }}
              >
                {description}
              </Typography>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default React.memo(PortfolioSection);
