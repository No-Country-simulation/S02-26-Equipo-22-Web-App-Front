"use client";

import { Leaf, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    id: 1,
    icon: Heart,
    title: "Bienestar Animal Prioritario",
    description:
      "La sustentabilidad comienza con el respeto. Nuestra plataforma no solo facilita transacciones, sino que garantiza que cada caballo tenga un historial de salud verificable. Al exigir transparencia médica, desincentivamos el comercio de animales en condiciones no aptas.",
    highlight: "Compromiso Ético",
  },
  {
    id: 2,
    icon: Leaf,
    title: "Huella Digital vs. Huella de Carbono",
    description:
      "Reducimos los desplazamientos innecesarios. Gracias a nuestras pruebas de video verificadas y tours virtuales de alta fidelidad, los compradores solo viajan cuando están seguros de su elección, reduciendo significativamente las emisiones de transporte en la industria.",
    highlight: "Eficiencia Operativa",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Un Legado de Transparencia",
    description:
      "Estamos construyendo un registro digital permanente. Al digitalizar documentos que históricamente se perdían o alteraban, creamos una base de datos sostenible que protege el valor del caballo y la inversión del propietario a través de las generaciones.",
    highlight: "Futuro Digital",
  },
];

export default function SustentabilidadPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F3EFE8",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        color: "#1F140D",
        padding: "0",
      }}
    >
      <header
        style={{
          padding: "100px 48px 80px",
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "#9E7C32",
            fontWeight: "bold",
          }}
        >
          Sustentabilidad y Ética
        </span>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: "400",
            marginTop: "24px",
            lineHeight: "1.1",
            letterSpacing: "-1px",
          }}
        >
          Preservando la integridad del <br />
          <em style={{ color: "#C9A24D", fontStyle: "italic" }}>mundo ecuestre.</em>
        </h1>
      </header>

      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 48px" }}>
        {sections.map((section, index) => (
          <section
            key={section.id}
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              gap: "60px",
              padding: "80px 0",
              borderTop: "1px solid rgba(158, 124, 50, 0.15)",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
              <div
                style={{
                  display: "inline-flex",
                  padding: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(201, 162, 77, 0.05)",
                  color: "#9E7C32",
                }}
              >
                <section.icon size={60} strokeWidth={1} />
              </div>
            </div>

            <div style={{ flex: "1.5", minWidth: "300px" }}>
              <span style={{ 
                color: "#9E7C32", 
                fontSize: "12px", 
                fontWeight: "bold", 
                textTransform: "uppercase",
                letterSpacing: "2px"
              }}>
                {section.highlight}
              </span>
              <h2 style={{ 
                fontSize: "28px", 
                marginTop: "12px", 
                marginBottom: "24px",
                color: "#1F140D"
              }}>
                {section.title}
              </h2>
              <p style={{ 
                fontSize: "18px", 
                lineHeight: "1.8", 
                color: "#4A3F35",
                fontFamily: "system-ui, sans-serif",
                fontWeight: "300"
              }}>
                {section.description}
              </p>
            </div>
          </section>
        ))}
      </main>

      <footer
        style={{
          backgroundColor: "#1F140D",
          color: "#F3EFE8",
          padding: "100px 48px",
          marginTop: "80px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "32px", marginBottom: "20px" }}>
            Hacia un mercado más consciente
          </h3>
          <p style={{ 
            opacity: "0.8", 
            marginBottom: "40px", 
            fontFamily: "system-ui, sans-serif",
            lineHeight: "1.6" 
          }}>
            Cada caballo verificado es un paso hacia una industria más justa y saludable. 
            Si compartes nuestra visión, únete a nuestra red de criadores certificados.
          </p>
          
          <Link 
            href="/register" 
            className="inline-flex items-center gap-2 bg-[#C9A24D] text-[#1F140D] font-bold py-4 px-10 rounded-full hover:bg-[#9E7C32] transition-all duration-300 group shadow-lg"
            style={{ textDecoration: 'none' }}
          >
            Conocer más del programa
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </footer>
    </div>
  );
}