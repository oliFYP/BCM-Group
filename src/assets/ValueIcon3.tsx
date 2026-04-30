// src/assets/ValueIcon3.tsx
import * as React from "react";
export default function ValueIcon3(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <ellipse
        cx="24"
        cy="24"
        rx="20"
        ry="16"
        fill="#fff"
        stroke="#E63946"
        strokeWidth="3"
      />
      <path
        d="M24 12v16l10 6"
        stroke="#B71C1C"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="3" fill="#E63946" />
    </svg>
  );
}
