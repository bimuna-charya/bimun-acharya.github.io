import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    let frame = 0;

    function handleMove(event) {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      });
    }

    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handleMove);
    };
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{ transform: `translate3d(${position.x - 180}px, ${position.y - 180}px, 0)` }}
    />
  );
}
