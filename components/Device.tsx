import type { ReactNode } from "react";

type Img = { src: string; alt: string; w: number; h: number; priority?: boolean };

/** Laptop frame around a locally stored product screen (WebP in /public/img). */
export function Laptop({ src, alt, w, h, priority, className = "" }: Img & { className?: string }) {
  return (
    <figure className={`laptop ${className}`}>
      <div className="lid"><i className="cam" aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={w} height={h} loading={priority ? "eager" : "lazy"} decoding="async" {...(priority ? { fetchPriority: "high" as const } : {})} />
      </div>
      <div className="base" aria-hidden="true" />
    </figure>
  );
}

export function Phone({ src, alt, w, h, className = "" }: Img & { className?: string }) {
  return (
    <figure className={`phone-d ${className}`}>
      <span className="isl" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={w} height={h} loading="lazy" decoding="async" />
    </figure>
  );
}

/** Device + floating interface card composition. */
export function Scene({ children, float, className = "" }: { children: ReactNode; float?: ReactNode; className?: string }) {
  return <div className={`scene ${className}`}>{children}{float && <div className="sc-float">{float}</div>}</div>;
}
