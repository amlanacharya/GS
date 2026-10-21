const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Sends a paper lantern drifting up from a point on screen, then removes it.
export function releaseLantern(x, y, { delay = 0, scale = 1 } = {}) {
  if (reducedMotion()) return;
  const el = document.createElement("span");
  el.className = "wish-lantern";
  el.setAttribute("aria-hidden", "true");
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  document.body.appendChild(el);

  const rise = y + 120;
  const drift = (Math.random() - 0.5) * 80;
  const anim = el.animate(
    [
      { transform: `translate(-50%, -50%) scale(${scale * 0.4})`, opacity: 0 },
      { transform: `translate(calc(-50% + ${drift * 0.3}px), calc(-50% - ${rise * 0.1}px)) scale(${scale})`, opacity: 1, offset: 0.12 },
      { transform: `translate(calc(-50% + ${drift}px), calc(-50% - ${rise}px)) scale(${scale * 0.8})`, opacity: 0 },
    ],
    { duration: 4200 + Math.random() * 1200, delay, easing: "cubic-bezier(0.33, 1, 0.68, 1)", fill: "backwards" }
  );
  anim.onfinish = () => el.remove();
  anim.oncancel = () => el.remove();
}

export function releaseLanterns(x, y, count = 5) {
  for (let i = 0; i < count; i += 1) {
    releaseLantern(x + (i - count / 2) * 28, y, { delay: i * 140, scale: 0.8 + (i % 3) * 0.2 });
  }
}
