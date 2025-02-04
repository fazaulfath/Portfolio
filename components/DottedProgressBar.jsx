import React, { useEffect, useState } from 'react';

const DottedProgressBar = ({ totalDots = 10, percentage = 75 }) => {
  const radius = 30; // Adjusted smaller radius for the progress bar
  const dotSize = 8; // Adjusted smaller size for each dot
  const filledDots = Math.round((percentage / 100) * totalDots);
  
  const [visibleDots, setVisibleDots] = useState(0);

  useEffect(() => {
    setVisibleDots(0); // Reset when component mounts
    const interval = setInterval(() => {
      setVisibleDots((prev) => {
        if (prev < filledDots) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 200); // Adjust the timing as needed (200 ms)

    return () => clearInterval(interval); // Cleanup
  }, [filledDots]);

  const getDotPosition = (index) => {
    const angle = (index / totalDots) * 2 * Math.PI;
    const x = radius + radius * Math.cos(angle) - dotSize / 2;
    const y = radius + radius * Math.sin(angle) - dotSize / 2;
    return { x, y };
  };

  return (
    <div
      className="dotted-progress-bar relative"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        position: 'relative',
      }}
    >
      {Array.from({ length: totalDots }).map((_, index) => {
        const { x, y } = getDotPosition(index);
        return (
          <span
            key={index}
            className={`dot absolute ${
              index < visibleDots ? 'filled' : ''
            }`}
            style={{
              left: `${x}px`,
              top: `${y}px`,
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              borderRadius: '50%',
              backgroundColor: index < visibleDots ? '#f13024' : '#d6d6d6',
              transition: 'background-color 0.3s', // Add a transition for smooth effect
            }}
          ></span>
        );
      })}
    </div>
  );
};

export default DottedProgressBar;
