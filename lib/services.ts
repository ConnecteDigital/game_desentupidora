export type Service = {
  slug: string;
  icon: "drain" | "sewer" | "jet" | "truck" | "grease" | "tank";
  title: string;
  short: string;
  lead: string;
  body: string[];
  includes: string[];
  applications: string[];
  faq: { q: string; a: string }[];
  photos?: { file: string; alt: string }[];
  clips?: { name: string; label: string }[];
};

export const services: Service[] = [
  {
    slug: "desentupimento",
    clips: [
      { name: "desentupimento-pia", label: "Desentupimento de pia de cozinha" },
      { name: "desentupimento-area-servico", label: "Desentupimento de ralo em área de serviço" },
    ],
    photos: [{ file: "desentupimento-maquina.jpg", alt: "Técnico desentupindo tubulação de pia com máquina rotativa" }],
    icon: "drain",
    title: "Desentupimento",
    short: "Pias, ralos, vasos sanitários, tanques e tubulações internas, com equipamento adequado a cada diâmetro.",
    lead: "Desobstrução de pias, ralos, vasos sanitários, tanques e tubulações internas, sem quebra desnecessária.",
    body: [
      "O entupimento é quase sempre o sintoma de algo que se acumulou ao longo do tempo: gordura, resíduos sólidos, incrustação ou objetos na linha. Por isso o atendimento começa pela identificação do ponto e da causa da obstrução, e só depois pela escolha do equipamento.",
      "Trabalhamos com máquinas rotativas e hidrojato dimensionados para o diâmetro e o material de cada tubulação, o que permite desobstruir a linha preservando a instalação existente.",
    ],
    includes: [
      "Desentupimento de pias de cozinha e lavatórios",
      "Desentupimento de ralos e caixas sifonadas",
      "Desentupimento de vasos sanitários e mictórios",
      "Desentupimento de tanques e máquinas de lavar",
      "Desobstrução de tubulações e ramais internos",
      "Teste de escoamento ao final do serviço",
    ],
    applications: ["Residências e condomínios", "Escritórios e lojas", "Restaurantes e cozinhas industriais", "Escolas, clínicas e hospitais"],
    faq: [
      { q: "É preciso quebrar piso ou parede?", a: "Na grande maioria dos casos, não. A desobstrução é feita pelos pontos de acesso já existentes, como ralos, sifões e caixas de inspeção. Quando há dano estrutural na tubulação, o cliente é informado antes de qualquer intervenção." },
      { q: "Como é feito o orçamento?", a: "O valor depende do ponto entupido, do diâmetro da tubulação e do acesso. Após a avaliação, o orçamento é apresentado antes do início do serviço." },
    ],
  },
  {
    slug: "desentupimento-de-esgoto",
    clips: [{ name: "desentupimento-ralo", label: "Desobstrução de rede de esgoto pelo ralo" }],
    photos: [{ file: "esgoto-caixa.jpg", alt: "Máquina rotativa desobstruindo rede de esgoto pela caixa de inspeção" }],
    icon: "sewer",
    title: "Desentupimento de esgoto e colunas",
    short: "Redes de esgoto, colunas prediais, caixas de inspeção e ramais externos de imóveis e condomínios.",
    lead: "Desobstrução de redes de esgoto, colunas prediais, caixas de inspeção e ramais externos.",
    body: [
      "Redes de esgoto e colunas prediais atendem vários pontos ao mesmo tempo. Quando obstruem, o retorno aparece em mais de uma unidade e o problema deixa de ser individual: passa a ser do prédio ou da operação inteira.",
      "Nesses casos atuamos a partir das caixas de inspeção e dos pontos de visita, com hidrojateamento e equipamentos rotativos de maior porte, desobstruindo o trecho e removendo o material acumulado ao longo da linha.",
    ],
    includes: [
      "Desentupimento de rede de esgoto predial",
      "Desentupimento de colunas e prumadas",
      "Limpeza de caixas de inspeção e de passagem",
      "Desobstrução de ramais externos até a rede pública",
      "Desentupimento de redes pluviais",
      "Orientação sobre manutenção preventiva da rede",
    ],
    applications: ["Condomínios verticais e horizontais", "Galpões e indústrias", "Centros comerciais", "Prédios públicos"],
    faq: [
      { q: "Qual a diferença entre entupimento de ramal e de coluna?", a: "O ramal atende um único ponto ou unidade. A coluna recebe o esgoto de vários andares. Quando o retorno aparece em mais de uma unidade ou nos andares mais baixos, a obstrução normalmente está na coluna ou na rede." },
      { q: "O condomínio pode contratar manutenção periódica?", a: "Sim. A limpeza programada de colunas, caixas e redes reduz ocorrências e pode ser formalizada em contrato, com periodicidade definida conforme o uso do imóvel." },
    ],
  },
  {
    slug: "hidrojateamento",
    icon: "jet",
    title: "Hidrojateamento",
    short: "Limpeza de tubulações e redes com jato de água em alta pressão, removendo gordura e incrustações das paredes do tubo.",
    lead: "Limpeza de tubulações, redes e galerias com jato de água em alta pressão.",
    body: [
      "O hidrojateamento usa água em alta pressão para remover gordura, lodo, areia e incrustações aderidas à parede interna da tubulação. Diferente da desobstrução pontual, ele limpa a seção inteira do tubo, devolvendo a vazão original da linha.",
      "É o método indicado para redes de maior diâmetro, linhas com histórico de entupimento recorrente e para manutenção preventiva em condomínios, cozinhas industriais e plantas fabris.",
    ],
    includes: [
      "Hidrojateamento de redes de esgoto e pluviais",
      "Limpeza de tubulações de gordura",
      "Limpeza de colunas e prumadas",
      "Desobstrução de galerias e bueiros",
      "Limpeza de caixas de passagem e inspeção",
      "Serviço combinado com sucção de resíduos, quando necessário",
    ],
    applications: ["Condomínios", "Indústrias", "Restaurantes e praças de alimentação", "Obras e empreendimentos em entrega"],
    faq: [
      { q: "O hidrojateamento danifica a tubulação?", a: "Não, quando a pressão e o bico são dimensionados para o diâmetro e o material do tubo. Essa avaliação é feita antes do início do serviço." },
      { q: "Com que frequência a limpeza deve ser feita?", a: "Depende do uso. Redes que recebem gordura, como as de cozinhas comerciais, exigem intervalos menores. A periodicidade é definida na avaliação e pode ser prevista em contrato." },
    ],
  },
  {
    slug: "limpa-fossa",
    photos: [
      { file: "succao.jpg", alt: "Técnico da Game Desentupidora em serviço de sucção com mangote" },
      { file: "caminhao.jpg", alt: "Caminhão a vácuo da Game Desentupidora em atendimento noturno" },
    ],
    icon: "truck",
    title: "Limpa fossa e sucção de resíduos",
    short: "Esgotamento de fossas, sumidouros e poços com caminhão a vácuo, e sucção de resíduos líquidos e pastosos.",
    lead: "Esgotamento de fossas sépticas, sumidouros e poços com caminhão a vácuo.",
    body: [
      "Fossas e sumidouros precisam de limpeza periódica para continuar funcionando. Quando o volume de lodo ultrapassa a capacidade do sistema, surgem mau cheiro, retorno de esgoto e risco de contaminação do solo.",
      "O esgotamento é feito por caminhão equipado com sistema de vácuo, que succiona o material diretamente para o tanque, sem contato com o ambiente. O mesmo equipamento atende a sucção de resíduos líquidos e pastosos em caixas, poços e reservatórios.",
    ],
    includes: [
      "Limpeza e esgotamento de fossa séptica",
      "Limpeza de sumidouros e filtros anaeróbios",
      "Sucção de poços de recalque e elevatórias",
      "Sucção de resíduos líquidos e pastosos",
      "Esgotamento de áreas alagadas e subsolos",
      "Transporte dos resíduos coletados",
    ],
    applications: ["Sítios, chácaras e condomínios horizontais", "Indústrias e galpões", "Postos e oficinas", "Canteiros de obra"],
    faq: [
      { q: "De quanto em quanto tempo a fossa deve ser limpa?", a: "O intervalo depende do volume da fossa e do número de usuários. Em uso residencial costuma ser anual; em uso comercial ou industrial, o intervalo é menor e deve ser definido caso a caso." },
      { q: "O caminhão precisa chegar até a fossa?", a: "Não necessariamente. O serviço é feito por mangotes, então basta que o caminhão estacione a uma distância compatível. O acesso é verificado no momento do orçamento." },
    ],
  },
  {
    slug: "limpeza-de-caixa-de-gordura",
    icon: "grease",
    title: "Limpeza de caixa de gordura",
    short: "Remoção da gordura acumulada, lavagem da caixa e desobstrução da linha, para cozinhas residenciais e comerciais.",
    lead: "Remoção da gordura acumulada, lavagem da caixa e desobstrução da tubulação de saída.",
    body: [
      "A caixa de gordura retém o que não deve seguir para a rede de esgoto. Sem limpeza, a gordura solidifica, reduz o volume útil da caixa e passa para a tubulação, que é onde os entupimentos mais difíceis começam.",
      "A limpeza remove a camada de gordura e os sólidos do fundo, lava as paredes da caixa e verifica o escoamento da saída. Em cozinhas comerciais, a rotina pode ser programada para acompanhar o volume de produção.",
    ],
    includes: [
      "Remoção de gordura e resíduos sólidos",
      "Sucção por caminhão a vácuo em caixas de maior volume",
      "Lavagem interna da caixa",
      "Hidrojateamento da tubulação de saída, quando necessário",
      "Verificação de tampa, septo e escoamento",
      "Programação de limpezas periódicas",
    ],
    applications: ["Restaurantes, bares e lanchonetes", "Condomínios", "Hotéis, hospitais e escolas", "Cozinhas industriais e refeitórios"],
    faq: [
      { q: "Qual a frequência recomendada?", a: "Em residências, a cada poucos meses. Em cozinhas comerciais o intervalo é bem menor e varia com o volume de refeições. A periodicidade adequada é indicada após a primeira limpeza." },
      { q: "A limpeza interrompe o funcionamento da cozinha?", a: "O serviço pode ser agendado fora do horário de operação, para não interferir no atendimento do estabelecimento." },
    ],
  },
  {
    slug: "limpeza-de-caixa-dagua",
    photos: [
      { file: "caixa-dagua-antes.jpg", alt: "Caixa d'água antes da limpeza, com sedimentos no fundo" },
      { file: "caixa-dagua-depois.jpg", alt: "Caixa d'água depois da limpeza e higienização" },
    ],
    icon: "tank",
    title: "Limpeza de caixa d'água",
    short: "Limpeza e higienização de caixas d'água e reservatórios de residências, condomínios e empresas.",
    lead: "Limpeza e higienização de caixas d'água, cisternas e reservatórios.",
    body: [
      "A qualidade da água que chega à torneira depende do estado do reservatório. Sedimentos, lodo e biofilme se acumulam no fundo e nas paredes com o tempo, mesmo em caixas tampadas.",
      "O serviço compreende o esvaziamento controlado, a remoção dos sedimentos, a limpeza das paredes e do fundo, a desinfecção e o enxágue antes da liberação para uso.",
    ],
    includes: [
      "Esvaziamento e remoção de sedimentos",
      "Limpeza de paredes, fundo e tampa",
      "Desinfecção do reservatório",
      "Enxágue e reabastecimento",
      "Verificação de tampa, boia e vedação",
      "Programação de limpezas periódicas",
    ],
    applications: ["Condomínios residenciais e comerciais", "Empresas e indústrias", "Escolas e clínicas", "Residências"],
    faq: [
      { q: "De quanto em quanto tempo limpar a caixa d'água?", a: "A recomendação geral dos órgãos de saúde é de limpeza a cada seis meses." },
      { q: "O abastecimento fica interrompido por quanto tempo?", a: "Apenas durante a execução. O tempo varia com o volume do reservatório e é informado no agendamento, para que o imóvel possa se programar." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
