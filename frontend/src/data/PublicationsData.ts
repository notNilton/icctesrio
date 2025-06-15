// src/data/Publications.ts

export interface Publication {
  slug: string;        // identificador para URL (ex: "analise-de-algoritmos-em-tempo-real")
  title: string;
  url: string;         // link para o DOI ou publicação original
  author: string;
  description: string; // breve resumo
  writing: string;     // texto longo
}

export const publications: Publication[] = [
  {
    slug: "analise-de-algoritmos-em-tempo-real",
    title: "Análise de Algoritmos em Tempo Real",
    url: "https://doi.org/10.1234/real-time-algos",
    author: "Nilton Aguiar dos Santos et al.",
    description:
      "Otimizações de algoritmos para minimizar latência e maximizar throughput em tempo real.",
    writing: `
Este trabalho apresenta um estudo aprofundado de otimizações para algoritmos de processamento de dados em tempo real, com foco em minimizar a latência e maximizar a utilização dos recursos computacionais. A análise começa com uma revisão das técnicas clássicas de escalonamento de tarefas em sistemas embarcados, seguida de uma proposta de pipeline paralelo que permite o processamento simultâneo de múltiplos fluxos de dados.

Em seguida, detalhamos a implementação de um mecanismo dinâmico de balanceamento de carga que observa continuamente métricas de uso de CPU e memória, realocando sub-rotinas críticas para núcleos menos ocupados. Para validar a eficácia, realizamos experimentos em três cenários distintos: streaming de vídeo de alta resolução, processamento de sinais de sensores industriais e análise de logs em data centers. Os resultados mostram redução de até 45% no tempo de resposta médio e ganho superior a 30% na taxa de transferência, comparado às abordagens convencionais.

Por fim, discutimos as limitações atuais e apontamos direções futuras para integração com técnicas de aprendizado de máquina, capazes de prever padrões de carga e ajustar o fluxo de execução de forma proativa.`
  },
  {
    slug: "visao-computacional-aplicada-engenharia-civil",
    title: "Visão Computacional Aplicada à Engenharia Civil",
    url: "https://doi.org/10.1234/cv-civil-eng",
    author: "Nilton Aguiar dos Santos, Maria Oliveira",
    description:
      "Uso de CNNs para detecção automática de falhas em estruturas de concreto.",
    writing: `
Neste artigo, exploramos a aplicação de redes neurais convolucionais (CNNs) para detecção de falhas em estruturas de concreto armado. O estudo parte de um extenso conjunto de imagens coletadas em canteiros de obras, onde foram catalogadas fissuras, corrosões e desplacamentos superficiais. Propomos uma arquitetura CNN customizada, inspirada no ResNet, porém com camadas de normalização adaptativa para lidar com variações de iluminação e textura.

Descrevemos todo o pipeline: desde o pré-processamento das imagens (correção de cores, equalização de histograma) até a etapa de pós-processamento, que filtra falsos positivos usando heurísticas geométricas. Os experimentos incluem testes em laboratório e casos reais, alcançando precisão acima de 92% e recall superior a 89%. Além disso, implementamos uma interface web que permite engenheiros civis analisar automaticamente novas imagens, receber relatórios de falhas e estimar o tempo de reparo.

Concluímos com recomendações para integração desta solução em sistemas de monitoramento contínuo, utilizando drones e câmeras 360°, e discutimos direções futuras como aprendizado contínuo in loco e combinação com dados de sensores IoT.`
  },
  {
    slug: "sistemas-distribuidos-com-nats",
    title: "Sistemas Distribuídos com NATS",
    url: "https://doi.org/10.1234/nats-distributed-systems",
    author: "Nilton Aguiar dos Santos, João Souza",
    description:
      "Arquitetura de microserviços com mensageria NATS para escalabilidade e resiliência.",
    writing: `
Este paper aborda a arquitetura de microserviços orquestrados por mensageria NATS para atingir alta escalabilidade e baixa latência em ambientes empresariais. Iniciamos com uma introdução ao NATS: um sistema de mensagens leve, de código aberto, que oferece publicação/assinatura, filas de trabalho e requisição/resposta com garantia de entrega “at most once”.

Em seguida, detalhamos um estudo de caso em que migramos um monolito bancário para microserviços desacoplados. Cada serviço comunica-se via NATS, publicando eventos de domínio (por exemplo, “pagamento autorizado”, “saldo atualizado”) que são consumidos por outros serviços de forma reativa. Medimos throughput, latência de ponta a ponta e resiliência a falhas de rede. Os resultados demonstram melhorias de até 50% na taxa de processamento de transações e recuperação automática de falhas sem intervenção manual.

Finalizamos apresentando boas práticas de design: uso de tópicos hierárquicos para escalar consumidores, padrões de “dead letter queue” e estratégias de versionamento de mensagens. Também discutimos integrações futuras com Kubernetes e operadores nativos para automação de deploy e monitoramento.`
  },
  {
    slug: "paddleocr-extracao-texto-imagens",
    title: "PaddleOCR na Extração de Texto de Imagens",
    url: "https://doi.org/10.1234/paddleocr-extraction",
    author: "Nilton Aguiar dos Santos, Carla Mendes",
    description:
      "Comparativo de Tesseract e PaddleOCR em ambientes industriais desafiadores.",
    writing: `
Neste estudo comparativo, avaliamos a performance do Tesseract versus PaddleOCR em cenários industriais caracterizados por baixa iluminação, superfícies reflexivas e múltiplos idiomas. Descrevemos a criação de um dataset próprio, com mais de 10.000 imagens anotadas manualmente, abrangendo placas metalizadas, rótulos plásticos e etiquetas de papel envelhecido.

Implementamos pipelines paralelizados para ambos os OCRs, medindo tempo de execução, acurácia de reconhecimento de caracteres (CER) e Word Error Rate (WER). Enquanto o Tesseract apresenta CER médio de 8,5%, o PaddleOCR atinge 4,2%, porém com custo de CPU 20% maior. Detalhamos técnicas de pré-processamento (deskewing, binarização adaptativa) que beneficiam ambos, mas especialmente o PaddleOCR.

Por fim, discutimos trade-offs entre desempenho e recursos, e propomos um sistema híbrido que usa PaddleOCR em lotes críticos e Tesseract em tarefas de baixa prioridade, otimizando custo e precisão. Apontamos direções futuras, como fine-tuning de modelos OCR em GPUs embarcadas e integração com pipelines de visão computacional em tempo real.`
  },
];
