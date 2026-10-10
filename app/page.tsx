import type { CSSProperties } from "react";
import Image from "next/image";
import Header from "./components/Header";
import CircleOptionWheel from "./components/CircleOptionWheel";
import {
  ArrowIcon,
  CalendarIcon,
  GoogleIcon,
  InstagramIcon,
  PinIcon,
  WhatsappIcon,
} from "./components/icons";
import {
  BOOKING_URL,
  BUSINESS,
  DIRECTIONS_URL,
  INSTAGRAM_URL,
  MAP_EMBED_URL,
  MAPS_URL,
  REVIEWS_URL,
  SERVICES,
  WHATSAPP_URL,
} from "./data";

const d = (delay: string) => ({ "--d": delay }) as CSSProperties;


const SOCIALS = [
  { Icon: InstagramIcon, href: INSTAGRAM_URL, label: "Instagram", id: "social-instagram" },
  { Icon: WhatsappIcon, href: WHATSAPP_URL, label: "WhatsApp", id: "social-whatsapp" },
  { Icon: GoogleIcon, href: MAPS_URL, label: "Google Maps", id: "social-google" },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ================= HERO ================= */}
        <section id="inicio" className="hero" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <Image
              src="/hero-light.jpg"
              alt=""
              fill
              preload
              sizes="(max-width: 860px) 100vw, 65vw"
              className="hero-img hero-img-light"
            />
            <Image
              src="/hero-dark.jpg"
              alt=""
              fill
              sizes="(max-width: 860px) 100vw, 65vw"
              className="hero-img hero-img-dark"
            />
          </div>

          <div className="hero-content">
            <div className="hero-copy">
              <h1 id="hero-title" className="hero-title reveal" style={d("0.1s")}>
                Desperte Sua
                <br />
                Beleza Natural
              </h1>
              <p className="hero-sub reveal" style={d("0.25s")}>
                Cabelos saudáveis, cor impecável e um atendimento que
                <br className="br-desktop" /> faz você se sentir única, do jeito que você é.
              </p>
              <div className="hero-ctas reveal" style={d("0.4s")}>
                <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn btn-solid" id="cta-book">
                  Agendar Meu Horário
                </a>
                <a href={DIRECTIONS_URL} target="_blank" rel="noopener" className="btn btn-outline" id="cta-directions">
                  Como Chegar ao Studio
                </a>
              </div>
            </div>

            <div className="hero-wheel-wrap reveal" style={d("0.6s")}>
              <CircleOptionWheel />
            </div>

            <ul className="hero-socials reveal" style={d("0.75s")} aria-label="Redes sociais">
              {SOCIALS.map(({ Icon, href, label, id }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener" aria-label={label} id={id}>
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= SERVIÇOS ================= */}
        <section id="servicos" className="section services" aria-labelledby="services-title">
          <div className="container">
            <header className="section-head">
              <span className="eyebrow">Nossos serviços</span>
              <h2 id="services-title" className="section-title">
                Cuidado completo,
                <br />
                do fio ao olhar
              </h2>
              <p className="section-lead">
                Um studio pensado para a mulher que quer sair renovada — com técnica, produtos de qualidade
                e aquele carinho que transforma o seu dia.
              </p>
            </header>

            <ul className="services-grid">
              {SERVICES.map((s) => (
                <li key={s.n} className="service-card">
                  <span className="service-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <a href={BOOKING_URL} target="_blank" rel="noopener" className="service-link" id={`service-${s.n}`}>
                    Agendar <ArrowIcon width={14} height={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= AVALIAÇÕES ================= */}
        <section id="avaliacoes" className="section reviews" aria-labelledby="reviews-title">
          <div className="container reviews-inner">
            <span className="quote-mark" aria-hidden="true">“</span>
            <span className="eyebrow">Avaliações</span>
            <h2 id="reviews-title" className="section-title">
              Quem vem, volta.
              <br />E indica.
            </h2>
            <p className="section-lead">
              A opinião das nossas clientes é o nosso maior orgulho. Leia as avaliações reais no Google
              e conte também como foi a sua experiência no Sim Senhorita.
            </p>
            <div className="hero-ctas center">
              <a href={REVIEWS_URL} target="_blank" rel="noopener" className="btn btn-solid" id="cta-reviews">
                <GoogleIcon /> Ver avaliações no Google
              </a>
              <a href={REVIEWS_URL} target="_blank" rel="noopener" className="btn btn-outline" id="cta-write-review">
                Deixar minha avaliação
              </a>
            </div>
          </div>
        </section>

        {/* ================= CONTATO / LOCALIZAÇÃO ================= */}
        <section id="contato" className="section contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div className="contact-info">
              <span className="eyebrow">Visite o studio</span>
              <h2 id="contact-title" className="section-title">
                Esperamos por
                <br />
                você, senhorita.
              </h2>
              <ul className="contact-list">
                <li>
                  <PinIcon />
                  <div>
                    <strong>{BUSINESS.address}</strong>
                    <span>{BUSINESS.district}</span>
                  </div>
                </li>
                <li>
                  <CalendarIcon />
                  <div>
                    <strong>Atendimento com hora marcada</strong>
                    <span>Consulte horários disponíveis e garanta o seu.</span>
                  </div>
                </li>
              </ul>
              <div className="hero-ctas">
                <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn btn-solid" id="cta-book-footer">
                  Agendar Meu Horário
                </a>
                <a href={DIRECTIONS_URL} target="_blank" rel="noopener" className="btn btn-outline" id="cta-route">
                  Traçar rota
                </a>
              </div>
            </div>
            <div className="map-frame">
              <iframe
                title="Mapa — Sim Senhorita Studio de Beleza"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="logo">Sim Senhorita</span>
          <p>
            © 2026 {BUSINESS.fullName}. Águas Claras — Brasília, DF.
          </p>
          <ul className="hero-socials static" aria-label="Redes sociais">
            {SOCIALS.map(({ Icon, href, label, id }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener" aria-label={label} id={`${id}-footer`}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
