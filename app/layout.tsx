import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sim Senhorita Studio de Beleza | Salão de Cabelo em Águas Claras - DF",
  description:
    "Coloração, cortes, tratamentos capilares, unhas, sobrancelhas e maquiagem no Sim Senhorita Studio de Beleza — Bahamas Center, Águas Claras, Brasília. Agende seu horário.",
  keywords: [
    "salão de beleza Águas Claras",
    "cabeleireiro Brasília",
    "colorista Águas Claras",
    "Sim Senhorita Studio de Beleza",
  ],
  openGraph: {
    title: "Sim Senhorita Studio de Beleza",
    description: "Desperte a sua beleza natural em Águas Claras - DF.",
    images: ["/hero-light.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#DEBC99",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Applies the saved theme before paint to avoid a flash of the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem('ss-theme');if(t==='dark'||t==='light'){document.documentElement.dataset.theme=t;}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-theme="light"
      suppressHydrationWarning
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
