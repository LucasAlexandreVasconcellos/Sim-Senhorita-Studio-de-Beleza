// Central business data — edit here to update the whole site.

export const BUSINESS = {
  name: "Sim Senhorita",
  fullName: "Sim Senhorita Studio de Beleza",
  address: "Bahamas Center, 1º andar — Lojas 123/124",
  district: "Águas Claras Sul, Brasília - DF, 71929-540",
  lat: -15.8381037,
  lng: -48.0400948,
};

export const MAPS_URL =
  "https://www.google.com/maps/place/Sim+Senhorita+Studio+de+Beleza/@-15.8381037,-48.0400948,17z/data=!3m1!4b1!4m6!3m5!1s0x935a338061cb3a7b:0x2db7af5eed2f0454!8m2!3d-15.8381037!4d-48.0400948!16s%2Fg%2F11k586xcp0";

export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=-15.8381037,-48.0400948";

export const REVIEWS_URL = `${MAPS_URL}&hl=pt-BR`;

export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Sim+Senhorita+Studio+de+Beleza,+%C3%81guas+Claras,+Bras%C3%ADlia&z=17&output=embed";

export const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=556196538865&text=Ol%C3%A1%2C+tudo+bem%3F%EF%BF%BD&type=phone_number&app_absent=0";

export const BOOKING_URL = WHATSAPP_URL;

export const INSTAGRAM_URL = "https://www.instagram.com/simsenhoritass?igshid=YmMyMTA2M2Y%3D";

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#contato" },
];

export const SERVICES = [
  {
    n: "01",
    title: "Cortes & Escova",
    text: "Cortes que respeitam o seu formato de rosto e a textura natural dos fios, finalizados com escova impecável.",
  },
  {
    n: "02",
    title: "Coloração & Mechas",
    text: "Coloristas especialistas em loiros, morenas iluminadas, balayage e correção de cor com acabamento sofisticado.",
  },
  {
    n: "03",
    title: "Tratamentos Capilares",
    text: "Hidratação, nutrição e reconstrução para devolver brilho, maciez e saúde aos seus cabelos.",
  },
  {
    n: "04",
    title: "Unhas & Alongamento",
    text: "Manicure, pedicure, alongamento e nail art com cuidado, higiene e muita delicadeza.",
  },
  {
    n: "05",
    title: "Sobrancelhas & Micropigmentação",
    text: "Design personalizado e micropigmentação para valorizar o olhar de forma natural.",
  },
  {
    n: "06",
    title: "Maquiagem",
    text: "Make para eventos, noivas e ocasiões especiais — do natural ao glamouroso.",
  },
];
