import React from 'react';
import { 
  LayoutDashboard, Search, Scan, Shield, Skull, Globe, 
  Terminal, Database, User, Settings, Info 
} from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'search', label: 'Search Engine', icon: <Search size={20} /> },
    { id: 'scanner', label: 'Onion Scanner', icon: <Scan size={20} /> },
    { id: 'threats', label: 'Threat Feed', icon: <Skull size={20} /> },
    { id: 'osint', label: 'OSINT Tools', icon: <Globe size={20} /> },
    { id: 'terminal', label: 'Terminal', icon: <Terminal size={20} /> },
    { id: 'database', label: 'Data Archive', icon: <Database size={20} /> }
  ];

  const bottomNavItems = [
    { id: 'profile', label: 'Profile', icon: <User size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
    { id: 'about', label: 'About', icon: <Info size={20} /> }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Shield size={24} className="sidebar-logo" />
        <h2 className="sidebar-title">DARK_OPS</h2>
      </div>
      
      <div className="user-status">
        <div className="status-indicator active"></div>
        <span className="status-text">ACTIVE</span>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id} className={activeView === item.id ? 'active' : ''}>
              <button
                onClick={() => setActiveView(item.id)}
                className="nav-item"
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <ul className="nav-list">
          {bottomNavItems.map((item) => (
            <li key={item.id}>
              <button className="nav-item bottom-nav-item">
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;