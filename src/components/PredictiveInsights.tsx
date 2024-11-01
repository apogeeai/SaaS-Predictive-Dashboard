import React from 'react';
import { LineChart, TrendingUp, AlertCircle } from 'lucide-react';

const PredictiveInsights: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-800 mb-6">Predictive Insights</h2>
      <div className="space-y-6">
        <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
          <LineChart className="w-8 h-8 text-blue-600" />
          <div>
            <h3 className="font-medium text-slate-900">Projected Growth</h3>
            <p className="text-sm text-slate-600">Expected to reach 2,500 users by Q3</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
          <TrendingUp className="w-8 h-8 text-green-600" />
          <div>
            <h3 className="font-medium text-green-900">Revenue Forecast</h3>
            <p className="text-sm text-green-700">On track for $50K MRR by EOY</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
          <AlertCircle className="w-8 h-8 text-amber-600" />
          <div>
            <h3 className="font-medium text-amber-900">Action Required</h3>
            <p className="text-sm text-amber-700">Upgrade server capacity within 2 weeks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PredictiveInsights;