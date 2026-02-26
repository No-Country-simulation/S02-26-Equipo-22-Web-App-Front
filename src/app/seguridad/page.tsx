"use client";

import { ShieldCheck, Lock, Eye, Scale, ArrowRight } from "lucide-react";
import Link from "next/link";

const securityMeasures = [
  {
    id: 1,
    icon: Lock,
    title: "Transacciones Blindadas",
    description:
      "Implementamos protocolos de cifrado de extremo a extremo en todas las comunicaciones y transacciones financieras. Tu información personal y bancaria nunca se comparte con terceros, garantizando un entorno de compra 100% privado.",
    highlight: "Protección de Datos",
  },
  {
    id: 2,
    icon: Eye,
    title: "Verificación de Identidad (KYC)",
    description:
      "Tanto compradores como vendedores pasan por un proceso de validación de identidad. Esto elimina perfiles falsos y asegura que detrás de cada ejemplar haya una persona o criadero real y responsable.",
    highlight: "Cero Perfiles Falsos",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Protocolo Anti-Fraude Médico",
    description:
      "Nuestros expertos revisan la consistencia de los documentos veterinarios cargados. Cruzamos datos para detectar alteraciones en informes de rayos X o certificados de salud, protegiéndote de 'ventas engañosas'.",
    highlight: "Integridad Médica",
  },
  {
    id: 4,
    icon: Scale,
    title: "Resolución Legal de Disputas",
    description:
      "En caso de discrepancias, contamos con un marco contractual estandarizado que protege a ambas partes. Ofrecemos mediación técnica para asegurar que los acuerdos se cumplan según lo pactado en la plataforma.",
    highlight: "Respaldo Jurídico",
  },
];

export default function SeguridadPage() {
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
      {/* Hero Section */}
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
          Protocolos de Confianza
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
          Tu inversión, <br />
          <em style={{ color: "#C9A24D", fontStyle: "italic" }}>protegida por expertos.</em>
        </h1>
      </header>

      {/* Secciones de Seguridad */}
      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 48px" }}>
        {securityMeasures.map((measure, index) => (
          <section
            key={measure.id}
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
            {/* Lado Icono */}
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
                <measure.icon size={60} strokeWidth={1} />
              </div>
            </div>

            {/* Lado Texto */}
            <div style={{ flex: "1.5", minWidth: "300px" }}>
              <span style={{ 
                color: "#9E7C32", 
                fontSize: "12px", 
                fontWeight: "bold", 
                textTransform: "uppercase",
                letterSpacing: "2px"
              }}>
                {measure.highlight}
              </span>
              <h2 style={{ 
                fontSize: "28px", 
                marginTop: "12px", 
                marginBottom: "24px",
                color: "#1F140D"
              }}>
                {measure.title}
              </h2>
              <p style={{ 
                fontSize: "18px", 
                lineHeight: "1.8", 
                color: "#4A3F35",
                fontFamily: "system-ui, sans-serif",
                fontWeight: "300"
              }}>
                {measure.description}
              </p>
            </div>
          </section>
        ))}
      </main>

      {/* CTA Final */}
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
            ¿Listo para comprar con total tranquilidad?
          </h3>
          <p style={{ 
            opacity: "0.8", 
            marginBottom: "40px", 
            fontFamily: "system-ui, sans-serif",
            lineHeight: "1.6" 
          }}>
            Nuestros protocolos de seguridad están diseñados para que tú solo te preocupes por encontrar al compañero equino ideal.
          </p>
          
          <Link href="/register" className="inline-flex items-center gap-2 bg-[#C9A24D] text-[#1F140D] font-bold py-4 px-10 rounded-full hover:bg-[#9E7C32] transition-all duration-300 group">
            Crear cuenta segura
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </footer>
    </div>
  );
}