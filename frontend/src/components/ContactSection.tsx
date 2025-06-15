// src/components/ContactSection.tsx
import React, { FC } from "react";
import {
  Box,
  Typography,
  Divider,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactSection: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          Nosso Contato
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
          <Box sx={{ textAlign: "center" }}>
            <IconButton
              component={Link}
              href="mailto:iictesrio@gmail.com"
              color="primary"
              size="large"
            >
              <EmailIcon fontSize="inherit" />
            </IconButton>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              iictesrio@gmail.com
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
              @icctes_rio
            </Typography>
          </Box>

          {/* WhatsApp */}
          <Box sx={{ textAlign: "center" }}>
            <IconButton
              component={Link}
              href="https://wa.me/5565998580908"
              target="_blank"
              rel="noopener"
              sx={{ color: "#25D366" /* verde WhatsApp */ }}
              size="large"
            >
              <WhatsAppIcon fontSize="inherit" />
            </IconButton>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              +55 (65) 99858-0908
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
            title="Mapa do Instituto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456789!2d-46.633309684409714!3d-23.550519984682914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b0a5d2a123%3A0xabcdef123456789!2sInstituto%20de%20Ci%C3%AAncia%2C%20Tecnologia%20e%20Sociedade!5e0!3m2!1spt-BR!2sbr!4v1612345678901!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </Box>
      </Box>{" "}
    </Box>
  );
};

export default React.memo(ContactSection);
