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

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const GallerySection: FC = () => {
  const { t } = useTranslation("portfolio");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Pega o array completo do JSON de portfolio
  const items = t("items", { returnObjects: true }) as ProjectItem[];

  // Agora usamos "items" como nossa galeria
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
        {/* Título */}
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
          Nossa Galeria
        </Typography>

        {/* Thumbnails */}
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
                style={{ display: "block", width: "100%" }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        {/* Modal full-screen */}
        <Dialog fullScreen open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: "#000",
            }}
          >
            {/* Fechar */}
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
            {/* Navegação */}
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

            {/* Imagem em foco */}
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

            {/* Rodapé com título e descrição */}
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
