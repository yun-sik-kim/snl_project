import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

// Define the interface for a ripple object
interface Ripple {
  key: number;
  x: number;
  y: number;
}

const CircleWithRipple: React.FC = () => {
  // Reference to the circle div element
  const circleRef = useRef<HTMLDivElement>(null);
  // State to store active ripples, typed as an array of Ripple objects
  const [ripples, setRipples] = useState<Ripple[]>([]);

  // Function to add a new ripple at the specified position
  const addRipple = (x: number, y: number) => {
    const key = Date.now(); // Unique identifier as a number
    setRipples((prev) => [...prev, { key, x, y }]);
  };

  // Function to remove a ripple by its key
  const removeRipple = (key: number) => {
    setRipples((prev) => prev.filter((ripple) => ripple.key !== key));
  };

  // Handler for mouse entering the circle, with typed event
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (circleRef.current) {
      const circleRect = circleRef.current.getBoundingClientRect();
      const relativeX = event.clientX - circleRect.left;
      const relativeY = event.clientY - circleRect.top;
      addRipple(relativeX, relativeY);
    }
  };

  return (
    <div
      ref={circleRef}
      style={{
        position: 'relative',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: 'blue',
        overflow: 'hidden',
      }}
      onMouseEnter={handleMouseEnter}
    >
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.key}
          style={{
            position: 'absolute',
            left: ripple.x,
            top: ripple.y,
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 20, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onAnimationComplete={() => removeRipple(ripple.key)}
        />
      ))}
    </div>
  );
};

export default CircleWithRipple;