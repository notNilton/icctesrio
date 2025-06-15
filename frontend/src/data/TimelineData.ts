// src/data/Timeline.ts

import img1985 from "../assets/images/timeline/1985-committee.png";
import img1990 from "../assets/images/timeline/1990-foundation.png";
import img1998 from "../assets/images/timeline/1998-upgrade.png";
import img2000 from "../assets/images/timeline/2000-partnership.png";
import img2008 from "../assets/images/timeline/2008-outreach.png";

export interface TimelineEvent {
  year: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1985",
    title: "Comitê de Fundação",
    shortDescription:
      "Em 1985, um grupo de professores e pesquisadores se reuniu para idealizar a criação de um instituto que unisse ciência, cultura e tecnologia.",
    longDescription:
      "Esse comitê pioneiro definiu a missão, visão e valores iniciais da instituição, estabelecendo as bases para futuras parcerias e projetos multidisciplinares. As reuniões preparatórias envolveram estudos de viabilidade, consultas comunitárias e elaboração de estatutos fundacionais.",
    image: img1985,
  },
  {
    year: "1990",
    title: "Fundação do Instituto",
    shortDescription:
      "Em 1990, o Instituto foi oficialmente criado com foco em pesquisa acadêmica e inovação tecnológica.",
    longDescription:
      "A cerimônia de fundação contou com a presença de autoridades acadêmicas e governamentais. Logo após, iniciaram-se os primeiros programas de bolsa de pesquisa e intercâmbio, atraindo docentes e estudantes de diversas regiões para participar de projetos de ponta.",
    image: img1990,
  },
  {
    year: "1998",
    title: "Primeira Atualização de Infraestrutura",
    shortDescription:
      "No final da década de 90, realizamos a primeira grande atualização de equipamentos de laboratório.",
    longDescription:
      "Foram adquiridos microscópios eletrônicos, estações de trabalho de alto desempenho e instrumentos de medição avançada. Essa modernização permitiu avanços significativos em pesquisas de materiais e biotecnologia, além de atrair financiamentos externos.",
    image: img1998,
  },
  {
    year: "2000",
    title: "Primeira Parceria Internacional",
    shortDescription:
      "Em 2000, firmamos nosso primeiro convênio com uma universidade estrangeira.",
    longDescription:
      "O acordo incluiu programas de intercâmbio acadêmico, projetos conjuntos de pesquisa e co-publicações em periódicos internacionais. Essa colaboração ampliou o alcance global do instituto e fortaleceu sua reputação científica.",
    image: img2000,
  },
  {
    year: "2008",
    title: "Programa de Extensão Comunitária",
    shortDescription:
      "Lançamos em 2008 um programa de extensão para levar oficinas de ciência e tecnologia a escolas públicas.",
    longDescription:
      "As atividades envolveram alunos do ensino fundamental e médio, com oficinas práticas de robótica, experimentos de física e workshops de desenho técnico. O programa promoveu inclusão social e inspirou jovens a seguir carreiras científicas.",
    image: img2008,
  },
];
