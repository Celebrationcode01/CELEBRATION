"use client"; // Exclusivo para que TanStack Router y Framer Motion no choquen en el Servidor

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, ArrowRight, Star, X } from "lucide-react";
import { motion } from "framer-motion";
import phoneHero from "@/assets/cele.png";
import heroClouds from "@/assets/hero-clouds.jpg";
import womanButterflies from "@/assets/img68.png";
import phoneBrainDump from "@/assets/img59.PNG";
import brainWaves from "@/assets/1.png";
import brainCircuit from "@/assets/2.png";
import phoneChat from "@/assets/66.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Celebration Code — Experiencias digitales elegantes" },
      { name: "description", content: "Celebration Code crea páginas web, invitaciones digitales y experiencias interactivas para marcas, negocios y celebraciones." },
      { property: "og:title", content: "Celebration Code — Experiencias digitales elegantes" },
      { property: "og:description", content: "Celebration Code crea páginas web, invitaciones digitales y experiencias interactivas para marcas, negocios y celebraciones." },
    ],
  }),
  component: Index,
});

// Configuración de animaciones sutiles y elegantes
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut" } }
};

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="text-2xl font-semibold tracking-wide">CC</div>
    </div>
  );
}

interface NavProps {
  onOpenModal: () => void;
}

function Nav({ onOpenModal }: NavProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-20 max-w-6xl mx-auto px-6 pt-6 flex items-center justify-between"
    >
      <Logo />
      <nav className="hidden md:flex items-center gap-8 text-sm text-ink/80">
        <a href="#servicios" className="hover:text-ink transition-colors">Servicios</a>
        <a href="#proyectos" className="hover:text-ink transition-colors">Proyectos</a>
        <a href="#clientes" className="hover:text-ink transition-colors">Clientes</a>
        <a href="#contacto" className="hover:text-ink transition-colors">Contacto</a>
      </nav>
      <button 
        onClick={onOpenModal}
        className="px-4 py-2 rounded-full border border-ink/15 text-sm text-ink bg-background/60 backdrop-blur hover:bg-background transition-all hover:scale-105"
      >
        Trabaja con nosotros
      </button>
    </motion.header>
  );
}

interface HeroProps {
  onOpenModal: () => void;
}

function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-4 pb-0">
      <Nav onOpenModal={onOpenModal} />
      <div className="relative max-w-5xl mx-auto px-6 pt-16 text-center">
        {/* Aurora circle behind */}
        <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[640px] h-[640px] rounded-full border border-white/60 bg-gradient-to-b from-white/40 to-transparent blur-[1px] -z-10" />
        <div className="absolute left-1/2 top-32 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-pink-200/40 via-purple-200/30 to-blue-200/30 blur-2xl -z-10" />

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="serif text-ink text-5xl md:text-7xl leading-[1.1] relative inline-block tracking-tight"
        >
          CELEBRATION CODE
          <br />
          <span className="text-3xl md:text-5xl font-light tracking-[0.15em] block mt-2 opacity-90 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
            DISEÑO WEB
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-ink/70 max-w-md mx-auto"
        >
          Fusionamos código y sofisticación para crear sitios web, invitaciones digitales de alta gama y experiencias interactivas que hacen brillar a tu marca o evento.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-7 flex flex-col items-center gap-3"
        >
          <a href="#proyectos" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-cta text-white shadow-soft text-sm font-medium transition-all hover:scale-105 active:scale-95">
            Explorar portafolio
            <span className="w-6 h-6 rounded-full bg-white/25 inline-flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight size={14} />
            </span>
          </a>
          <div className="flex items-center gap-1 text-[oklch(0.55_0.2_280)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <p className="text-xs text-ink/60">Diseñado para marcas modernas y experiencias memorables</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative mt-10 mx-auto max-w-3xl"
        >
          <div className="relative rounded-t-[2rem] overflow-hidden">
            <img src={heroClouds} alt="" className="w-full h-[360px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
            <svg className="absolute bottom-10 left-0 w-full opacity-50" viewBox="0 0 800 60" fill="none">
              {Array.from({ length: 80 }).map((_, i) => (
                <rect key={i} x={i * 10} y={30 - Math.abs(Math.sin(i * 0.5) * 20)} width="2" height={Math.abs(Math.sin(i * 0.5) * 40) + 4} fill="white" opacity="0.7" />
              ))}
            </svg>
          </div>
          
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={phoneHero}
            alt="Celebration Code"
            className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-[280px] md:w-[320px] drop-shadow-2xl"
          />
        </motion.div>
        <div className="h-32" />
      </div>
    </section>
  );
}

