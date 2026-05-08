import { useState } from 'react';

export default function TiltCard({ children, className = '', glare = true }) {
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`,
    });

    setGlareStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 26%)`,
    });
  }

  function handleMouseLeave() {
    setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' });
    setGlareStyle({});
  }

  return (
    <div
      className={`tilt-card ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {glare ? <span className="tilt-glare" style={glareStyle} /> : null}
      {children}
    </div>
  );
}
