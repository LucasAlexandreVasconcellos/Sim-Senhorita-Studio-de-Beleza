"use client";

import { useState } from "react";
import { ScissorsIcon, SparkleIcon, LocationSolidIcon } from "./icons";

const PaletteIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.7-.8 1.7-1.7 0-.4-.2-.8-.4-1.1-.3-.4-.5-.9-.5-1.4 0-1.1.9-2 2-2h2.2c3.9 0 7-3.1 7-7 0-4.8-5.4-8.8-12-8.8Z" />
  </svg>
);

const HeartHandIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const EyeSparkIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export interface WheelItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const WHEEL_ITEMS: WheelItem[] = [
  {
    id: "coloristas",
    tag: "Especialidade",
    title: "Coloristas & Cortes",
    description: "Loiros impecáveis, morenas iluminadas e cortes sob medida.",
    icon: ScissorsIcon,
  },
  {
    id: "tratamentos",
    tag: "Saúde dos Fios",
    title: "Nutrição & Cronograma",
    description: "Tratamentos profundos de restauração, hidratação e brilho que renovam os fios.",
    icon: SparkleIcon,
  },
  {
    id: "unhas",
    tag: "Nail Care",
    title: "Unhas & Alongamento",
    description: "Manicure, pedicure e alongamento com delicadeza e padrão hospitalar de higiene.",
    icon: HeartHandIcon,
  },
  {
    id: "sobrancelhas",
    tag: "Olhar Marcante",
    title: "Design & Micropigmentação",
    description: "Design personalizado e micropigmentação sutil para harmonizar seu rosto.",
    icon: EyeSparkIcon,
  },
  {
    id: "maquiagem",
    tag: "Make & Eventos",
    title: "Produção & Beleza",
    description: "Make refinada e duradoura para ensaios, noivas e ocasiões especiais.",
    icon: PaletteIcon,
  },
  {
    id: "localizacao",
    tag: "Studio",
    title: "Bahamas Center — DF",
    description: "Águas Claras Sul, 1º andar (Lojas 123/124). Atendimento com hora marcada.",
    icon: LocationSolidIcon,
  },
];

export default function CircleOptionWheel() {
  const [activeIdx, setActiveIdx] = useState(0);

  const total = WHEEL_ITEMS.length;
  // Radius precisely measured to fit within a 130px container without leaking
  const radius = 48;
  const activeItem = WHEEL_ITEMS[activeIdx];
  const ActiveIcon = activeItem.icon;

  return (
    <div className="wheel-container" role="region" aria-label="Especialidades Sim Senhorita">
      {/* Dial Wheel - completely contained */}
      <div className="wheel-dial-wrapper">
        <div
          className="wheel-track"
          style={{
            transform: `rotate(-${activeIdx * (360 / total)}deg)`,
          }}
        >
          {/* Subtle perimeter track */}
          <div className="wheel-ring" aria-hidden="true" />

          {WHEEL_ITEMS.map((item, idx) => {
            const angleDeg = idx * (360 / total) - 90;
            const angleRad = (angleDeg * Math.PI) / 180;
            const x = Math.round(radius * Math.cos(angleRad));
            const y = Math.round(radius * Math.sin(angleRad));
            const isSelected = idx === activeIdx;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                className={`wheel-node ${isSelected ? "is-selected" : ""}`}
                style={{
                  transform: `translate(${x}px, ${y}px) rotate(${activeIdx * (360 / total)}deg)`,
                }}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Selecionar ${item.title}`}
                aria-pressed={isSelected}
              >
                <Icon width={14} height={14} />
              </button>
            );
          })}
        </div>

        {/* Central hub */}
        <div className="wheel-hub" aria-hidden="true">
          <div className="wheel-hub-icon">
            <ActiveIcon width={16} height={16} />
          </div>
          <span className="wheel-hub-indicator">
            {activeIdx + 1}/{total}
          </span>
        </div>
      </div>

      {/* Dynamic text card */}
      <div className="wheel-info-card">
        <div className="wheel-info-header">
          <span className="wheel-tag">{activeItem.tag}</span>
          <div className="wheel-dots" aria-hidden="true">
            {WHEEL_ITEMS.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`wheel-dot ${i === activeIdx ? "is-active" : ""}`}
                onClick={() => setActiveIdx(i)}
                aria-label={`Ir para ${WHEEL_ITEMS[i].title}`}
              />
            ))}
          </div>
        </div>

        <h3 className="wheel-title">{activeItem.title}</h3>
        <p className="wheel-desc">{activeItem.description}</p>

        <div className="wheel-controls">
          <button
            type="button"
            className="wheel-arrow-btn"
            onClick={() => setActiveIdx((prev) => (prev - 1 + total) % total)}
            aria-label="Opção anterior"
          >
            ←
          </button>
          <span className="wheel-hint">Selecione ou gire a roda</span>
          <button
            type="button"
            className="wheel-arrow-btn"
            onClick={() => setActiveIdx((prev) => (prev + 1) % total)}
            aria-label="Próxima opção"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
