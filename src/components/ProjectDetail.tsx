// src/components/ProjectDetail.tsx
import React, { FC } from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Divider,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

// static image imports (mesmas do PortfolioSection/Detail)
import img1 from "../assets/images/projects/requalificacao.png";
import img2 from "../assets/images/projects/residencia-arte.png";
import img3 from "../assets/images/projects/pavilhao-esportivo.png";
import img4 from "../assets/images/projects/centro-inovacao.png";
import img5 from "../assets/images/projects/forum-dialogos.png";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  longText: string;
  details: string[];
}

const imagesMap: Record<number, string> = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
};

const ProjectDetail: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation("portfolio");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // textos de UI
  const backToHome  = t("backToHome");
  const othersTitle = t("othersTitle");
  const detailsBtn  = t("detailsButton");

  // array completo de projetos
  const items = t("items", { returnObjects: true }) as ProjectItem[];

  // separa current e others
  const current = items.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );
  const others = items.filter((p) => p !== current);

  const sliderSettings = {
    infinite: true,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {current ? (
        <Box sx={{ mb: 8 }}>
          <Divider
            sx={{
              mb: 3,
              width: isMobile ? "50%" : "20%",
              borderColor: theme.palette.divider,
            }}
          />

          {/* Imagem principal */}
          <Box
            component="img"
            src={imagesMap[current.id]}
            alt={current.title}
            sx={{
              width: "100%",
              maxHeight: 400,
              objectFit: "cover",
              borderRadius: 1,
              mb: 3,
              boxShadow: 3,
            }}
          />

          {/* Descrição breve */}
          <Typography variant="subtitle2" color="text.secondary" paragraph>
            {current.description}
          </Typography>

          {/* Texto longo */}
          <Typography variant="body1" paragraph sx={{ color: "text.secondary" }}>
            {current.longText.trim()}
          </Typography>

          {/* Lista de detalhes */}
          <Box component="ul" sx={{ pl: isMobile ? 0 : 2, mb: 3 }}>
            {current.details.map((item, i) => (
              <Typography
                key={i}
                component="li"
                variant="body2"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Botão Voltar */}
          <Button
            component={NavLink}
            to="/"
            variant="outlined"
            size="small"
            sx={{ textTransform: "none" }}
          >
            {backToHome}
          </Button>
        </Box>
      ) : (
        <Typography variant="h5" color="error" gutterBottom>
          Projeto não encontrado.
        </Typography>
      )}

      {/* Outros Projetos */}
      <Typography
        variant={isMobile ? "h5" : "h4"}
        sx={{ color: theme.palette.text.primary, fontWeight: 600, mb: 2 }}
      >
        {othersTitle}
      </Typography>
      <Divider sx={{ mb: 4, borderColor: theme.palette.divider }} />

      <Slider {...sliderSettings}>
        {others.map((proj) => {
          const otherSlug = proj.title.toLowerCase().replace(/\s+/g, "-");
          return (
            <Box key={proj.id} sx={{ px: 1 }}>
              <Box
                component="img"
                src={imagesMap[proj.id]}
                alt={proj.title}
                sx={{
                  width: "100%",
                  height: isMobile ? 180 : 200,
                  objectFit: "cover",
                  borderRadius: 1,
                  boxShadow: 1,
                  mb: 1,
                }}
              />
              <Typography
                variant="h6"
                textAlign="center"
                sx={{ color: theme.palette.text.primary, mb: 0.5 }}
              >
                {proj.title}
              </Typography>
              <Typography
                variant="body2"
                textAlign="center"
                color="text.secondary"
                paragraph
              >
                {proj.description}
              </Typography>
              <Box textAlign="center">
                <Button
                  component={NavLink}
                  to={`/projeto/${otherSlug}`}
                  variant="contained"
                  size="small"
                  sx={{ textTransform: "none" }}
                >
                  {detailsBtn}
                </Button>
              </Box>
            </Box>
          );
        })}
      </Slider>
    </Container>
  );
};

export default React.memo(ProjectDetail);
