// Dados institucionais centralizados: altere aqui e o site inteiro acompanha.
export const site = {
  name: "Game Desentupidora",
  legalName: "Game Desentupidora e Dedetizadora",
  tagline: "Desentupimento, hidrojateamento e limpeza técnica de sistemas de esgoto",
  cnpj: "60.204.318/0001-16",
  phoneDisplay: "(31) 9701-0128",
  phoneHref: "tel:+553197010128",
  whatsapp: "553197010128",
  // TODO: preencher quando o e-mail comercial for criado.
  email: "",
  address: {
    street: "Rua Talco, 43",
    district: "Pindorama",
    city: "Belo Horizonte",
    state: "MG",
    zip: "30880-370",
  },
  region: "Belo Horizonte e Região Metropolitana",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
};

export const addressLine = `${site.address.street} · ${site.address.district} · ${site.address.city}/${site.address.state} · CEP ${site.address.zip}`;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/empresa", label: "A empresa" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contratos", label: "Empresas e contratos" },
  { href: "/contato", label: "Contato" },
];

export const segments = [
  { title: "Condomínios", text: "Residenciais e comerciais, com programação de limpezas periódicas de caixas de gordura, colunas e redes." },
  { title: "Indústrias", text: "Hidrojateamento de redes, sucção de resíduos e manutenção de sistemas de efluentes." },
  { title: "Comércio e alimentação", text: "Restaurantes, bares, padarias, supermercados e shoppings que dependem de caixas de gordura em dia." },
  { title: "Órgãos públicos", text: "Documentação e proposta formal para dispensas, cotações e processos licitatórios." },
  { title: "Construtoras", text: "Limpeza e desobstrução de redes em obras, entregas de empreendimento e pós-obra." },
  { title: "Administradoras e síndicos", text: "Um único fornecedor para toda a carteira de imóveis, com histórico de atendimento." },
];
