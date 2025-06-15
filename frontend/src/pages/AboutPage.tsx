// src/pages/AboutPage.tsx
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroAux from "../components/HeroAux";
import AboutSection from "../components/AboutSection";
import TimelineSection from "../components/TimelineSection";
import Footer from "../components/Footer";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const AboutPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  // converte "projeto-alpha" → "Projeto Alpha"
  const projectName = slug
    ? slug.split("-").map(capitalize).join(" ")
    : "Projeto";

  return (
    <>
      <AboutSection />
    </>
  );
};

export default AboutPage;
