// src/components/TimelineSection.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

interface EventTrans {
  id: number;
  year: string;
  title: string;
  shortDescription: string;
}

const TimelineSection: React.FC = () => {
  const { t } = useTranslation("history");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sectionTitle = t("sectionTitle") as string;
  const items = t("items", { returnObjects: true }) as EventTrans[];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.palette.background.default,
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 8 },
        mx: isMobile ? 2 : "15vw",
      }}
    >
      {/* Título com gradiente */}
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

      {isMobile ? (
        // ─── LÓGICA MOBILE: tudo alinhado à esquerda, sem conteúdo no lado oposto ───
        <Timeline
          position="right"
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {items.map((event, idx) => (
            <TimelineItem key={event.id}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {idx < items.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: 2, px: 2 }}>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  color="text.primary"
                >
                  {event.year}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {event.shortDescription}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      ) : (
        // ─── LÓGICA DESKTOP: timeline alternada completa ───
        <Timeline position="alternate">
          {items.map((event, idx) => (
            <TimelineItem key={event.id}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {idx < items.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: 2, px: 2 }}>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  color="text.primary"
                >
                  {event.year}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  {event.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                  {event.shortDescription}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </Box>
  );
};

export default React.memo(TimelineSection);
