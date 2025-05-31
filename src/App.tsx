import React, { useState, useEffect } from 'react';
import { Layers } from 'lucide-react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import DisclaimerModal from './components/common/DisclaimerModal';
import ThemeProvider from './context/ThemeProvider';
import './App.css';

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [activeView, setActiveView] = useState('dashboard');

  useEffect(() => {
    // Set title
    document.title = "Dark Web Monitor | Simulation";
    
    // Check if the disclaimer has been seen before
    const hasSeenDisclaimer = localStorage.getItem('darkweb-monitor-disclaimer');
    if (hasSeenDisclaimer) {
      setShowDisclaimer(false);
    }
  }, []);

  const handleCloseDisclaimer = () => {
    localStorage.setItem('darkweb-monitor-disclaimer', 'true');
    setShowDisclaimer(false);
  };

  return (
    <ThemeProvider>
      <div className="app-container">
        {showDisclaimer && (
          <DisclaimerModal onClose={handleCloseDisclaimer} />
        )}
        
        <div className="app-wrapper">
          <Header />
          <div className="app-content">
            <Sidebar activeView={activeView} setActiveView={setActiveView} />
            <main className="content-area">
              <Dashboard activeView={activeView} />
            </main>
          </div>
        </div>
        
        <div className="app-logo-watermark">
          <Layers size={300} className="watermark-logo" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;