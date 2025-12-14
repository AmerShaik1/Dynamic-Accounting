export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer circle - lime green */}
        <circle cx="100" cy="100" r="95" stroke="#84cc16" strokeWidth="8" fill="#1f2937" />

        {/* Inner decorative stars */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 100 + 70 * Math.cos(rad);
          const y = 100 + 70 * Math.sin(rad);
          return (
            <circle key={i} cx={x} cy={y} r="2" fill="#84cc16" opacity="0.6" />
          );
        })}

        {/* Center geometric spiral design - 3D wireframe effect */}
        <g opacity="0.9">
          {/* Create multiple ellipses to simulate 3D spiral */}
          <ellipse cx="100" cy="85" rx="25" ry="35" stroke="#84cc16" strokeWidth="1.5" fill="none" transform="rotate(0 100 100)" />
          <ellipse cx="100" cy="85" rx="25" ry="35" stroke="#84cc16" strokeWidth="1.5" fill="none" transform="rotate(60 100 100)" />
          <ellipse cx="100" cy="85" rx="25" ry="35" stroke="#84cc16" strokeWidth="1.5" fill="none" transform="rotate(120 100 100)" />

          {/* Additional wireframe lines for depth */}
          <path d="M 80 85 Q 100 50, 120 85" stroke="#84cc16" strokeWidth="1.5" fill="none" opacity="0.7" />
          <path d="M 80 95 Q 100 130, 120 95" stroke="#84cc16" strokeWidth="1.5" fill="none" opacity="0.7" />
        </g>

        {/* Top text - DYNAMIC */}
        <path id="topCurve" d="M 40,50 Q 100,30 160,50" fill="none" />
        <text fontSize="14" fontWeight="bold" fill="white" letterSpacing="3">
          <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
            DYNAMIC
          </textPath>
        </text>

        {/* Bottom text - ACCOUNTING & PAYROLL */}
        <path id="bottomCurve" d="M 35,150 Q 100,170 165,150" fill="none" />
        <text fontSize="11" fontWeight="bold" fill="white" letterSpacing="1.5">
          <textPath href="#bottomCurve" startOffset="50%" textAnchor="middle">
            ACCOUNTING & PAYROLL
          </textPath>
        </text>
      </svg>
    </div>
  );
}
