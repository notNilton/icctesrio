// src/components/HistoryDetail.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";

// static imports of your timeline images
import img1985 from "../assets/images/timeline/1985-committee.png";
import img1990 from "../assets/images/timeline/1990-foundation.png";
import img1998 from "../assets/images/timeline/1998-upgrade.png";
import img2000 from "../assets/images/timeline/2000-partnership.png";
import img2008 from "../assets/images/timeline/2008-outreach.png";

interface EventTrans {
  id: number;
  year: string;
  title: string;
  shortDescription: string;
  longDescription: string;
}

const imagesMap: Record<number, string> = {
  1: img1985,
  2: img1990,
  3: img1998,
  4: img2000,
  5: img2008,
};

const HistoryDetail: React.FC = () => {
  const { t } = useTranslation("history");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // pull the translated items array
  const items = t("items", { returnObjects: true }) as EventTrans[];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {items.map((event, idx) => (
        <Box key={event.id} sx={{ mb: 8 }}>
          {/* Year & Title */}
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{
              color: theme.palette.text.primary,
              fontWeight: "medium",
              mb: 1,
            }}
          >
            {event.year} — {event.title}
          </Typography>

          {/* Divider */}
          <Divider
            sx={{
              mb: 3,
              borderColor: theme.palette.divider,
              width: isMobile ? "50%" : "20%",
            }}
          />

          {/* Image */}
          <Box
            component="img"
            src={imagesMap[event.id]}
            alt={event.title}
            sx={{
              width: "100%",
              maxHeight: 400,
              objectFit: "cover",
              borderRadius: 1,
              mb: 3,
            }}
          />

          {/* Short Description */}
          <Typography
            variant="subtitle1"
            paragraph
            sx={{ color: theme.palette.text.secondary }}
          >
            {event.shortDescription}
          </Typography>

          {/* Long Description */}
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: theme.palette.text.secondary,
              ml: isMobile ? 0 : 2,
            }}
          >
            {event.longDescription}
          </Typography>
        </Box>
      ))}
    </Container>
  );
};

export default React.memo(HistoryDetail);
