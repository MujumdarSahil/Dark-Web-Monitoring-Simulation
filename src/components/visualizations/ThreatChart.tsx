import React from 'react';

interface ThreatLevel {
  level: string;
  count: number;
}

interface ThreatChartProps {
  data: ThreatLevel[];
}

const ThreatChart: React.FC<ThreatChartProps> = ({ data }) => {
  return (
    <div className="threat-chart">
      {/* Threat chart visualization will go here */}
      {data.map((item, index) => (
        <div key={index} className="threat-level-item">
          <span className="level">{item.level}</span>
          <span className="count">{item.count}</span>
        </div>
      ))}
    </div>
  );
};

export default ThreatChart;