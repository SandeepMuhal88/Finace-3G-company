import React from 'react';
import { Home, Briefcase, LayoutDashboard, UserCheck } from 'lucide-react';

interface MobileBottomNavProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  pendingEmiCount?: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentTab, onSelectTab, pendingEmiCount }) => {
  const items = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'service', label: 'Service', icon: Briefcase },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'Profile', icon: UserCheck },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-sky-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 py-1.5">
      <div className="grid grid-cols-4 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'text-sky-700 font-bold bg-sky-50 border border-sky-200/80 shadow-2xs'
                  : 'text-slate-500 font-medium hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              <div className={`relative p-1 rounded-lg transition-transform ${isActive ? 'bg-sky-600 text-white scale-110 shadow-xs' : 'text-slate-400'}`}>
                <Icon className="w-4 h-4" />
                {item.id === 'dashboard' && pendingEmiCount && pendingEmiCount > 0 ? (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center">
                    {pendingEmiCount}
                  </span>
                ) : null}
              </div>
              <span className="text-[10px] tracking-tight mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
