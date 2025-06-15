// src/data/Gallery.ts

import photoWorkshop from "../assets/images/gallery/workshop.png";
import photoSymposium from "../assets/images/gallery/symposium.png";
import photoExtension from "../assets/images/gallery/extension.png";
import photoConference from "../assets/images/gallery/conference.png";
import photoExhibition from "../assets/images/gallery/exhibition.png";
import photoHackathon from "../assets/images/gallery/hackathon.png";
import photoSeminar from "../assets/images/gallery/seminar.png";
import photoAwards from "../assets/images/gallery/awards.png";

import videoDocumentary from "../assets/videos/gallery/documentary.mp4";
import videoPanel from "../assets/videos/gallery/panel.mp4";

export interface MediaItem {
  title: string;
  src: string;
  description: string;
  tags: string[];
  participants: string[];
  source: string;
  type: "image" | "video";
}

export const mediaItems: MediaItem[] = [
  {
    title: "Workshop de IA",
    src: photoWorkshop,
    description: "Evento acadêmico: workshop de Inteligência Artificial.",
    tags: ["IA", "Workshop", "Acadêmico"],
    participants: ["Prof. Silva", "Dr. Souza"],
    source: "Foto: Equipe de Comunicação",
    type: "image",
  },
  {
    title: "Simpósio de Ciência",
    src: photoSymposium,
    description: "Evento acadêmico: simpósio de ciências exatas.",
    tags: ["Simpósio", "Ciência", "Palestras"],
    participants: ["Dr. Lima", "Dr. Rocha"],
    source: "Foto: Equipe de Comunicação",
    type: "image",
  },
  {
    title: "Mutirão Comunitário",
    src: photoExtension,
    description: "Ação de extensão comunitária: mutirão de limpeza urbana.",
    tags: ["Extensão", "Comunidade", "Voluntariado"],
    participants: ["Alunos Voluntários", "Prof. Costa"],
    source: "Foto: Coordenação de Extensão",
    type: "image",
  },
  {
    title: "Conferência Internacional",
    src: photoConference,
    description: "Conferência internacional de tecnologia e inovação.",
    tags: ["Conferência", "Inovação", "Tecnologia"],
    participants: ["Dr. Freitas", "Eng. Santos"],
    source: "Foto: Assessoria Internacional",
    type: "image",
  },
  {
    title: "Exposição Cultural",
    src: photoExhibition,
    description: "Mostra de arte digital promovida por artistas residentes.",
    tags: ["Exposição", "Arte Digital", "Cultura"],
    participants: ["Artista Pereira", "Curadora Silva"],
    source: "Foto: Departamento de Cultura",
    type: "image",
  },
  {
    title: "Hackathon de Tecnologia",
    src: photoHackathon,
    description:
      "Maratona de desenvolvimento de soluções para cidades inteligentes.",
    tags: ["Hackathon", "Inovação", "Smart City"],
    participants: ["Equipe Alpha", "Equipe Beta"],
    source: "Foto: Núcleo de Inovação",
    type: "image",
  },
  {
    title: "Seminário de Sustentabilidade",
    src: photoSeminar,
    description:
      "Palestras sobre práticas sustentáveis em engenharia e arquitetura.",
    tags: ["Seminário", "Sustentabilidade", "Arquitetura"],
    participants: ["Prof. Mendes", "Eng. Oliveira"],
    source: "Foto: Coordenação de Extensão",
    type: "image",
  },
  {
    title: "Cerimônia de Premiação",
    src: photoAwards,
    description:
      "Entrega de prêmios aos melhores trabalhos de pesquisa do ano.",
    tags: ["Cerimônia", "Prêmios", "Pesquisa"],
    participants: ["Diretoria", "Pesquisadores"],
    source: "Foto: Assessoria de Imprensa",
    type: "image",
  },
  {
    title: "Documentário Institucional",
    src: videoDocumentary,
    description: "Documentário sobre os projetos do ICCTES-Rio.",
    tags: ["Documentário", "Institucional"],
    participants: ["Equipe Produção", "Diretoria"],
    source: "Vídeo: Assessoria de Imprensa",
    type: "video",
  },
  {
    title: "Painel de Debate",
    src: videoPanel,
    description: "Vídeo do painel de debate sobre ciência e sociedade.",
    tags: ["Painel", "Debate", "Sociedade"],
    participants: ["Dr. Costa", "Prof. Araújo"],
    source: "Vídeo: Departamento de Comunicação",
    type: "video",
  },
];
