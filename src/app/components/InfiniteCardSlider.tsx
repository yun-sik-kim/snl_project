'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
  image?: string;
}

interface InfiniteCardSliderProps {
  cards: Card[];
  speed?: number; // Animation speed in seconds
  cardsToShow?: number; // Number of cards visible at once
}

const InfiniteCardSlider: React.FC<InfiniteCardSliderProps> = ({
  cards,
  speed = 10,
  cardsToShow = 3,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [animationDuration, setAnimationDuration] = useState(speed);

  // Duplicate cards for infinite effect
  const extendedCards = [...cards, ...cards];

  // Handle animation reset for infinite loop
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleAnimationEnd = () => {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      void slider.offsetWidth; // Trigger reflow
      slider.style.transition = `transform ${animationDuration}s linear`;
      slider.style.transform = `translateX(-${100 / cardsToShow}%)`;
    };

    slider.addEventListener('transitionend', handleAnimationEnd);

    return () => {
      slider.removeEventListener('transitionend', handleAnimationEnd);
    };
  }, [animationDuration, cardsToShow]);

  // Set initial animation
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transition = `transform ${animationDuration}s linear`;
      slider.style.transform = `translateX(-${100 / cardsToShow}%)`;
    }
  }, [animationDuration, cardsToShow]);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex"
        style={{
          width: `${(extendedCards.length / cardsToShow) * 100}%`,
        }}
      >
        {extendedCards.map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="flex-shrink-0"
            style={{ width: `${100 / cardsToShow}%` }}
          >
            <div className="mx-2 h-64 rounded-lg bg-white p-4 shadow-md">
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="mb-2 h-24 w-full rounded object-cover"
                />
              )}
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCardSlider;