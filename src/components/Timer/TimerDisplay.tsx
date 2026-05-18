import { motion } from 'framer-motion';
import { useTimer } from '../../contexts';

interface TimerDisplayProps {
  isFocusMode?: boolean;
}

export function TimerDisplay({ isFocusMode = false }: TimerDisplayProps) {
  const { timeLeft, isRunning } = useTimer();

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const minuteStr = String(minutes).padStart(2, '0');
  const secondStr = String(seconds).padStart(2, '0');

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Space Grotesk, system-ui, sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.04em',
        color: 'var(--color-text-primary)',
        fontSize: isRunning ? 'clamp(80px, 15vw, 120px)' : 'clamp(64px, 12vw, 96px)',
        lineHeight: 1,
        textShadow: '0 8px 32px rgba(0,0,0,0.4)',
        userSelect: 'none',
        transition: 'font-size 0.5s ease',
      }}
    >
      <span>{minuteStr}</span>
      <motion.span
        style={{ margin: '0 4px', opacity: 0.5 }}
        animate={{ opacity: isRunning ? [0.5, 0.1, 0.5] : 0.5 }}
        transition={{ duration: 1, repeat: isRunning ? Infinity : 0, ease: 'easeInOut' }}
      >
        :
      </motion.span>
      <span>{secondStr}</span>
    </div>
  );
}
