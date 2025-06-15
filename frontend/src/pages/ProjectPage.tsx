// src/pages/ProjectPage.tsx
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroAux from "../components/HeroAux";
import ProjectDetail from "../components/ProjectDetail";
import Footer from "../components/Footer";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const ProjectPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  // converte "projeto-alpha" → "Projeto Alpha"
  const projectName = slug
    ? slug
        .split("-")
        .map(capitalize)
        .join(" ")
    : "Projeto";

  return (
    <>
      <Navbar />
      <HeroAux title={projectName} />
      <ProjectDetail />
      <Footer />
    </>
  );
};

export default ProjectPage;
