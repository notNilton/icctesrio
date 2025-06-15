// src/data/AboutUsData.ts

import avatarAlice from "../assets/images/team/alice.png";
import avatarBruno from "../assets/images/team/bruno.png";
import avatarCarla from "../assets/images/team/carla.png";
import avatarDiego from "../assets/images/team/diego.png";

export interface Employee {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
}

export const team: Employee[] = [
  {
    name: "Alice Santos",
    role: "Professora de Engenharia Civil",
    bio:
      "Ministra disciplinas de estruturas e materiais de construção, orientando projetos acadêmicos e de extensão.",
    avatar: avatarAlice,
    skills: ["Ensino", "Pesquisa Científica", "Avaliação de Projetos"],
  },
  {
    name: "Bruno Costa",
    role: "Gestor Financeiro",
    bio:
      "Responsável pelo planejamento orçamentário, controle de custos e elaboração de relatórios financeiros.",
    avatar: avatarBruno,
    skills: ["Orçamento", "Análise de Custos", "Planejamento Estratégico"],
  },
  {
    name: "Carla Mendes",
    role: "Psicóloga Organizacional",
    bio:
      "Desenvolve programas de bem-estar, coordena treinamentos comportamentais e assessora na gestão de equipes.",
    avatar: avatarCarla,
    skills: ["Coaching", "Treinamento", "Dinâmica de Grupo"],
  },
  {
    name: "Diego Almeida",
    role: "Coordenador de Eventos Culturais",
    bio:
      "Planeja e executa exposições, palestras e workshops, criando experiências engajadoras para a comunidade.",
    avatar: avatarDiego,
    skills: ["Produção Cultural", "Logística de Eventos", "Comunicação"],
  },
];
