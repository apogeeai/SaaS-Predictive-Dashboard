import React from 'react';

const CustomerSegment: React.FC = () => {
  const segments = [
    { name: 'Enterprise', percentage: 35, color: 'bg-blue-500' },
    { name: 'Mid-Market', percentage: 45, color: 'bg-green-500' },
    { name: 'Small Business', percentage: 20, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-800 mb-6">Customer Segments</h2>
      <div className="space-y-6">
        {segments.map((segment) => (
          <div key={segment.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-slate-700">{segment.name}</span>
              <span className="text-slate-600">{segment.percentage}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${segment.color} transition-all duration-500`}
                style={{ width: `${segment.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerSegment;