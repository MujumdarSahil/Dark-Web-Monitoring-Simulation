import React from 'react';
import SearchEngine from '../search/SearchEngine';
import OnionScanner from '../scanner/OnionScanner';
import ThreatFeed from '../feed/ThreatFeed';
import OsintPanel from '../tools/OsintPanel';
import DashboardOverview from './DashboardOverview';
import TerminalSimulator from '../tools/TerminalSimulator';
import DataArchive from './DataArchive';
import './Dashboard.css';

interface DashboardProps {
  activeView: string;
}

const Dashboard: React.FC<DashboardProps> = ({ activeView }) => {
  return (
    <div className="dashboard-container">
      {activeView === 'dashboard' && <DashboardOverview />}
      {activeView === 'search' && <SearchEngine />}
      {activeView === 'scanner' && <OnionScanner />}
      {activeView === 'threats' && <ThreatFeed />}
      {activeView === 'osint' && <OsintPanel />}
      {activeView === 'terminal' && <TerminalSimulator />}
      {activeView === 'database' && <DataArchive />}
    </div>
  );
};

export default Dashboard;