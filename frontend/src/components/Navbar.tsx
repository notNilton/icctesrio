// src/components/Navbar.tsx
import React, { FC, MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  SxProps,
  alpha,
  ButtonGroup,
  Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import desktopLogo from "../assets/logos/logo.svg";
import mobileLogo from "../assets/logos/logo.svg";
import { useTranslation } from "react-i18next";

const NAV_LINKS = [
  { key: "home", to: "/" },
  { key: "portfolio", to: "/portfolio" },
  { key: "gallery", to: "/galeria" },
  { key: "aboutUs", to: "/sobre-nos" },
  { key: "contact", to: "/contato" },
];

const ACTIVE_COLOR = "#007BFF";

const Navbar: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t, i18n } = useTranslation("navbar");

  const [anchorNav, setAnchorNav] = React.useState<HTMLElement | null>(null);
  const openNavMenu = (e: MouseEvent<HTMLElement>) => setAnchorNav(e.currentTarget);
  const closeNavMenu = () => setAnchorNav(null);
  const changeLang = (lng: "en" | "ptBR") => i18n.changeLanguage(lng);

  const linkSx = (theme: Theme): SxProps<Theme> => ({
    position: "relative",
    color: theme.palette.text.primary,
    textTransform: "uppercase",
    fontWeight: 500,
    px: 2,
    py: 1,
    transition: "transform 0.2s ease, color 0.2s ease",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "50%",
      width: 0,
      height: 2,
      bgcolor: ACTIVE_COLOR,
      transition: "width 0.3s ease, left 0.3s ease",
    },
    "&:hover": {
      transform: "scale(1.05)",
      color: ACTIVE_COLOR,
      "&::after": { width: "100%", left: 0 },
    },
    "&.active": {
      color: ACTIVE_COLOR,
      "&::after": { width: "100%", left: 0 },
    },
  });

  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.divider}`,
        borderRadius: 0,
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: "space-between", px: 3, py: 1 }}>
        {/* Logo + Texto clicáveis e com hover */}
        <Box
          component={NavLink}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: theme.palette.text.primary,
            transition: "transform 0.2s ease, color 0.2s ease",
            "&:hover": {
              transform: "scale(1.05)",
              color: ACTIVE_COLOR,
            },
          }}
        >
          <Box
            component="img"
            src={isMobile ? mobileLogo : desktopLogo}
            alt="ICCTES-RIO"
            sx={{ height: isMobile ? 32 : 48 }}
          />
          <Box
            component="span"
            sx={{
              ml: 1,
              fontSize: isMobile ? "1rem" : "1.25rem",
              fontWeight: 700,
              userSelect: "none",
            }}
          >
            ICCTES-RIO
          </Box>
        </Box>

        {isMobile ? (
          <>
            <IconButton onClick={openNavMenu} sx={{ color: theme.palette.text.primary }}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorNav}
              open={!!anchorNav}
              onClose={closeNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{ sx: { mt: 1, minWidth: 180 } }}
            >
              {NAV_LINKS.map((link) => (
                <MenuItem
                  key={link.to}
                  component={NavLink}
                  to={link.to}
                  onClick={closeNavMenu}
                  sx={{
                    px: 2,
                    py: 1,
                    position: "relative",
                    color: theme.palette.text.primary,
                    "&.active": {
                      bgcolor: alpha(ACTIVE_COLOR, 0.1),
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: 4,
                        bgcolor: ACTIVE_COLOR,
                      },
                    },
                    "&:hover": { bgcolor: alpha(ACTIVE_COLOR, 0.1) },
                  }}
                >
                  <ListItemText primary={t(link.key)} />
                </MenuItem>
              ))}
              <Box sx={{ px: 2, pt: 1 }}>
                <ButtonGroup size="small" variant="outlined" sx={{ borderRadius: 0, width: "100%" }}>
                  <Button
                    onClick={() => changeLang("en")}
                    variant={i18n.language.startsWith("en") ? "contained" : "outlined"}
                  >
                    EN
                  </Button>
                  <Button
                    onClick={() => changeLang("ptBR")}
                    variant={i18n.language.startsWith("pt") ? "contained" : "outlined"}
                  >
                    PT
                  </Button>
                </ButtonGroup>
              </Box>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {NAV_LINKS.map((link) => (
              <Button key={link.to} component={NavLink} to={link.to} end sx={linkSx(theme)}>
                {t(link.key)}
              </Button>
            ))}
            <ButtonGroup size="small" variant="outlined" sx={{ ml: 3, "& .MuiButtonGroup-grouped": { borderRadius: 0 } }}>
              <Button
                onClick={() => changeLang("en")}
                variant={i18n.language.startsWith("en") ? "contained" : "outlined"}
              >
                EN
              </Button>
              <Button
                onClick={() => changeLang("ptBR")}
                variant={i18n.language.startsWith("pt") ? "contained" : "outlined"}
              >
                PT
              </Button>
            </ButtonGroup>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Navbar);
