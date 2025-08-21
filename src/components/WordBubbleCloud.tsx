import React from 'react';

interface BubbleItem {
  label: string;
  group?: string;
}

interface WordBubbleCloudProps {
  bubbles: BubbleItem[];
}

const WordBubbleCloud: React.FC<WordBubbleCloudProps> = ({ bubbles }) => {
  const getSizeClass = (index: number) => {
    const sizeClasses = ['text-sm', 'text-base', 'text-lg', 'text-xl'];
    return sizeClasses[index % 4];
  };

  const getRotationClass = (index: number) => {
    const rotations = ['', '-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2'];
    return rotations[index % 5];
  };

  const getFontWeight = (index: number) => {
    return index % 3 === 0 ? 'font-semibold' : 'font-normal';
  };

  return (
    <div 
      className="flex flex-wrap gap-3 md:gap-4 items-center justify-center"
      role="list"
    >
      {bubbles.map((label, index) => (
        <div
          key={`${label.label}-${index}`}
          className={`
            px-3 py-2 md:px-4 md:py-2 rounded-full
            bg-healthiq-background text-healthiq-primary hover:bg-healthiq-secondary
            ${getSizeClass(index)}
            ${getRotationClass(index)}
            ${getFontWeight(index)}
            transition-all duration-300 hover:scale-105 hover:shadow-sm
            whitespace-nowrap
          `}
          role="listitem"
          aria-label={label.label}
        >
          {label.label}
        </div>
      ))}
    </div>
  );
};

export default WordBubbleCloud;