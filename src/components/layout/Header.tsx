import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Terminal, Search, Menu } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [threatLevel, setThreatLevel] = useState('HIGH');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate changing threat levels
    const threatTimer = setInterval(() => {
      const levels = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
      const randomLevel = levels[Math.floor(Math.random() * levels.length)];
      setThreatLevel(randomLevel);
    }, 30000); // Change every 30 seconds

    return () => {
      clearInterval(timer);
      clearInterval(threatTimer);
    };
  }, []);

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour12: false });
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString([], { 
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const getThreatLevelClass = (level: string): string => {
    switch(level) {
      case 'LOW': return 'threat-low';
      case 'MEDIUM': return 'threat-medium';
      case 'HIGH': return 'threat-high';
      case 'CRITICAL': return 'threat-critical';
      default: return '';
    }
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-left">
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu size={24} />
          </button>
          <div className="header-logo">
            <Shield size={24} className="logo-icon" />
            <h1 className="header-title">DARK<span>NET</span>_MONITOR</h1>
          </div>
        </div>

        <div className={`header-center ${showMobileMenu ? 'mobile-visible' : ''}`}>
          <nav className="header-nav">
            <a href="#dashboard" className="nav-item">
              <Terminal size={16} />
              <span>Dashboard</span>
            </a>
            <a href="#search" className="nav-item">
              <Search size={16} />
              <span>Search</span>
            </a>
            <a href="#tools" className="nav-item">
              <AlertTriangle size={16} />
              <span>OSINT Tools</span>
            </a>
          </nav>
        </div>

        <div className="header-right">
          <div className="system-info">
            <div className="system-time terminal-text">
              {formatTime(currentTime)}
            </div>
            <div className="system-date terminal-text">
              {formatDate(currentTime)}
            </div>
          </div>
          
          <div className="threat-indicator">
            <span className="threat-label">THREAT LEVEL:</span>
            <span className={`threat-value ${getThreatLevelClass(threatLevel)}`}>
              {threatLevel}
            </span>
          </div>
        </div>
      </div>
      
      <div className="header-border-bottom"></div>
    </header>
  );
};

export default Header;