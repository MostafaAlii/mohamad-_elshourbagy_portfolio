import { useState, useEffect } from 'react';
interface UseTypewriterOptions {
  text: string;
  speed?: number; // milliseconds (default: 100)
  delay?: number; // milliseconds (default: 0)
  loop?: boolean; // (default: false)
  deleteSpeed?: number; // loop = true (default: 50)
  pauseTime?: number; // (default: 2000)
}

export const useTypewriter = ({
  text,
  speed = 100,
  delay = 0,
  loop = false,
  deleteSpeed = 50,
  pauseTime = 2000,
}: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (delay > 0 && !hasStarted) {
      const delayTimeout = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    if (delay === 0 && !hasStarted) {
      setHasStarted(true);
    }

    if (!hasStarted) {
      return;
    }

    if (!isDeleting && currentIndex === text.length) {
      setIsComplete(true);
      if (loop) {
        const pauseTimeout = setTimeout(() => {
          setIsWaiting(true);
          setIsComplete(false);
          setTimeout(() => {
            setIsDeleting(true);
            setIsWaiting(false);
          }, pauseTime);
        }, 100);
        return () => clearTimeout(pauseTimeout);
      }
      return;
    }

    if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
      return;
    }

    if (isWaiting) {
      return;
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText(text.slice(0, currentIndex - 1));
          setCurrentIndex((prev) => prev - 1);
        } else {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex((prev) => prev + 1);
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, speed, delay, loop, deleteSpeed, pauseTime, isWaiting, hasStarted]);

  return { displayText, isComplete };
};
