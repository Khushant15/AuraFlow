import { Play, Pause, RotateCcw, SkipForward } from 'lucide-react';
import { useTimer, useSettings } from '../../contexts';
import { THEME_COLORS } from '../../types';

export function TimerControls() {
  const { isRunning, isPaused, start, pause, resume, reset, skip } = useTimer();
  const { settings } = useSettings();

  const themeColor = THEME_COLORS[settings.theme].primary;
  const themeGlow = THEME_COLORS[settings.theme].glow;

  const handleMainButton = () => {
    if (isRunning) {
      pause();
    } else if (isPaused) {
      resume();
    } else {
      start();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      {/* Reset - Hidden when running */}
      {!isRunning && (
        <button
          type="button"
          onClick={reset}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            background: 'transparent',
            border: '1px solid var(--color-border)',
            borderRadius: '50%',
            color: 'var(--color-text-secondary)',
            cursor: 'pointer',
            outline: 'none',
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#444444';
            e.currentTarget.style.color = '#888888';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#222222';
            e.currentTarget.style.color = '#555555';
          }}
        >
          <RotateCcw size={18} />
        </button>
      )}

      {/* Main Button */}
      <button
        type="button"
        onClick={handleMainButton}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          padding: isRunning ? '12px 32px' : '10px 28px',
          background: isRunning ? 'transparent' : themeColor,
          border: isRunning ? `1px solid ${themeColor}` : 'none',
          borderRadius: '50px',
          color: isRunning ? themeColor : 'var(--color-bg-primary)',
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          cursor: 'pointer',
          outline: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isRunning ? 'none' : `0 8px 24px ${themeGlow}`,
        }}
        onMouseEnter={e => {
          if (!isRunning) e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
        }}
        onMouseLeave={e => {
          if (!isRunning) e.currentTarget.style.transform = 'translateY(0) scale(1)';
        }}
      >
        {isRunning ? (
          <>
            <Pause size={18} />
            <span>PAUSE</span>
          </>
        ) : (
          <>
            <Play size={18} />
            <span>{isPaused ? 'RESUME' : 'START'}</span>
          </>
        )}
      </button>

      {/* Skip - Hidden when running */}
      {!isRunning && (
        <button
          type="button"
          onClick={skip}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            background: 'transparent',
            border: '1px solid var(--color-border)',
            borderRadius: '50%',
            color: 'var(--color-text-secondary)',
            cursor: 'pointer',
            outline: 'none',
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#444444';
            e.currentTarget.style.color = '#888888';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#222222';
            e.currentTarget.style.color = '#555555';
          }}
        >
          <SkipForward size={18} />
        </button>
      )}
    </div>
  );
}
