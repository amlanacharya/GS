import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      role="status"
      aria-label="Loading"
    >
      <svg viewBox="0 0 80 130" width="96" height="156" className="loader-lantern" aria-hidden="true">
        <line x1="40" y1="0" x2="40" y2="22" stroke="#D4A574" strokeWidth="3" />
        <rect x="26" y="22" width="28" height="7" rx="3" fill="#D4A574" />
        <ellipse cx="40" cy="64" rx="30" ry="38" fill="#C41E3A" />
        <ellipse cx="40" cy="64" rx="14" ry="38" fill="#FF6B35" opacity="0.6" />
        <rect x="26" y="98" width="28" height="7" rx="3" fill="#D4A574" />
        <line x1="40" y1="105" x2="40" y2="128" stroke="#D4A574" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <p className="mt-6 font-script text-2xl italic text-gold">Preparing your gift...</p>
    </motion.div>
  );
}
