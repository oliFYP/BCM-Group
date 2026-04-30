// src/assets/ValueIcon4.tsx
import * as React from "react";
export default function ValueIcon4(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect
        x="8"
        y="8"
        width="32"
        height="32"
        rx="16"
        fill="#fff"
        stroke="#E63946"
        strokeWidth="3"
      />
      <path
        d="M16 32c0-4 8-4 8 0m0 0c0-4 8-4 8 0"
        stroke="#B71C1C"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="20" r="4" fill="#E63946" />
    </svg>
  );
}
