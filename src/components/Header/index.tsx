import { motion } from 'framer-motion';
import { Settings, BarChart3, User, ListTodo, Volume2 } from 'lucide-react';
import { useTimer } from '../../contexts';

interface HeaderProps {
  onOpenSettings: () => void;
  onOpenStats: () => void;
  onOpenAuth: () => void;
  onOpenTasks: () => void;
  onOpenAmbient: () => void;
}

export function Header({
  onOpenSettings,
  onOpenStats,
  onOpenAuth,
  onOpenTasks,
  onOpenAmbient,
}: HeaderProps) {
  const { isRunning } = useTimer();

  return (
    <motion.header
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass"
      style={{
        position: 'fixed',
        top: '24px',
        bottom: '24px',
        left: '24px',
        width: '80px',
        borderRadius: '40px',
        zIndex: 100,
        opacity: isRunning ? 0.4 : 1,
        transition: 'opacity 0.5s ease, transform 0.2s ease',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      }}
    >
      <div
        style={{
          padding: '32px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        {/* Logo - Click to go home */}
        <div
          onClick={() => window.location.reload()}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #a855f7, #ec4899)',
              boxShadow: '0 4px 12px rgba(168, 85, 247, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '24px' }}>A</span>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <NavButton icon={<ListTodo size={24} />} label="Tasks" onClick={onOpenTasks} />
          <NavButton icon={<Volume2 size={24} />} label="Sounds" onClick={onOpenAmbient} />
          <NavButton icon={<BarChart3 size={24} />} label="Stats" onClick={onOpenStats} />
          <NavButton icon={<Settings size={24} />} label="Settings" onClick={onOpenSettings} />

        </nav>
      </div>
    </motion.header>
  );
}

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

function NavButton({ icon, label, onClick }: NavButtonProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ color: '#ffffff' }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        background: 'transparent',
        border: 'none',
        borderRadius: '50%',
        color: 'var(--color-text-secondary)',
        cursor: 'pointer',
        outline: 'none',
        transition: 'all 0.2s ease',
      }}
      title={label}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
        e.currentTarget.style.color = 'var(--color-text-primary)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--color-text-secondary)';
      }}
    >
      {icon}
    </motion.button>
  );
}
