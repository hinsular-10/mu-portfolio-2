import React, { useState, useEffect, useCallback } from 'react';

export const Typewriter = ({
  texts,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenTexts = 2000,
  className = "",
  cursorClassName = "",
  loop = true,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const fullText = texts[currentTextIndex];
    
    if (isDeleting) {
      setDisplayedText((prev) => prev.substring(0, prev.length - 1));
    } else {
      setDisplayedText((prev) => fullText.substring(0, prev.length + 1));
    }

    if (!isDeleting && displayedText === fullText) {
      if (!loop && currentTextIndex === texts.length - 1) return;
      setTimeout(() => setIsDeleting(true), delayBetweenTexts);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [currentTextIndex, displayedText, isDeleting, texts, delayBetweenTexts, loop]);

  useEffect(() => {
    const timer = setTimeout(
      tick,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  useEffect(() => {
    const styleId = 'typewriter-cursor-style';
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement('style');
      styleTag.id = styleId;
      styleTag.innerHTML = `
        @keyframes typewriter-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-typewriter-blink {
          animation: typewriter-blink 1s step-end infinite;
        }
      `;
      document.head.appendChild(styleTag);
    }
  }, []);

  return (
    <span className={`inline-flex items-center ${className}`}>
      {displayedText}
      <span 
        className={`ml-1 inline-block w-[2px] h-[1.2em] bg-current animate-typewriter-blink ${cursorClassName}`}
        aria-hidden="true"
      />
    </span>
  );
};
