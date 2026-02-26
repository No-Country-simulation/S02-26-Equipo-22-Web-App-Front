"use client";

import { LifeBuoy, MessageSquare, ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: 1,
    icon: ShieldAlert,
    title: "Garantía de Transacción",
    description:
      "Si experimentas irregularidades en el proceso de pago o la documentación del ejemplar no coincide con lo verificado, activamos nuestro protocolo de protección inmediata. Retenemos los fondos y mediamos entre las partes.",
    highlight: "Seguridad Financiera",
  },
  {
    id: 2,
    icon: MessageSquare,
    title: "Mediación de Conflictos",
    description:
      "Contamos con un equipo de expertos ecuestres que actúan como árbitros en disputas sobre el estado de salud o condiciones de entrega. Buscamos resoluciones justas basadas en los contratos estandarizados de nuestra plataforma.",
    highlight: "Soporte Técnico",
  },
  {
    id: 3,
    icon: CheckCircle2,
    title: "Verificación de Reclamaciones",
    description:
      "Cualquier reporte sobre un anuncio o usuario es investigado en menos de 24 horas. Mantenemos la integridad de la red eliminando cualquier actor que no cumpla con nuestros estándares éticos de venta.",
    highlight: "Control de Calidad",
  },
];

export default function ResolucionProblemasPage() {
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
          Centro de Asistencia
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
          Soluciones rápidas para <br />
          <em style={{ color: "#C9A24D", fontStyle: "italic" }}>tu tranquilidad.</em>
        </h1>
      </header>

      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 48px" }}>
        {categories.map((item, index) => (
          <section
            key={item.id}
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
                  backgroundColor: "rgba(31, 20, 13, 0.03)",
                  color: "#1F140D",
                }}
              >
                <item.icon size={60} strokeWidth={1} />
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
                {item.highlight}
              </span>
              <h2 style={{ 
                fontSize: "28px", 
                marginTop: "12px", 
                marginBottom: "24px",
                color: "#1F140D"
              }}>
                {item.title}
              </h2>
              <p style={{ 
                fontSize: "18px", 
                lineHeight: "1.8", 
                color: "#4A3F35",
                fontFamily: "system-ui, sans-serif",
                fontWeight: "300"
              }}>
                {item.description}
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
            ¿No encuentras lo que buscas?
          </h3>
          <p style={{ 
            opacity: "0.8", 
            marginBottom: "40px", 
            fontFamily: "system-ui, sans-serif",
            lineHeight: "1.6" 
          }}>
            Nuestro equipo de soporte humano está disponible para asistirte en casos complejos o emergencias técnicas.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[#C9A24D] text-[#1F140D] font-bold py-4 px-10 rounded-full hover:bg-[#9E7C32] transition-all duration-300 group shadow-lg"
            style={{ textDecoration: 'none' }}
          >
            Contactar a un asesor
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </footer>
    </div>
  );
}