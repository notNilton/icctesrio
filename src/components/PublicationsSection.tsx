// src/components/PublicationsSection.tsx

import React, { FC, useRef, useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Dialog,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 1) Importe as imagens diretamente do diretório de assets:
import aquamulher from "../assets/images/publications/pub-aquamulher.png";
import capashow from "../assets/images/publications/pub-capashow.png";
import setevidas from "../assets/images/publications/pub-setevidas.png";
import socomsotaque from "../assets/images/publications/pub-somcomsotaque.png";

// 2) Mapeie cada `id` ao seu arquivo de imagem:
const imageMap: Record<number, string> = {
  1: aquamulher,
  2: capashow,
  3: socomsotaque,
  4: setevidas,
};

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  date: string;
  longText: string;
  details: string[];
  image?: string;
}

const PublicationsSection: FC = () => {
  const { t } = useTranslation("publications");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Traduzidos:
  const sectionTitle = t("sectionTitle");
  const sectionDescription = t("sectionDescription");

  // Pega items e injeta imagem
  const rawItems = t("items", { returnObjects: true }) as ProjectItem[];
  const items: ProjectItem[] = rawItems.map((i) => ({
    ...i,
    image: imageMap[i.id],
  }));

  // Slider settings
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

  // Estado de Dialog igual ao GallerySection
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
      sx={{
        backgroundColor: theme.palette.background.default,
        py: { xs: 4, sm: 6, md: 8 },
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
        {sectionTitle}
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
        {sectionDescription}
      </Typography>

      <Slider ref={sliderRef} {...settings}>
        {items.map((item, idx) => (
          <Box key={item.id} sx={{ px: 1, outline: "none" }}>
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              onClick={() => handleOpen(idx)}
              sx={{
                width: "100%",
                aspectRatio: "3/4",
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
                cursor: "pointer",
              }}
            />
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "center", fontWeight: 500 }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                mb: 2,
                color: theme.palette.text.secondary,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Slider>

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
  );
};

export default React.memo(PublicationsSection);
