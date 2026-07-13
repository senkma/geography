import type { ReactElement } from "react";

interface IconProps {
  name: string;
  className?: string;
}

const paths: Record<string, ReactElement> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.2 5.3-5.3 2.2 2.2-5.3z" />
    </>
  ),
  mountain: (
    <>
      <path d="m3 20 6.5-11 4 6 2-3L21 20z" />
    </>
  ),
  snow: (
    <>
      <path d="M12 3v18M5 6l14 12M19 6 5 18" />
      <path d="M12 3l-2.2 2.2M12 3l2.2 2.2M12 21l-2.2-2.2M12 21l2.2-2.2" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
      <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" />
    </>
  ),
  slides: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M12 16v4M8 20h8" />
    </>
  ),
  quiz: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .8-1 1.7M12 17h.01" />
    </>
  ),
  doc: (
    <>
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v4h4M9 13h6M9 17h6M9 9h2" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m10 9 5 3-5 3z" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" />
      <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
    </>
  ),
  dataset: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  map: (
    <>
      <path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  tool: (
    <>
      <path d="M14.5 5.5a3.5 3.5 0 0 0-4.6 4.6L3 17l4 4 6.9-6.9a3.5 3.5 0 0 0 4.6-4.6l-2.5 2.5-2-2z" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  back: (
    <>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: (
    <>
      <path d="M20 6 9 17l-5-5" />
    </>
  ),
  x: (
    <>
      <path d="M18 6 6 18M6 6l12 12" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  install: (
    <>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M4 17v3h16v-3" />
    </>
  ),
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.book}
    </svg>
  );
}

export const resourceIcon: Record<string, string> = {
  presentation: "slides",
  document: "doc",
  video: "video",
  link: "link",
  dataset: "dataset",
  map: "map",
  tool: "tool",
};
