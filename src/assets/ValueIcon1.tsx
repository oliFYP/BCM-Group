// src/assets/ValueIcon1.tsx
import * as React from "react";
export default function ValueIcon1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="#E63946"
        strokeWidth="3"
        fill="#fff"
      />
      <path
        d="M24 12l4.5 9.5L39 23l-7.5 7.5L33 39l-9-5-9 5 1.5-8.5L9 23l10.5-1.5L24 12z"
        fill="#E63946"
        stroke="#B71C1C"
        strokeWidth="1.5"
      />
    </svg>
  );
}
