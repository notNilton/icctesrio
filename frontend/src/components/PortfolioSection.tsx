// src/components/PortfolioSection.tsx
import React, { FC, useRef } from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const PortfolioSection: FC = () => {
  const { t } = useTranslation("portfolio");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sectionTitle = t("sectionTitle");
  const buttonText = t("buttonText");
  const items = t("items", { returnObjects: true }) as ProjectItem[];

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
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
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
          const slug = title.toLowerCase().replace(/\s+/g, "-");

          return (
            <Box key={id} sx={{ px: 1, outline: "none" }}>
              {/* imagem quadrada 1:1 */}
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
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontWeight: 500,
                  color: theme.palette.text.primary,
                }}
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
