import React, { useState } from 'react';
import { Scan, Link, AlertCircle } from 'lucide-react';
import { onionSites } from '../../data/mockData';
import './OnionScanner.css';

const OnionScanner: React.FC = () => {
  const [scanUrl, setScanUrl] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanResult, setScanResult] = useState<any | null>(null);
  const [scanError, setScanError] = useState<string | null>(null);
  const [scanHistory, setScanHistory] = useState<string[]>([]);
  
  const handleScan = () => {
    if (!scanUrl.trim()) return;
    
    // Reset states
    setScanning(true);
    setScanProgress(0);
    setScanResult(null);
    setScanError(null);
    
    // Add to scan history if not already there
    if (!scanHistory.includes(scanUrl)) {
      setScanHistory([scanUrl, ...scanHistory].slice(0, 10));
    }
    
    // Simulate scanning progress
    const scanInterval = setInterval(() => {
      setScanProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);
    
    // Simulate scan completion
    setTimeout(() => {
      clearInterval(scanInterval);
      setScanProgress(100);
      
      // Find result from mock data or generate error
      const result = onionSites.find(site => site.url.toLowerCase() === scanUrl.toLowerCase());
      
      if (result) {
        setScanResult(result);
      } else {
        setScanError("Unable to connect to target. The onion service might be offline or does not exist.");
      }
      
      setScanning(false);
    }, 3000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleScan();
    }
  };
  
  const handleHistoryClick = (url: string) => {
    setScanUrl(url);
  };
  
  const getThreatLevelClass = (score: number): string => {
    if (score >= 90) return 'critical';
    if (score >= 70) return 'high';
    if (score >= 50) return 'medium';
    return 'low';
  };
  
  return (
    <div className="onion-scanner">
      <div className="scanner-header">
        <h2 className="scanner-title">Onion Link Scanner</h2>
        <div className="scanner-subtitle">
          <AlertCircle size={16} />
          <span>Simulated scanner - no real connections are made</span>
        </div>
      </div>
      
      <div className="scanner-content">
        <div className="scanner-main">
          <div className="scan-input-container">
            <div className="scan-input-wrapper">
              <input
                type="text"
                className="scan-input"
                placeholder="Enter .onion URL to scan (e.g., http://cred5tg3j2m5n7x.onion)"
                value={scanUrl}
                onChange={(e) => setScanUrl(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={scanning}
              />
              <button 
                className="scan-button"
                onClick={handleScan}
                disabled={scanning || !scanUrl.trim()}
              >
                <Scan size={18} />
                <span>Scan</span>
              </button>
            </div>
            
            <div className="scan-tips">
              <p>Try these examples: <code>http://cred5tg3j2m5n7x.onion</code>, <code>http://ransom76market.onion</code>, <code>http://zeroday2market.onion</code></p>
            </div>
          </div>
          
          {scanning && (
            <div className="scan-progress-container">
              <div className="scan-progress-header">
                <h3>Scanning {scanUrl}</h3>
                <span className="scan-progress-percentage">{Math.round(scanProgress)}%</span>
              </div>
              
              <div className="scan-progress-bar-container">
                <div 
                  className="scan-progress-bar"
                  style={{ width: `${scanProgress}%` }}
                ></div>
              </div>
              
              <div className="scan-progress-details">
                <div className="scan-step">
                  <span className="step-name">Connecting to Tor network</span>
                  <span className="step-status completed">Completed</span>
                </div>
                <div className="scan-step">
                  <span className="step-name">Resolving onion address</span>
                  <span className="step-status completed">Completed</span>
                </div>
                <div className="scan-step">
                  <span className="step-name">Checking SSL certificate</span>
                  <span className="step-status active">In progress</span>
                </div>
                <div className="scan-step">
                  <span className="step-name">Analyzing content</span>
                  <span className="step-status pending">Pending</span>
                </div>
                <div className="scan-step">
                  <span className="step-name">Checking for vulnerabilities</span>
                  <span className="step-status pending">Pending</span>
                </div>
              </div>
            </div>
          )}
          
          {!scanning && scanResult && (
            <div className="scan-result">
              <div className="scan-result-header">
                <h3 className="scan-result-title">Scan Results</h3>
                <div className="scan-timestamp">
                  {new Date().toLocaleTimeString()}
                </div>
              </div>
              
              <div className="scan-result-content">
                <div className="scan-result-primary">
                  <h4 className="scan-target-url">{scanResult.url}</h4>
                  <h3 className="scan-target-name">{scanResult.title}</h3>
                  <p className="scan-target-description">{scanResult.description}</p>
                </div>
                
                <div className="scan-result-grid">
                  <div className="scan-result-card">
                    <div className="result-card-header">
                      <h4>Site Information</h4>
                    </div>
                    <div className="result-card-content">
                      <div className="result-item">
                        <span className="result-label">Type:</span>
                        <span className="result-value">{scanResult.type}</span>
                      </div>
                      <div className="result-item">
                        <span className="result-label">SSL Support:</span>
                        <span className={`result-value ${scanResult.sslSupport ? 'positive' : 'negative'}`}>
                          {scanResult.sslSupport ? 'Yes' : 'No'}
                        </span>
                      </div>
                      <div className="result-item">
                        <span className="result-label">Uptime:</span>
                        <span className="result-value">{scanResult.uptime}</span>
                      </div>
                      <div className="result-item">
                        <span className="result-label">Last Seen:</span>
                        <span className="result-value">{scanResult.lastSeen}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="scan-result-card">
                    <div className="result-card-header">
                      <h4>Threat Assessment</h4>
                    </div>
                    <div className="result-card-content">
                      <div className="threat-score-meter">
                        <div className="threat-score-label">Malicious Score</div>
                        <div className={`threat-score-value ${getThreatLevelClass(scanResult.maliciousScore)}`}>
                          {scanResult.maliciousScore}%
                        </div>
                        <div className="threat-score-bar-container">
                          <div 
                            className={`threat-score-bar ${getThreatLevelClass(scanResult.maliciousScore)}`}
                            style={{ width: `${scanResult.maliciousScore}%` }}
                          ></div>
                        </div>
                        <div className="threat-score-scale">
                          <span>Low</span>
                          <span>Medium</span>
                          <span>High</span>
                          <span>Critical</span>
                        </div>
                      </div>
                      
                      <div className="threat-assessment-summary">
                        <p className={`assessment-text ${getThreatLevelClass(scanResult.maliciousScore)}`}>
                          {scanResult.maliciousScore >= 90 
                            ? 'This site is highly malicious and likely involved in illegal activities.'
                            : scanResult.maliciousScore >= 70
                              ? 'This site contains potentially harmful content and should be approached with caution.'
                              : scanResult.maliciousScore >= 50
                                ? 'This site has some suspicious elements but is not overtly malicious.'
                                : 'This site appears to be relatively benign based on our scan.'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="scan-actions">
                  <button className="btn" onClick={() => setScanResult(null)}>
                    New Scan
                  </button>
                  <button className="btn btn-primary">
                    Full Report
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {!scanning && scanError && (
            <div className="scan-error">
              <AlertCircle size={24} />
              <h3>Scan Error</h3>
              <p>{scanError}</p>
              <button 
                className="btn btn-primary"
                onClick={() => setScanError(null)}
              >
                Try Again
              </button>
            </div>
          )}
        </div>
        
        <div className="scanner-sidebar">
          <div className="scan-history-container">
            <h3 className="sidebar-heading">Scan History</h3>
            {scanHistory.length > 0 ? (
              <ul className="scan-history-list">
                {scanHistory.map((url, index) => (
                  <li key={index} className="history-item">
                    <button
                      className="history-button"
                      onClick={() => handleHistoryClick(url)}
                    >
                      <Link size={14} />
                      <span>{url}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="sidebar-empty-message">No scan history yet</p>
            )}
          </div>
          
          <div className="scanner-info-container">
            <h3 className="sidebar-heading">Scanner Features</h3>
            <ul className="scanner-features-list">
              <li>SSL verification and certificate analysis</li>
              <li>Hidden service type detection</li>
              <li>Content analysis and categorization</li>
              <li>Vulnerability scanning</li>
              <li>Uptime monitoring and history</li>
              <li>Threat assessment and scoring</li>
            </ul>
            
            <div className="scanner-disclaimer">
              <p>This scanner operates in simulation mode. All data is generated for educational purposes only.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnionScanner;