// SVG React component for faded grey cranes parallax background

export default function CraneParallax({ className = "", style = {} }) {
  return (
    <svg
      className={className}
      style={{
        ...style,
        position: "absolute",
        width: "100vw",
        height: "100vh",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g opacity="0.13">
        <g>
          <rect x="200" y="700" width="12" height="300" rx="6" fill="#888" />
          <rect x="180" y="700" width="52" height="12" rx="6" fill="#888" />
          <rect x="206" y="650" width="2" height="50" fill="#888" />
          <rect x="206" y="600" width="2" height="50" fill="#888" />
          <rect x="206" y="580" width="2" height="20" fill="#888" />
          <rect x="180" y="580" width="52" height="6" rx="3" fill="#888" />
          <rect x="200" y="570" width="12" height="10" rx="6" fill="#888" />
        </g>
        <g>
          <rect x="900" y="800" width="18" height="220" rx="9" fill="#aaa" />
          <rect x="870" y="800" width="78" height="18" rx="9" fill="#aaa" />
          <rect x="909" y="750" width="2" height="50" fill="#aaa" />
          <rect x="909" y="700" width="2" height="50" fill="#aaa" />
          <rect x="909" y="680" width="2" height="20" fill="#aaa" />
          <rect x="870" y="680" width="78" height="8" rx="4" fill="#aaa" />
          <rect x="900" y="670" width="18" height="10" rx="5" fill="#aaa" />
        </g>
        <g>
          <rect x="1500" y="750" width="10" height="270" rx="5" fill="#bbb" />
          <rect x="1470" y="750" width="70" height="10" rx="5" fill="#bbb" />
          <rect x="1504" y="700" width="2" height="50" fill="#bbb" />
          <rect x="1504" y="650" width="2" height="50" fill="#bbb" />
          <rect x="1504" y="630" width="2" height="20" fill="#bbb" />
          <rect x="1470" y="630" width="70" height="5" rx="2.5" fill="#bbb" />
          <rect x="1500" y="625" width="10" height="10" rx="5" fill="#bbb" />
        </g>
      </g>
    </svg>
  );
}
