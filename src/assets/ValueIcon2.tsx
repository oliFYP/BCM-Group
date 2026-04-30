// src/assets/ValueIcon2.tsx
import * as React from "react";
export default function ValueIcon2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="12"
        fill="#fff"
        stroke="#E63946"
        strokeWidth="3"
      />
      <path
        d="M24 14c3.5 0 7 2.5 7 7 0 4.5-3.5 7-7 7s-7-2.5-7-7c0-4.5 3.5-7 7-7zm0 0v-4m0 4l-4-4m4 4l4-4"
        stroke="#B71C1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
