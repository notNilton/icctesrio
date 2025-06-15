// Projects.ts
import img1 from "../assets/images/projects/requalificacao.png";
import img2 from "../assets/images/projects/residencia-arte.png";
import img3 from "../assets/images/projects/pavilhao-esportivo.png";
import img4 from "../assets/images/projects/centro-inovacao.png";
import img5 from "../assets/images/projects/forum-dialogos.png";

export interface Project {
  title: string;
  imageSrc: string;
  description: string;
  details: string[];
  longText: string;
}

export const projects: Project[] = [
  {
    title: "Requalificação Urbana Comunitária",
    imageSrc: img1,
    description: "Arquitetura · Urbanismo · Sustentabilidade",
    details: [
      "Levantamento participativo das necessidades locais",
      "Desenvolvimento de propostas de infraestrutura verde",
      "Workshops de co-design com moradores",
    ],
    longText: `
Este projeto visa transformar áreas urbanas subutilizadas em espaços de convivência e lazer para a comunidade local.
A abordagem participativa garante que as intervenções reflitam as verdadeiras demandas dos moradores,
desde a criação de jardins comunitários até a instalação de mobiliário urbano sustentável.
Ao integrar técnicas de bioengenharia e planejamento urbano, promovemos a redução de ilhas de calor
e o aumento da permeabilidade do solo, contribuindo para a resiliência climática da região.
`,
  },
  {
    title: "Residência Integrada de Arte e Cultura",
    imageSrc: img2,
    description: "Design · Patrimônio · Inclusão Social",
    details: [
      "Adaptação de galpão histórico para ateliês",
      "Programação de intervenções artísticas comunitárias",
      "Capacitação de agentes culturais locais",
    ],
    longText: `
Transformamos um antigo galpão industrial em um polo cultural que abriga ateliês,
salas de exposição e espaços para oficinas. O projeto respeita as características patrimoniais
da edificação, preservando elementos originais como tijolos aparentes e estruturas metálicas,
enquanto introduz intervenções contemporâneas em madeira e vidro.
Paralelamente, desenvolvemos uma programação artística colaborativa,
fomentando a inclusão de artistas locais e promovendo o acesso da população a atividades culturais.
`,
  },
  {
    title: "Pavilhão Esportivo Sustentável",
    imageSrc: img3,
    description: "Engenharia · Estruturas · Ecoeficiência",
    details: [
      "Estrutura metálica leve com materiais reciclados",
      "Sistemas de captação de água de chuva",
      "Projeto de acessibilidade universal",
    ],
    longText: `
Desenhamos um pavilhão multiuso para práticas esportivas, construído com perfis metálicos
reciclados e painéis de madeira de reflorestamento. O telhado bioclimático otimiza a
ventilação natural, reduzindo a necessidade de ar-condicionado, e um sistema integrado
de captação de água pluvial abastece banheiros e irrigação de áreas verdes.
Todas as circulações e vestiários foram projetados em conformidade com normas de
acessibilidade, garantindo uso inclusivo para pessoas com mobilidade reduzida.
`,
  },
  {
    title: "Centro de Inovação Tecnológica Social",
    imageSrc: img4,
    description: "Espaço Maker · Oficinas · Incubação",
    details: [
      "Laboratório de fabricação digital aberto ao público",
      "Mentoria em empreendedorismo social",
      "Rede de parceiros acadêmicos e empresariais",
    ],
    longText: `
O Centro de Inovação Tecnológica Social oferece um espaço maker totalmente equipado
com impressoras 3D, cortadoras a laser e estações de prototipagem eletrônica. Além disso,
funciona como incubadora para projetos de impacto social, com mentorias semanais
em modelagem de negócios e captação de recursos. Estabelecemos parcerias com
universidades e empresas de tecnologia, criando um ecossistema que acelera a transformação
de ideias em soluções concretas para desafios urbanos e comunitários.
`,
  },
  {
    title: "Fórum de Diálogos e Ação Social",
    imageSrc: img5,
    description: "Mobilização · Políticas Públicas · Rede",
    details: [
      "Ciclos de debates sobre desafios urbanos",
      "Grupos de trabalho para projetos colaborativos",
      "Publicação de relatórios e recomendações",
    ],
    longText: `
O Fórum reúne representantes de sociedade civil, poder público e setor privado para debater
temas como habitação, mobilidade e inclusão digital. A cada ciclo, promovemos encontros
temáticos que culminam em grupos de trabalho focados no desenvolvimento de propostas
de política pública. Os resultados são compilados em relatórios abertos, que servem de base
para advocacy junto a órgãos governamentais e financiadores sociais.
`,
  },
];
