import React from 'react';
import { LineChart } from 'lucide-react';

const Chart: React.FC = () => {
  return (
    <div className="relative h-[300px] w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <LineChart className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-400 text-sm">Chart visualization would go here</p>
          <p className="text-slate-400 text-xs">Using a charting library of your choice</p>
        </div>
      </div>
    </div>
  );
}

export default Chart;