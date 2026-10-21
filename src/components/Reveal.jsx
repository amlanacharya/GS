import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, y = 36, className = "", as = "div" }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

export function SectionTitle({ eyebrow, title, light = false }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl px-4 text-center sm:mb-14">
      <p className={`font-script text-xl italic sm:text-2xl ${light ? "text-gold" : "text-lantern"}`}>{eyebrow}</p>
      <h2 className={`mt-1 font-display text-3xl font-bold sm:text-5xl ${light ? "text-cream" : "text-navy"}`}>{title}</h2>
      <div className="mx-auto mt-4 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gold" />
        <span className="h-2 w-2 rotate-45 bg-gold" />
        <span className="h-px w-12 bg-gold" />
      </div>
    </Reveal>
  );
}
