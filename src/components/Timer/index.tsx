import { TimerDisplay } from './TimerDisplay';
import { TimerControls } from './TimerControls';
import { ModeSelector } from './ModeSelector';
import { useTimer, useSettings, useStats, useTasks } from '../../contexts';
import { THEME_COLORS } from '../../types';

interface TimerProps {
  isFocusMode?: boolean;
}

export function Timer({ isFocusMode = false }: TimerProps) {
  const { pomodorosCompleted, isRunning, timeLeft, totalTime, currentTaskId } = useTimer();
  const { settings } = useSettings();
  const { todayStats } = useStats();
  const { tasks } = useTasks();

  const goalProgress = Math.min((todayStats.totalPomodoros / settings.dailyGoal) * 100, 100);
  const timerProgress = totalTime > 0 ? timeLeft / totalTime : 0;
  const themeColor = THEME_COLORS[settings.theme].primary;
  const currentTask = tasks.find(t => t.id === currentTaskId);
  const CIRCUMFERENCE = 2 * Math.PI * 180;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        padding: isFocusMode ? '40px 20px' : '100px 20px 40px 20px',
        background: 'transparent',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ flex: 1 }} /> {/* Top spacer for vertical centering */}
      {/* Mode Selector - Hidden in focus mode */}
      {!isFocusMode && (
        <div
          style={{
            minHeight: '60px',
            opacity: isRunning ? 0 : 1,
            transition: 'opacity 0.4s ease',
            pointerEvents: isRunning ? 'none' : 'auto',
          }}
        >
          <ModeSelector />
        </div>
      )}

      {/* Current Task Indicator - MOVED TO TOP */}
      {currentTask && (
        <div
          style={{
            marginTop: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 20px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '12px',
            border: `1px solid ${currentTask.color}40`,
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: currentTask.color,
            }}
          />
          <span style={{ color: '#888888', fontSize: '13px' }}>
            Working on: <span style={{ color: '#ffffff', fontWeight: 500 }}>{currentTask.title}</span>
          </span>
        </div>
      )}

      {/* Main Circular Timer */}
      <div
        style={{
          position: 'relative',
          width: '380px',
          height: '380px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '24px',
        }}
      >
        {/* SVG Ring */}
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
          viewBox="0 0 400 400"
        >
          {/* Track */}
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="var(--color-bg-tertiary)"
            strokeWidth="12"
          />
          {/* Progress */}
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke={themeColor}
            strokeWidth="12"
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 1s linear',
              strokeDasharray: CIRCUMFERENCE,
              strokeDashoffset: CIRCUMFERENCE * (1 - timerProgress),
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
              filter: `drop-shadow(0 0 12px ${themeColor}80)`,
            }}
          />
        </svg>

        {/* Content inside the circle */}
        <div style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <TimerDisplay isFocusMode={isFocusMode} />
          <TimerControls />
        </div>
      </div>
      {/* Bottom Info - Always reserve space */}
      <div
        style={{
          minHeight: '100px',
          opacity: isRunning ? 0 : 1,
          transition: 'opacity 0.4s ease',
          marginTop: '48px',
          pointerEvents: isRunning ? 'none' : 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {/* Progress */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>
              Today: {todayStats.totalPomodoros}/{settings.dailyGoal}
            </span>
            <div
              style={{
                width: '100px',
                height: '3px',
                background: 'var(--color-bg-secondary)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${goalProgress}%`,
                  background: 'var(--color-text-primary)',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
          </div>

          {/* Session */}
          <span style={{ color: 'var(--color-text-muted)', fontSize: '12px' }}>
            Session #{pomodorosCompleted + 1}
          </span>
        </div>
      </div>

      <div style={{ flex: 1 }} /> {/* Bottom spacer for vertical centering */}

      {/* Keyboard hint */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          color: 'var(--color-text-secondary)',
          fontSize: '12px',
          letterSpacing: '0.05em',
          opacity: 0.6,
        }}
      >
        SPACE start/pause • R reset • S skip • F focus • ↑↓ adjust time • ←→ change mode
      </div>
    </div>
  );
}

export { TimerDisplay } from './TimerDisplay';
export { TimerControls } from './TimerControls';
export { ModeSelector } from './ModeSelector';
