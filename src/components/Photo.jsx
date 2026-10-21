import { useState } from "react";
import Scene from "./Scene.jsx";
import { AVAILABLE_PHOTOS } from "../data/photoAvailability.js";

// Loads /photos/<id>.jpg when that file exists in public/photos/, otherwise shows the illustrated scene.
export default function Photo({ id, alt, kind, className = "", eager = false }) {
  const [failed, setFailed] = useState(false);
  const useImage = AVAILABLE_PHOTOS.has(id) && !failed;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role={useImage ? undefined : "img"}
      aria-label={useImage ? undefined : alt}
    >
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
