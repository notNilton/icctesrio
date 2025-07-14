// src/components/GallerySection.tsx

import React, { FC, useState } from "react";
import {
  Box,
  Dialog,
  IconButton,
  ImageList,
  ImageListItem,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  date: string;
  longText: string;
  details: string[];
}

const GallerySection: FC = () => {
  const { t } = useTranslation("portfolio");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const gallerySectionTitle = t("gallerySectionTitle");
  const gallerySectionDescription = t("gallerySectionDescription");

  const rawItems = t("items", { returnObjects: true }) as ProjectItem[];
  const items = rawItems.map((item) => ({
    ...item,
    image: imageMap[item.id],
  }));

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const handleOpen = (idx: number) => {
    setCurrent(idx);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const prev = () => setCurrent((current - 1 + items.length) % items.length);
  const next = () => setCurrent((current + 1) % items.length);

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.palette.background.default,
        width: "100%",
      }}
    >
      <Box
        sx={{
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
          {gallerySectionTitle}
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
          {gallerySectionDescription}
        </Typography>

        <ImageList variant="masonry" cols={isMobile ? 2 : 3} gap={8}>
          {items.map((proj, idx) => (
            <ImageListItem
              key={proj.id}
              onClick={() => handleOpen(idx)}
              sx={{ cursor: "pointer", borderRadius: 1, overflow: "hidden" }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                loading="lazy"
                style={{ width: "100%", display: "block" }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Dialog fullScreen open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: "#000",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                color: "#fff",
                zIndex: 10,
              }}
            >
              <CloseIcon />
            </IconButton>

            <IconButton
              onClick={prev}
              sx={{
                position: "absolute",
                top: "50%",
                left: 16,
                color: "#fff",
                transform: "translateY(-50%)",
                zIndex: 10,
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>

            <IconButton
              onClick={next}
              sx={{
                position: "absolute",
                top: "50%",
                right: 16,
                color: "#fff",
                transform: "translateY(-50%)",
                zIndex: 10,
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>

            <Box
              component="img"
              src={items[current].image}
              alt={items[current].title}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                m: "auto",
                display: "block",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                p: 4,
                background: "rgba(0,0,0,0.6)",
              }}
            >
              <Typography variant="h5" color="#fff">
                {items[current].title}
              </Typography>
              <Typography variant="body1" color="#ddd">
                {items[current].description}
              </Typography>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </Box>
  );
};

export default React.memo(GallerySection);
