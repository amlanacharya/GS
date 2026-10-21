import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

// Soft generative pentatonic pad built with the Web Audio API, so no audio file is needed.
const SCALE = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33];

function startPad(ctx) {
  const master = ctx.createGain();
  master.gain.value = 0.0;
  master.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 2);
  master.connect(ctx.destination);

  const playNote = () => {
    const freq = SCALE[Math.floor(Math.random() * SCALE.length)];
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    const t = ctx.currentTime;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.5, t + 1.2);
    gain.gain.linearRampToValueAtTime(0, t + 4.5);
    osc.connect(gain).connect(master);
    osc.start(t);
    osc.stop(t + 4.6);
  };

  playNote();
  const timer = setInterval(playNote, 1800);
  return () => {
    clearInterval(timer);
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
  };
}

export default function MusicToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef(null);
  const stopRef = useRef(null);

  useEffect(() => () => {
    if (stopRef.current) stopRef.current();
    if (ctxRef.current) ctxRef.current.close();
  }, []);

  const toggle = async () => {
    if (on) {
      if (stopRef.current) stopRef.current();
      stopRef.current = null;
      setOn(false);
      return;
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!ctxRef.current) ctxRef.current = new AudioCtx();
    await ctxRef.current.resume();
    stopRef.current = startPad(ctxRef.current);
    setOn(true);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Turn background music off" : "Turn background music on"}
      className="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy shadow-glow transition hover:scale-110"
    >
      {on ? <Music size={22} /> : <VolumeX size={22} />}
    </button>
  );
}
