import React from 'react';
import './ActiveThreatsWidget.css';

interface ActiveThreatsProps {
  data: {
    ransomware: number;
    dataLeaks: number;
    exploits: number;
    malware: number;
    phishing: number;
    ddos: number;
    botnets: number;
  };
}

const ActiveThreatsWidget: React.FC<ActiveThreatsProps> = ({ data }) => {
  const totalThreats = Object.values(data).reduce((sum, count) => sum + count, 0);
  
  const getPercentage = (value: number): number => {
    return Math.round((value / totalThreats) * 100);
  };
  
  return (
    <div className="active-threats-widget">
      <div className="threat-meter-container">
        <div className="threat-meter-value">
          <span className="threat-total">{totalThreats}</span>
          <span className="threat-label">Active Threats</span>
        </div>
      </div>
      
      <div className="threat-categories">
        <div className="threat-category">
          <div className="category-header">
            <span className="category-name">Ransomware</span>
            <span className="category-count">{data.ransomware}</span>
          </div>
          <div className="category-bar-container">
            <div 
              className="category-bar ransomware" 
              style={{ width: `${getPercentage(data.ransomware)}%` }}
            ></div>
          </div>
        </div>
        
        <div className="threat-category">
          <div className="category-header">
            <span className="category-name">Data Leaks</span>
            <span className="category-count">{data.dataLeaks}</span>
          </div>
          <div className="category-bar-container">
            <div 
              className="category-bar data-leaks" 
              style={{ width: `${getPercentage(data.dataLeaks)}%` }}
            ></div>
          </div>
        </div>
        
        <div className="threat-category">
          <div className="category-header">
            <span className="category-name">Exploits</span>
            <span className="category-count">{data.exploits}</span>
          </div>
          <div className="category-bar-container">
            <div 
              className="category-bar exploits" 
              style={{ width: `${getPercentage(data.exploits)}%` }}
            ></div>
          </div>
        </div>
        
        <div className="threat-category">
          <div className="category-header">
            <span className="category-name">Malware</span>
            <span className="category-count">{data.malware}</span>
          </div>
          <div className="category-bar-container">
            <div 
              className="category-bar malware" 
              style={{ width: `${getPercentage(data.malware)}%` }}
            ></div>
          </div>
        </div>
        
        <div className="threat-category">
          <div className="category-header">
            <span className="category-name">Phishing</span>
            <span className="category-count">{data.phishing}</span>
          </div>
          <div className="category-bar-container">
            <div 
              className="category-bar phishing" 
              style={{ width: `${getPercentage(data.phishing)}%` }}
            ></div>
          </div>
        </div>
        
        <div className="threat-category">
          <div className="category-header">
            <span className="category-name">DDoS</span>
            <span className="category-count">{data.ddos}</span>
          </div>
          <div className="category-bar-container">
            <div 
              className="category-bar ddos" 
              style={{ width: `${getPercentage(data.ddos)}%` }}
            ></div>
          </div>
        </div>
        
        <div className="threat-category">
          <div className="category-header">
            <span className="category-name">Botnets</span>
            <span className="category-count">{data.botnets}</span>
          </div>
          <div className="category-bar-container">
            <div 
              className="category-bar botnets" 
              style={{ width: `${getPercentage(data.botnets)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveThreatsWidget;