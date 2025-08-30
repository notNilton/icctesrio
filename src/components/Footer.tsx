// src/components/Footer.tsx
import React, { FC } from "react";
import {
  Box,
  Divider,
  Typography,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Footer: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dividerMargin = isMobile ? 2 : 4;

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.default,
        py: { xs: 2, sm: 4, md: 6 },
        color: "#000",
        textAlign: "center",            // centraliza todo o texto
      }}
    >
      <Divider sx={{ borderColor: "#000", my: dividerMargin }} />

      <Box
        sx={{
          mx: "auto",
          px: isMobile ? 2 : 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",     // garante centralização vertical
          gap: isMobile ? 2 : 4,
          maxWidth: 800,                // limite de largura em desktop
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          ICCTES-Rio
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.6, opacity: 0.9, textAlign: "center", }}>
          Instituto do Cinturaão Cultura, Turístico e Esportivo do Estado do Rio de Janeiro do Rio
          de Janeiro
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",   // centraliza os ícones
            flexWrap: "wrap",
          }}
        >
          {[
            {
              href: "https://www.linkedin.com/company/icctes-rio",
              icon: <LinkedInIcon fontSize="large" />,
            },
            {
              href: "https://www.instagram.com/icctes_rio",
              icon: <InstagramIcon fontSize="large" />,
            },
            {
              href: "mailto:contato@icctes-rio.org.br",
              icon: <EmailIcon fontSize="large" />,
            },
          ].map(({ href, icon }, i) => (
            <IconButton
              key={i}
              component={Link}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener" : undefined}
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                color: "#000",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.4)",
                },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Box>

        <Typography variant="caption" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} ICCTES-Rio. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(Footer);
