import React from 'react';

interface SiteCategory {
  category: string;
  count: number;
}

interface SitesCategoryChartProps {
  data: SiteCategory[];
}

const SitesCategoryChart: React.FC<SitesCategoryChartProps> = ({ data }) => {
  return (
    <div className="sites-category-chart">
      {/* Sites category chart visualization will go here */}
      {data.map((item, index) => (
        <div key={index} className="category-item">
          <span className="category">{item.category}</span>
          <span className="count">{item.count}</span>
        </div>
      ))}
    </div>
  );
};

export default SitesCategoryChart;