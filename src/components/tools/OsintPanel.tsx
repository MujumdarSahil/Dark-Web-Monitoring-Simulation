import React, { useState } from 'react';
import { Globe, Search, Database, Shield, Terminal, AlertTriangle } from 'lucide-react';
import { osintTools } from '../../data/mockData';
import './OsintPanel.css';

const OsintPanel: React.FC = () => {
  const [activeToolId, setActiveToolId] = useState<string | null>(null);
  const [scanResults, setScanResults] = useState<any | null>(null);

  const handleToolClick = (toolId: string) => {
    setActiveToolId(toolId);
    setScanResults(null);
    
    // Simulate tool execution
    setTimeout(() => {
      setScanResults(generateMockResults(toolId));
    }, 2000);
  };

  const generateMockResults = (toolId: string) => {
    const results = {
      'tool001': {
        title: 'OnionScan Results',
        findings: [
          { type: 'Security Issue', severity: 'High', details: 'Exposed Apache mod_status' },
          { type: 'Information Leak', severity: 'Medium', details: 'Directory listing enabled' },
          { type: 'Configuration', severity: 'Low', details: 'Server version exposed' }
        ]
      },
      'tool002': {
        title: 'DarkSearch Results',
        findings: [
          { type: 'Domain', url: 'http://darkmarket5.onion', category: 'Marketplace' },
          { type: 'Domain', url: 'http://hackerforums2.onion', category: 'Forum' },
          { type: 'Domain', url: 'http://intel4you.onion', category: 'Intelligence' }
        ]
      },
      'tool003': {
        title: 'TorBot Analysis',
        findings: [
          { type: 'Network', details: '15 connected nodes identified' },
          { type: 'Traffic', details: 'Average latency: 234ms' },
          { type: 'Services', details: '3 hidden services detected' }
        ]
      }
    };

    return results[toolId as keyof typeof results] || null;
  };

  return (
    <div className="osint-panel">
      <div className="tools-grid">
        {osintTools.map((tool) => (
          <div 
            key={tool.id}
            className={`tool-card ${activeToolId === tool.id ? 'active' : ''}`}
            onClick={() => handleToolClick(tool.id)}
          >
            <div className="tool-header">
              <div className="tool-icon">
                {tool.category === 'Scanner' && <Search size={24} />}
                {tool.category === 'Search Engine' && <Globe size={24} />}
                {tool.category === 'Crawler' && <Terminal size={24} />}
                {tool.category === 'Monitoring' && <AlertTriangle size={24} />}
                {tool.category === 'Forensics' && <Database size={24} />}
                {tool.category === 'Threat Intelligence' && <Shield size={24} />}
              </div>
              <h3 className="tool-title">{tool.name}</h3>
            </div>
            
            <p className="tool-description">{tool.description}</p>
            
            <div className="tool-features">
              {tool.features.map((feature, index) => (
                <span key={index} className="feature-tag">{feature}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {scanResults && (
        <div className="results-panel">
          <h3 className="results-title">{scanResults.title}</h3>
          <div className="results-content">
            {scanResults.findings.map((finding: any, index: number) => (
              <div key={index} className="finding-item">
                {finding.type === 'Security Issue' && (
                  <>
                    <div className={`severity-indicator ${finding.severity.toLowerCase()}`} />
                    <div className="finding-details">
                      <span className="finding-type">{finding.type}</span>
                      <p className="finding-description">{finding.details}</p>
                    </div>
                  </>
                )}
                {finding.type === 'Domain' && (
                  <div className="domain-finding">
                    <span className="domain-url">{finding.url}</span>
                    <span className="domain-category">{finding.category}</span>
                  </div>
                )}
                {finding.type === 'Network' && (
                  <div className="network-finding">
                    <span className="network-type">{finding.type}</span>
                    <span className="network-details">{finding.details}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OsintPanel;