function PainSection() {
  const items = [
    { 
      title: "Tu marca merece\nun espacio único.", 
      body: "Olvídate de las plantillas aburridas. Diseñamos plataformas a la medida que reflejan la verdadera esencia de tu negocio." 
    },
    { 
      title: "Invitaciones que\nemocionan al instante", 
      body: "El primer vistazo de tu celebración debe ser espectacular. Creamos pases digitales interactivos, elegantes y sin complicaciones." 
    },
    { 
      title: "Experiencias fluidas,\nresultados reales", 
      body: "Desde el menú de un restaurante hasta el portafolio corporativo; todo es intuitivo, rápido y estéticamente perfecto." 
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="serif text-ink text-4xl md:text-6xl leading-tight"
      >
        Lo digital no tiene por qué ser frío,<br />puede ser inolvidable.
      </motion.h2>
      <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-5 text-sm text-ink/60 max-w-md mx-auto"
      >
        Elevamos la presencia online de marcas premium, restaurantes con estilo y eventos que buscan dejar una huella duradera.
      </motion.p>
      
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="relative bg-gradient-card rounded-3xl p-7 text-left shadow-card overflow-hidden min-h-[220px] flex flex-col justify-end group transition-shadow hover:shadow-xl"
          >
            <div className="absolute -top-8 -left-4 w-40 h-24 rounded-full bg-white/40 blur-xl transition-transform group-hover:scale-110" />
            <div className="absolute -top-6 right-6 w-32 h-20 rounded-full bg-white/30 blur-lg transition-transform group-hover:scale-110" />
            <h3 className="serif text-2xl text-ink whitespace-pre-line relative">{it.title}</h3>
            <p className="mt-3 text-sm text-ink/60 relative">{it.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="servicios" className="max-w-6xl mx-auto px-6 py-20 text-center scroll-mt-20">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="serif text-ink text-4xl md:text-6xl leading-tight"
      >
        ¡Lo que podemos <br />crear para ti!
      </motion.h2>
      <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-5 text-sm text-ink/60 max-w-md mx-auto"
      >
        Cuéntanos tu visión y nuestro equipo se encargará de transformarla en una obra de arte digital interactiva.
      </motion.p>

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {/* Bloque de Páginas Web Adaptado: Grande en Compu, Proporcional en Cel */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 bg-gradient-card rounded-3xl shadow-card relative overflow-hidden text-left group flex flex-col sm:block"
        >
          {/* 
              CAMBIO: Contenedor de imagen modificado.
              - En celular (por defecto): Se alinea arriba, ocupa todo el ancho (`w-full`) y se ajusta a la proporción natural (`aspect-auto`). El alto es automático. 
              - En computadora (`sm:`): Vuelve a ser absoluto a la izquierda, ocupa el 48% del ancho y el 100% del alto, expandiéndose.
          */}
          <div className="sm:absolute left-0 top-0 bottom-0 w-full sm:w-[48%] h-auto sm:h-full overflow-hidden">
            <img 
              src={phoneBrainDump} 
              alt="Showcase interactivo" 
              className="w-full h-auto sm:h-full sm:object-cover object-center transition-transform duration-700 group-hover:scale-105" 
              loading="lazy" 
            />
            {/* Degradado adaptado para móvil (vertical) y computadora (horizontal) */}
            <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-transparent to-transparent to-[bg-gradient-card]" />
          </div>
          
          {/* 
              CAMBIO: Contenedor de contenido modificado.
              - En celular (por defecto): Toma el ancho completo (`w-full`) y usa margen superior automático para separarse de la foto arriba (`mt-10`).
              - En computadora (`sm:`): Se alinea a la derecha, ocupa el 48% y usa relleno (`p-8 md:p-10`) para espaciarse.
          */}
          <div className="p-8 md:p-10 flex flex-col justify-between h-full relative z-10 w-full sm:w-auto sm:ml-auto">
            <div className="text-[10px] bg-white/70 text-ink/80 rounded-full px-3 py-1 w-fit font-medium tracking-wider uppercase backdrop-blur-sm mb-10 sm:mb-0">
              📍 Funcionalidades Comerciales
            </div>

            {/* CAMBIO: Contenedor interno modificado. 
                - En celular (por defecto): Alineado normal.
                - En computadora (`sm:`): Alineado a la derecha, con el ancho que le corresponde (`w-[48%]`).
            */}
            <div className="sm:w-[48%] flex flex-col justify-center">
              <h3 className="serif text-3xl md:text-4xl text-ink leading-tight">
                Páginas web<br />inmersivas y<br />de alta gama.
              </h3>
              <p className="mt-3 text-xs md:text-sm text-ink/70 leading-relaxed">
                Creamos plataformas robustas y estéticas integrando herramientas esenciales para conectar con tu público local.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-ink/80 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Botones de ruta directa y geolocalización.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  Horarios de apertura dinámicos e inteligentes.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Confirmación de asistencia.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ... (El resto del código de `FeaturesSection` permanece igual que antes) ... */}

      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    { 
      title: "Pims", 
      type: "Website de Bubble Tea Shop", 
      img: brainWaves,
      link: "https://pims.restless-resonance-49cc.workers.dev" 
    },
    { 
      title: "Glow Cases", 
      type: "Website de cases para celulares", 
      img: brainCircuit,
      link: "https://celebrationcode01.github.io/Glow___Cases/" 
    }
  ];

  return (
    <section id="proyectos" className="bg-[oklch(0.12_0.04_280)] text-white py-24 px-6 overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="serif text-4xl md:text-6xl leading-tight"
        >
          Portafolio de Proyectos
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-5 text-sm text-white/60 max-w-md mx-auto"
        >
          Una muestra selecta de las experiencias digitales interactivas y plataformas a la medida que hemos desarrollado.
        </motion.p>

        <div className="mt-14 grid md:grid-cols-2 gap-8 text-left">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group"
            >
              <a 
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 overflow-hidden flex items-center justify-center aspect-[4/3] block"
              >
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="rounded-2xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-2xl" 
                  loading="lazy" 
                />
              </a>
              
              <div className="mt-5 px-2 flex justify-between items-center">
                <div>
                  <h3 className="serif text-2xl text-white">{proj.title}</h3>
                  <p className="text-sm text-white/50 mt-1">{proj.type}</p>
                </div>
                <a 
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 inline-flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all cursor-pointer"
                >
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const quotes = [
    { text: "Nuestra boda dio un salto de elegancia increíble gracias a la invitación interactiva. Todos los invitados quedaron fascinados.", name: "Sofía & Alejandro", role: "Celebración Privada" },
    { text: "Celebration Code transformó el menú digital de nuestro restaurante en una experiencia visual hermosa que aumentó las órdenes.", name: "Carlos Fernández", role: "Ceo de Grupo Gastronómico" },
    { text: "Un equipo profesional, detallista y con un sentido de la estética impecable. Captaron la esencia de mi marca desde el día uno.", name: "Diana Estévez", role: "Empresaria" },
  ];

  return (
    <section id="clientes" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
      <div className="text-center">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="serif text-ink text-4xl md:text-6xl leading-tight"
        >
          Proyectos que inspiran<br />opiniones significativas
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-5 text-sm text-ink/60 max-w-md mx-auto"
        >
          Historias de marcas y celebraciones que elevaron su presencia digital con nosotros.
        </motion.p>
      </div>
      <div className="mt-14 grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <img src={phoneChat} alt="" className="w-[280px] md:w-[340px]" loading="lazy" />
        </motion.div>
        <div className="space-y-4">
          {quotes.map((q, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-gradient-card rounded-2xl p-6 shadow-card"
            >
              <p className="text-sm text-ink/80 italic">"{q.text}"</p>
              <p className="mt-3 text-sm font-medium text-ink">{q.name}</p>
              <p className="text-xs text-ink/50">{q.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "¿Cuánto tiempo toma diseñar y desarrollar un sitio web a la medida?",
      a: "El tiempo estimado para un sitio web corporativo o de marca es de 1 semana, dependiendo de la complejidad de las secciones y de la interactividad que requiera tu proyecto."
    },
    {
      q: "¿Cómo funciona el proceso de confirmación en las invitaciones digitales?",
      a: "Tus invitados reciben un enlace exclusivo y elegante. Al ingresar, pueden confirmar su asistencia, elegir sus platillos o restricciones alimenticias, y los datos se actualizan automáticamente tiempo real para que tengas el control absoluto."
    },
    {
      q: "¿Puedo actualizar la información de mi sitio web después del lanzamiento?",
      a: "¡Por supuesto! Desarrollamos plataformas intuitivas para que puedas realizar cambios básicos de texto o imágenes de forma sencilla, o bien, podemos encargarnos del mantenimiento continuo de tu sitio."
    },
    {
      q: "¿Qué necesito proporcionar para comenzar con el diseño?",
      a: "Para iniciar, necesitaremos tu logotipo actual (si cuentas con uno), los textos principales que deseas incluir, fotografías de alta calidad de tu negocio y una plática previa para entender la vibra y los objetivos de tu marca."
    },
    {
      q: "¿Los proyectos incluyen hosting y dominio?",
      a: "¡Sí! Tu proyecto incluye hosting cloud de alta velocidad y libre de mantenimiento de por vida. Desplegamos tu página en servidores globales ultra seguros. Respecto al dominio, la web se entrega lista bajo un subdominio gratuito de nuestra marca o la plataforma, listo para compartir desde el día uno."
    }
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="max-w-3xl mx-auto px-6 py-24 scroll-mt-20">
      <div className="text-center">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="serif text-ink text-4xl md:text-6xl leading-tight"
        >
          ¿Tienes dudas? Te guiamos<br />en todo el proceso
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-5 text-sm text-ink/60 max-w-md mx-auto"
        >
          Resolvemos las preguntas más comunes para comenzar a trabajar juntos con total claridad.
        </motion.p>
      </div>

      <div className="mt-10 space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/70 hover:bg-white rounded-[2rem] px-6 py-4 shadow-sm transition-all duration-300 border border-ink/5 overflow-hidden"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left text-sm font-medium text-ink focus:outline-none"
              >
                <span className="pr-4">{faq.q}</span>
                <span className="w-7 h-7 rounded-full bg-background border border-ink/10 inline-flex items-center justify-center shrink-0 transition-transform duration-300">
                  {isOpen ? <X size={14} className="rotate-90 text-purple-600" /> : <Plus size={14} />}
                </span>
              </button>

              <motion.div
                initial={false}
                animate={{ 
                  height: isOpen ? "auto" : 0, 
                  opacity: isOpen ? 1 : 0,
                  marginTop: isOpen ? 12 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-xs text-ink/70 leading-relaxed text-left"
              >
                <div className="pb-2 border-t border-ink/5 pt-3">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

interface CtaSectionProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function CtaSection({ isOpen, setIsOpen }: CtaSectionProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }
  };

  return (
    <section id="contacto" className="max-w-5xl mx-auto px-6 pb-20 scroll-mt-20">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleIn}
        className="relative rounded-3xl overflow-hidden bg-gradient-card shadow-soft p-12 text-center border border-white/60"
      >
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-gradient-orb blur-sm" />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-pink-300 via-purple-400 to-blue-400 blur-md" />
        <div className="relative pt-16">
          <h2 className="serif text-ink text-4xl md:text-5xl leading-tight">¡Contáctanos!<br /></h2>
          <p className="mt-4 text-sm text-ink/60 max-w-md mx-auto">
            Hablemos de tu próximo gran proyecto de diseño o de esa celebración única.
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <button 
              onClick={() => setIsOpen(true)}
              className="px-5 py-3 rounded-full bg-gradient-cta text-white text-sm inline-flex items-center gap-2 shadow-soft transition-transform hover:scale-105 active:scale-95"
            >
              Cotizar mi proyecto
            </button>
          </div>
        </div>
      </motion.div>

      {/* MODAL PREMIUM FLOTANTE (POPUP) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => { setIsOpen(false); setSubmitted(false); }} />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-md overflow-hidden bg-white/90 border border-white/60 shadow-2xl rounded-3xl p-8 backdrop-blur-xl z-10 text-center"
          >
            <button 
              onClick={() => { setIsOpen(false); setSubmitted(false); }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink/5 text-ink/60 transition-colors"
            >
              <X size={16} />
            </button>

            {!submitted ? (
              <>
                <h3 className="serif text-2xl text-ink mb-1">Iniciar Cotización</h3>
                <p className="text-xs text-ink/60 mb-6">Platícanos tu idea para Celebration Code</p>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <input type="hidden" name="access_key" value="dbacf3f1-9d4a-470c-b54e-04dc97680f07" />
                  <input type="hidden" name="subject" value="Nueva Cotización - Celebration Code" />

                  <div>
                    <label className="block text-[10px] font-bold text-ink/50 tracking-wider uppercase mb-1">Nombre Completo</label>
                    <input 
                      required 
                      type="text" 
                      name="name" 
                      className="w-full px-4 py-2.5 text-sm bg-white/80 border border-ink/10 rounded-xl focus:outline-none focus:border-purple-400 transition-colors text-ink" 
                      placeholder="Ej. Valeria Mata" 
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-ink/50 tracking-wider uppercase mb-1">Correo Electrónico</label>
                    <input 
                      required 
                      type="email" 
                      name="email" 
                      className="w-full px-4 py-2.5 text-sm bg-white/80 border border-ink/10 rounded-xl focus:outline-none focus:border-purple-400 transition-colors text-ink" 
                      placeholder="valeria@ejemplo.com" 
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-ink/50 tracking-wider uppercase mb-1">Mensaje o idea del proyecto</label>
                    <textarea 
                      required 
                      name="message" 
                      rows={3} 
                      className="w-full px-4 py-2.5 text-sm bg-white/80 border border-ink/10 rounded-xl focus:outline-none focus:border-purple-400 transition-colors text-ink resize-none" 
                      placeholder="Cuéntanos brevemente sobre tu negocio o evento..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full mt-2 py-3 rounded-full bg-gradient-cta text-white font-medium text-sm shadow-soft text-center transition-transform hover:scale-[1.02] active:scale-95"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center mx-auto text-xl font-bold mb-4 shadow-soft">✓</div>
                <h3 className="serif text-2xl text-ink">¡Solicitud Enviada!</h3>
                <p className="text-xs text-ink/70 mt-2 max-w-xs mx-auto leading-relaxed">
                  Gracias por escribirnos. Analizaremos tu idea y te responderemos a tu correo en menos de 24 horas para comenzar a diseñar juntos.
                </p>
                <button 
                  onClick={() => { setIsOpen(false); setSubmitted(false); }}
                  className="mt-6 px-6 py-2 rounded-full border border-ink/10 text-xs text-ink/60 hover:bg-ink/5 transition-colors"
                >
                  Cerrar ventana
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 pb-10 flex flex-wrap items-center justify-between gap-4 text-xs text-ink/60">
      <div className="flex items-center gap-2">
        <Logo />
        <span className="text-ink font-medium">Celebration Code</span>
      </div>
      
      <div className="flex items-center gap-3">
        <a 
          href="https://www.instagram.com/celebrationcode?igsh=MXE2azZqcDAydnVzcQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-full border border-ink/15 text-[10px] tracking-wider font-medium hover:bg-ink/5 hover:text-ink transition-colors inline-block"
        >
          IG
        </a>
        <a 
          href="https://www.facebook.com/share/17di7Rhb6Y/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-full border border-ink/15 text-[10px] tracking-wider font-medium hover:bg-ink/5 hover:text-ink transition-colors inline-block"
        >
          FB
        </a>
      </div>
      
      <p>© 2026 Celebration Code. Diseñado con code.</p>
    </footer>
  );
}

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-gradient-soft min-h-screen overflow-hidden">
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <PainSection />
      <FeaturesSection />
      <ProjectsSection /> 
      <TestimonialsSection />
      <FaqSection />
      <CtaSection isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <Footer />
    </main>
  );
}