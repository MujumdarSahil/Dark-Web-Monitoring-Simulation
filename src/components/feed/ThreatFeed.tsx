import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Clock, Filter, ExternalLink, Shield, Skull, Database } from 'lucide-react';
import { threatFeedData } from '../../data/mockData';
import './ThreatFeed.css';

const ThreatFeed: React.FC = () => {
  const [alerts, setAlerts] = useState(threatFeedData);
  const [filter, setFilter] = useState('all');
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = generateRandomAlert();
      setAlerts(prev => [newAlert, ...prev].slice(0, 50));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const generateRandomAlert = () => {
    const titles = [
      "New Ransomware Variant Detected",
      "Credential Database Leaked",
      "Zero-Day Exploit Listed",
      "DDoS Service Launched",
      "Cryptocurrency Mixer Identified"
    ];

    const sources = [
      "DarkIntel",
      "ShadowWatch",
      "CyberSentry",
      "ThreatHunter",
      "NetGuardian"
    ];

    return {
      id: `alert-${Date.now()}`,
      title: titles[Math.floor(Math.random() * titles.length)],
      description: `Alert detected on ${new Date().toISOString()}`,
      source: sources[Math.floor(Math.random() * sources.length)],
      severity: ['Critical', 'High', 'Medium', 'Low'][Math.floor(Math.random() * 4)],
      timestamp: new Date().toISOString(),
      category: ['Malware', 'Data Leak', 'Exploit', 'Service'][Math.floor(Math.random() * 4)],
      tags: ['darkweb', 'threat', 'security']
    };
  };

  const getSeverityColor = (severity: string) => {
    switch(severity.toLowerCase()) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="threat-feed">
      <div className="feed-header">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Shield className="text-red-500" />
            Threat Intelligence Feed
          </h2>
          <span className="text-sm text-gray-400 flex items-center gap-1">
            <Clock size={14} />
            Live Updates
          </span>
        </div>

        <div className="feed-filters">
          <Filter size={16} />
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded px-2 py-1"
          >
            <option value="all">All Threats</option>
            <option value="critical">Critical Only</option>
            <option value="malware">Malware</option>
            <option value="data-leak">Data Leaks</option>
            <option value="exploit">Exploits</option>
          </select>
        </div>
      </div>

      <div className="feed-container" ref={feedRef}>
        {alerts.map((alert) => (
          <div key={alert.id} className="feed-item">
            <div className="feed-item-header">
              <div className="flex items-center gap-2">
                <span className={`severity-badge ${getSeverityColor(alert.severity)}`}>
                  {alert.severity}
                </span>
                <h3 className="feed-item-title">{alert.title}</h3>
              </div>
              <span className="feed-item-time">
                {new Date(alert.timestamp).toLocaleTimeString()}
              </span>
            </div>

            <p className="feed-item-description">{alert.description}</p>

            <div className="feed-item-footer">
              <div className="feed-item-tags">
                {alert.tags.map((tag, index) => (
                  <span key={index} className="feed-tag">#{tag}</span>
                ))}
              </div>
              <div className="feed-item-source">
                <ExternalLink size={14} />
                {alert.source}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreatFeed;