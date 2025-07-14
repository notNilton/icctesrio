// src/components/ContactSection.tsx
import React, { FC } from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";

const ContactSection: FC = () => {
  const { t } = useTranslation("contact");  // namespace 'contact'
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const contactSectionTitle = t("contactSectionTitle");
  const contactSectionDescription = t("contactSectionDescription");
  const emailLabel = t("emailLabel");
  const instaLabel = t("instagramLabel");
  const whatsappLabel = t("whatsappLabel");
  const mapTitle = t("mapTitle");

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
        {contactSectionTitle}
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
        {contactSectionDescription}
      </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            gap: 4,
            mb: 6,
          }}
        >
          {/* Email */}
          <Box sx={{ textAlign: "center" }}>
            <IconButton
              component={Link}
              href={`mailto:${emailLabel}`}
              color="primary"
              size="large"
            >
              <EmailIcon fontSize="inherit" />
            </IconButton>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              {emailLabel}
            </Typography>
          </Box>

          {/* Instagram */}
          <Box sx={{ textAlign: "center" }}>
            <IconButton
              component={Link}
              href="https://instagram.com/icctes_rio"
              target="_blank"
              rel="noopener"
              color="secondary"
              size="large"
            >
              <InstagramIcon fontSize="inherit" />
            </IconButton>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              {instaLabel}
            </Typography>
          </Box>

          {/* WhatsApp */}
          <Box sx={{ textAlign: "center" }}>
            <IconButton
              component={Link}
              href="https://wa.me/5521998580908"
              target="_blank"
              rel="noopener"
              sx={{ color: "#25D366" }}
              size="large"
            >
              <WhatsAppIcon fontSize="inherit" />
            </IconButton>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              {whatsappLabel}
            </Typography>
          </Box>
        </Box>

        {/* Mapa */}
        <Box
          sx={{
            width: "100%",
            height: isMobile ? 300 : 400,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <iframe
            title={mapTitle}
            src="https://maps.google.com/maps?q=-22.7432778,-45.1099444&z=16&output=embed&hl=pt-BR"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(ContactSection);
