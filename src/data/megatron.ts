import megatronAutoSocorro from "@/assets/megatron-auto-socorro.jpg";
import megatronResgate from "@/assets/megatron-resgate.jpg";
import megatronReboque from "@/assets/megatron-reboque.jpg";
import megatronTransporteVeiculos from "@/assets/megatron-transporte-veiculos.jpg";
import megatronTransporteCargas from "@/assets/megatron-transporte-cargas.jpg";

const WHATSAPP_MESSAGE =
  "Olá! Encontrei a Megatron Guinchos pelo site e gostaria de solicitar um atendimento.";

export const COMPANY = {
  name: "Megatron Guinchos",
  phoneDisplay: "(47) 99176-2721",
  phoneHref: "tel:+5547991762721",
  whatsappHref: `https://wa.me/5547991762721?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  address: "251, Salto Weissbach, Blumenau, Santa Catarina, CEP 89032-142",
  addressShort: "251, Salto Weissbach, Blumenau - SC, CEP 89032-142",
  region: "Blumenau e região",
  hours: "Atendimento 24 horas, de segunda a segunda",
  cnpj: "30.422.022/0001-00",
  rating: "5,0",
  reviewCount: 14,
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=251+Salto+Weissbach+Blumenau+SC+89032-142",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Megatron+Guinchos+Salto+Weissbach+Blumenau+SC",
} as const;

export const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
] as const;

export const HERO_SERVICES = [
  {
    id: "auto-socorro",
    title: "Auto Socorro",
    description: "Auxílio rápido na estrada e em imprevistos.",
    icon: "lifeBuoy" as const,
  },
  {
    id: "resgate-veicular",
    title: "Resgate Veicular",
    description: "Resgate e remoção de veículos com cuidado.",
    icon: "shieldAlert" as const,
  },
  {
    id: "guincho-reboque",
    title: "Guincho e Reboque",
    description: "Reboque de veículos com atendimento 24 horas.",
    icon: "truck" as const,
  },
  {
    id: "transporte-veiculos",
    title: "Transporte de Veículos",
    description: "Transporte seguro em caminhão plataforma.",
    icon: "carFront" as const,
  },
  {
    id: "transporte-cargas",
    title: "Transporte Local de Cargas",
    description: "Transporte local de cargas.",
    icon: "package" as const,
  },
];

export const SPECIALIZED_SERVICES = [
  {
    id: "auto-socorro",
    title: "AUTO SOCORRO",
    description:
      "Atendimento para situações em que você precisa de auxílio na estrada ou durante um imprevisto com seu veículo. Entre em contato para solicitar atendimento.",
    image: megatronAutoSocorro,
    alt: "Imagem ilustrativa de auto socorro em Blumenau e região com guincho atendendo veículo na estrada",
  },
  {
    id: "resgate-veicular",
    title: "RESGATE VEICULAR",
    description:
      "Serviço de resgate e remoção de veículos, com atenção e cuidado durante o atendimento.",
    image: megatronResgate,
    alt: "Imagem ilustrativa de resgate veicular em Blumenau com embarque cuidadoso em caminhão plataforma",
  },
  {
    id: "guincho-reboque",
    title: "GUINCHO E REBOQUE",
    description:
      "Serviço de guincho e reboque de veículos, com transporte cuidadoso e atendimento 24 horas.",
    image: megatronReboque,
    alt: "Imagem ilustrativa de guincho e reboque em Blumenau transportando automóvel em plataforma",
  },
  {
    id: "transporte-veiculos",
    title: "TRANSPORTE DE VEÍCULOS",
    description:
      "Transporte de veículos utilizando caminhão plataforma, com cuidado durante o carregamento e deslocamento.",
    image: megatronTransporteVeiculos,
    alt: "Imagem ilustrativa de transporte de veículos em Blumenau sobre caminhão plataforma",
  },
  {
    id: "transporte-cargas-locais",
    title: "TRANSPORTE LOCAL DE CARGAS",
    description:
      "Serviço de transporte local de cargas. Consulte a Megatron Guinchos sobre disponibilidade e condições de atendimento.",
    image: megatronTransporteCargas,
    alt: "Imagem ilustrativa de transporte local de cargas em Blumenau com caminhão plataforma",
  },
];

export const REVIEWS = [
  {
    author: "Erik Richard",
    text: "Ótimo atendimento, me salvou em um dia de chuva, profissional excelente e ótimo preço. Cuidadoso e atencioso, parabéns pelo serviço!",
  },
  {
    author: "Marcelo Scartazzini",
    text: "O Sr. Edson da Megatron guinchos presta um serviço de excelência, extremamente educado e atencioso. Agilidade e qualidade no atendimento, com preço mais do que justo!",
  },
  {
    author: "Isabelli Thaís",
    text: "Preço justo, atendimento rápido e eficiente.",
  },
  {
    author: "Daniel Fischer",
    text: "Ótimo serviço, preço justo. Proprietário muito solícito. Já contratei diversas vezes e sempre fui atendido com brevidade.",
  },
  {
    author: "Renan Henrique",
    text: "Ótimo profissional na cidade de Blumenau. Precisei de um socorro na parte da noite e prontamente me atendeu. Ótimo preço, super indico.",
  },
  {
    author: "LUSCIMAR RECH BERKENBROCK",
    text: "Extremamente eficiente e profissional, preço justo!",
  },
];

export const FAQ_ITEMS = [
  {
    question: "A Megatron Guinchos atende 24 horas?",
    answer: "Sim. Atendemos 24 horas, de segunda a segunda, em Blumenau e região.",
  },
  {
    question: "Como solicitar um guincho?",
    answer:
      "Entre em contato pelo WhatsApp ou telefone (47) 99176-2721 para informar sua necessidade e solicitar atendimento.",
  },
  {
    question: "Onde fica a Megatron Guinchos?",
    answer:
      "A empresa está localizada na rua 251, bairro Salto Weissbach, em Blumenau, Santa Catarina, atendendo Blumenau e região.",
  },
  {
    question: "A empresa realiza transporte de veículos?",
    answer:
      "Sim. A Megatron Guinchos realiza auto socorro, resgate veicular, guincho, reboque e transporte de veículos em caminhão plataforma.",
  },
  {
    question: "A empresa realiza transporte de cargas?",
    answer:
      "Sim. Realizamos transporte local de cargas. Consulte diretamente a Megatron Guinchos sobre disponibilidade e condições de atendimento.",
  },
  {
    question: "Como consultar o preço do serviço?",
    answer:
      "Entre em contato diretamente pelo WhatsApp ou telefone (47) 99176-2721 para informar o tipo de serviço e solicitar um orçamento.",
  },
];