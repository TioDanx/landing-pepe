"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Image from "next/image";
import Testimonial from "./Testimonial";

export default function CasinoLanding() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [players, setPlayers] = useState(10000);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const waLink = "https://tiny.one/2p8dh8ks";

  let CTAButton = (
    <div className="flex justify-center mb-12 animate-ownPulse">
      <button>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
          onClick={() => {
            if (
              typeof window !== "undefined" &&
              typeof (window as any).fbq === "function"
            ) {
              (window as any).fbq("track", "Lead");
            }
          }}
        >
          🍀Contactar con una cajera🍀
        </a>
      </button>
    </div>
  );

  const randomizePlayers = () => {
    setTimeout(() => {
      const operation = Math.random() > 0.3 ? "+" : "-";
      const activeUsers =
        operation === "+"
          ? Math.floor(Math.random() * 100)
          : Math.floor(Math.random() * 100);
      setPlayers(players + activeUsers);
      randomizePlayers();
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (ctaRef.current) {
        const rect = ctaRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setShowStickyCTA(!isVisible);
      }
    };

    randomizePlayers();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-dvh w-full overflow-hidden text-white font-sans">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[url('/bg.webp')] bg-center bg-cover bg-no-repeat" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-black to-neutral-800 opacity-80" />
      </div>

      <div className="relative z-10 px-4 py-10 max-w-screen-xl mx-auto">
        <div className="flex justify-center mb-[-70px] mt-[-50px]">
          <Image src="/logo.png" alt="logo" width={300} height={300} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 ">
          Bienvenidos a Pepe Stars
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          🔽Reclama tu bonus haciendo click aca🔽
        </p>
        <div ref={ctaRef}>{CTAButton}</div>

        <div className="grid grid-cols-2 sm:grid-cols-3 max-w-4xl gap-3 sm:gap-5 mx-auto mb-6">
          <Card
            icon="💰"
            title="50% en el primer d3posito"
            description="Obtené un bonus del 50% en tu primer depósito."
          />
          <Card
            icon="🎯"
            title="Mínimo $2000"
            description="Ingresá al ju3go con un d3pósito mínimo de $2000."
          />
          <Card
            icon="💳"
            title="Aceptamos Mercado Pago"
            description="Pag4 con comodidad usando tu billetera favorita."
          />
          <Card
            icon="⏱️"
            title="R3tiros 24hs"
            description="Tu din3ro disponible en cualquier momento."
          />
          <Card
            icon="👥"
            title={`+${players} jugadores activos`}
            description="Únete a una comunidad que no para de crecer."
          />
          <Card
            icon="⭐"
            title="5 estrellas"
            description="Calificación perfecta por experiencia, confianza y diversión."
          />
        </div>

        <section className="relative z-10 px-4 py-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            💬 Clientes Satisfechos
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Testimonial
              name="Lucía R."
              rating={5}
              message="Muy confiable y fácil de usar. Me sorprendió lo rápido que procesan los r3tiros. ¡Volvería a jugar sin dudarlo!"
            />
            <Testimonial
              name="Carlos M."
              rating={4}
              message="Tienen mucha variedad de ju3gos y responden rápido por WhatsApp. Lo recomiendo si estás buscando un c4sino serio."
            />
            <Testimonial
              name="Julián D."
              rating={5}
              message="Se gana seguido y los bonus realmente ayudan. Muy buena atención y p4gos puntuales. ¡Gran experiencia!"
            />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <h2
            className="text-xl md:text-2xl font-bold bg-blue-700 hover:bg-blue-600 px-6 py-2 rounded-lg cursor-pointer transition-all duration-300"
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=61578328837489&rdid=4KDRtVx6hoqlwrus",
                "_blank"
              )
            }
          >
            📢 Seguinos en Facebook
          </h2>
        </div>
        {showStickyCTA && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            {CTAButton}
          </div>
        )}
        <footer className="text-center text-sm text-gray-400 border-t border-white/10 pt-4">
          Juego responsable +18 · © {new Date().getFullYear()} · Pepe Stars
        </footer>
      </div>
    </div>
  );
}
