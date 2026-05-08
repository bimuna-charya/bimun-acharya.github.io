import { useEffect, useState } from 'react';

export function useTypingText(words, speed = 70, pause = 1350) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return undefined;

    const current = words[index];
    const isComplete = subIndex === current.length;
    const isEmpty = subIndex === 0;

    const timeout = setTimeout(
      () => {
        if (!deleting && isComplete) {
          setDeleting(true);
          return;
        }

        if (deleting && isEmpty) {
          setDeleting(false);
          setIndex((value) => (value + 1) % words.length);
          return;
        }

        setSubIndex((value) => value + (deleting ? -1 : 1));
      },
      isComplete && !deleting ? pause : deleting ? speed / 1.7 : speed,
    );

    return () => clearTimeout(timeout);
  }, [deleting, index, pause, speed, subIndex, words]);

  return words[index].slice(0, subIndex);
}
