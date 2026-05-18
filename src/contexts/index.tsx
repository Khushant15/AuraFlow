import { ReactNode } from 'react';
import { SettingsProvider } from './SettingsContext';
import { StatsProvider } from './StatsContext';
import { TasksProvider } from './TasksContext';
import { TimerProvider } from './TimerContext';
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <SettingsProvider>
      <StatsProvider>
        <TasksProvider>
          <TimerProvider>{children}</TimerProvider>
        </TasksProvider>
      </StatsProvider>
    </SettingsProvider>
  );
}

export * from './SettingsContext';
export * from './StatsContext';
export * from './TasksContext';
export * from './TimerContext';
