import serviceVehicleRecovery from "@/assets/service-vehicle-recovery.jpg";
import serviceCarTowing from "@/assets/service-car-towing.jpg";
import serviceLocalCargo from "@/assets/service-local-cargo.jpg";

export const COMPANY = {
  name: "Megatron Guinchos",
  phoneDisplay: "(47) 99176-2721",
  phoneHref: "tel:+5547991762721",
  whatsappHref: "https://wa.me/5547991762721",
  address: "251, Salto Weissbach, Blumenau, Santa Catarina, CEP 89032-142",
  addressShort: "251, Salto Weissbach, Blumenau - SC, CEP 89032-142",
  hours: "Aberto 24 horas",
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
    id: "guincho-reboque",
    title: "Guincho e Reboque",
    description: "Remoção e transporte de veículos.",
    icon: "truck" as const,
  },
  {
    id: "atendimento-24h",
    title: "Atendimento 24 Horas",
    description: "Disponibilidade para contato a qualquer hora.",
    icon: "clock" as const,
  },
  {
    id: "transporte-cargas",
    title: "Transporte de Cargas",
    description: "Transporte local de cargas.",
    icon: "package" as const,
  },
];

export const SPECIALIZED_SERVICES = [
  {
    id: "guincho-veiculos",
    title: "GUINCHO E REBOQUE DE VEÍCULOS",
    description:
      "Serviço de reboque para veículos que precisam ser removidos com cuidado e segurança. Entre em contato para solicitar atendimento.",
    image: serviceVehicleRecovery,
    alt: "Imagem ilustrativa de caminhão guincho plataforma realizando a remoção de um automóvel",
  },
  {
    id: "reboque-carros",
    title: "REBOQUE DE CARROS",
    description:
      "Transporte de automóveis com atenção ao veículo durante o processo de remoção e deslocamento.",
    image: serviceCarTowing,
    alt: "Imagem ilustrativa de automóvel sendo transportado em uma plataforma de guincho",
  },
  {
    id: "transporte-cargas-locais",
    title: "TRANSPORTE LOCAL DE CARGAS",
    description:
      "Atendimento para solicitações de transporte local de cargas. Consulte as condições e a disponibilidade diretamente com a Megatron Guinchos.",
    image: serviceLocalCargo,
    alt: "Imagem ilustrativa de caminhão plataforma realizando transporte local de carga",
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
    answer: "Sim. O atendimento está indicado como disponível 24 horas.",
  },
  {
    question: "Como solicitar um guincho?",
    answer:
      "Entre em contato pelo telefone (47) 99176-2721 para informar sua necessidade e solicitar atendimento.",
  },
  {
    question: "Onde fica a Megatron Guinchos?",
    answer:
      "A empresa está localizada no bairro Salto Weissbach, em Blumenau, Santa Catarina.",
  },
  {
    question: "A empresa realiza transporte de veículos?",
    answer: "Sim. A empresa oferece serviço de reboque de veículos.",
  },
  {
    question: "A empresa realiza transporte de cargas?",
    answer:
      "Há registro de transporte local de carga nas informações fornecidas. Consulte diretamente a empresa sobre as condições e disponibilidade.",
  },
  {
    question: "Como consultar o preço do serviço?",
    answer:
      "Entre em contato diretamente para informar o tipo de serviço e solicitar um orçamento.",
  },
];