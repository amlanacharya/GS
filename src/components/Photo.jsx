import { useState } from "react";
import Scene from "./Scene.jsx";

// Loads /photos/<id>.jpg when it exists, otherwise shows the illustrated scene.
export default function Photo({ id, alt, kind, className = "", eager = false }) {
  const [failed, setFailed] = useState(false);
  const useImage = Boolean(id) && !failed;

  return (
    <div className={`relative overflow-hidden ${className}`} aria-label={alt} role="img">
      <Scene kind={kind} dish={id} className="absolute inset-0 h-full w-full" />
      {useImage && (
        <img
          src={`/photos/${id}.jpg`}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
