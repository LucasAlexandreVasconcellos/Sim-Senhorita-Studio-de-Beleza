"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL, MAPS_URL, NAV_LINKS } from "../data";
import { CloseIcon, MenuIcon, MoonIcon, PinIcon, SearchIcon, SunIcon } from "./icons";

type Theme = "light" | "dark";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const toggleTheme = () => {
    const current = document.documentElement.dataset.theme as Theme | undefined;
    const next: Theme = current === "dark" ? "light" : "dark";

    const updateDOM = () => {
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("ss-theme", next);
      } catch {}
    };

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(updateDOM);
    } else {
      updateDOM();
    }
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#inicio" className="logo" id="logo-link" aria-label="Sim Senhorita — início">
          Sim Senhorita
        </a>

        <nav className={`main-nav${open ? " is-open" : ""}`} aria-label="Principal">
          <ul>
            {NAV_LINKS.map((l, i) => (
              <li key={l.label}>
                <a
                  id={`nav-${l.label.toLowerCase().normalize("NFD").replace(/[^a-z]/g, "")}`}
                  href={l.href}
                  className={i === 0 ? "is-active" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn btn-solid nav-mobile-cta">
            Agendar horário
          </a>
        </nav>

        <div className="header-actions">
          <a href="#servicos" className="icon-btn" id="btn-search" aria-label="Ver serviços">
            <SearchIcon />
          </a>
          <a href={MAPS_URL} target="_blank" rel="noopener" className="icon-btn" id="btn-map" aria-label="Ver no mapa">
            <PinIcon />
          </a>
          <button
            type="button"
            className="icon-btn theme-toggle"
            id="btn-theme"
            onClick={toggleTheme}
            aria-label="Alternar entre modo claro e escuro"
          >
            <span className="theme-icon sun"><SunIcon /></span>
            <span className="theme-icon moon"><MoonIcon /></span>
          </button>
          <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-header" id="btn-header-book">
            Agendar
          </a>
          <button
            type="button"
            className="icon-btn menu-toggle"
            id="btn-menu"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
