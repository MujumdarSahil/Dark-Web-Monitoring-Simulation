import React from 'react';
import { AlertTriangle, Clock, Search, Shield, BarChart2 } from 'lucide-react';
import { statistics, threatFeedData } from '../../data/mockData';
import ThreatChart from '../visualizations/ThreatChart';
import SitesCategoryChart from '../visualizations/SitesCategoryChart';
import ActiveThreatsWidget from '../widgets/ActiveThreatsWidget';
import './DashboardOverview.css';

const DashboardOverview: React.FC = () => {
  // Get the most recent threats for the dashboard
  const recentThreats = threatFeedData.slice(0, 5);
  
  return (
    <div className="dashboard-overview">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Threat Intelligence Overview</h2>
        <div className="dashboard-timestamp">
          <Clock size={16} />
          <span>Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>
      
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-icon">
            <AlertTriangle size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{statistics.recentActivity.lastHour}</div>
            <div className="stat-label">New Threats <span>(Last Hour)</span></div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Search size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{statistics.sitesPerCategory.reduce((total, item) => total + item.count, 0)}</div>
            <div className="stat-label">Monitored Sites</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Shield size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{statistics.threatLevels[0].count + statistics.threatLevels[1].count}</div>
            <div className="stat-label">Critical/High Threats</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <BarChart2 size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{statistics.recentActivity.last24Hours}</div>
            <div className="stat-label">Activities <span>(24h)</span></div>
          </div>
        </div>
      </div>
      
      <div className="dashboard-grid">
        <div className="dashboard-card threat-chart-card grid-item-large">
          <div className="card-header">
            <h3>Threat Level Distribution</h3>
          </div>
          <div className="card-body">
            <ThreatChart data={statistics.threatLevels} />
          </div>
        </div>
        
        <div className="dashboard-card sites-chart-card grid-item-large">
          <div className="card-header">
            <h3>Sites by Category</h3>
          </div>
          <div className="card-body">
            <SitesCategoryChart data={statistics.sitesPerCategory} />
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Active Threats</h3>
          </div>
          <div className="card-body">
            <ActiveThreatsWidget data={statistics.activeThreats} />
          </div>
        </div>
        
        <div className="dashboard-card recent-threats-card">
          <div className="card-header">
            <h3>Recent Alerts</h3>
          </div>
          <div className="card-body">
            <div className="recent-threats-list">
              {recentThreats.map((threat) => (
                <div key={threat.id} className="recent-threat-item">
                  <div className="threat-severity">
                    <span className={`threat-badge ${threat.severity.toLowerCase()}`}>
                      {threat.severity}
                    </span>
                  </div>
                  <div className="threat-info">
                    <h4 className="threat-title">{threat.title}</h4>
                    <p className="threat-description">{threat.description}</p>
                    <div className="threat-meta">
                      <span className="threat-source">{threat.source}</span>
                      <span className="threat-time">
                        {new Date(threat.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="dashboard-card keywords-card">
          <div className="card-header">
            <h3>Top Keywords</h3>
          </div>
          <div className="card-body">
            <div className="keyword-cloud">
              {statistics.topKeywords.map((keyword, index) => (
                <div 
                  key={index}
                  className="keyword-item"
                  style={{ 
                    fontSize: `${Math.max(0.8, Math.min(1.5, keyword.count / 100))}rem`,
                    opacity: Math.max(0.7, Math.min(1, keyword.count / 200))
                  }}
                >
                  {keyword.keyword}
                  <span className="keyword-count">{keyword.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;