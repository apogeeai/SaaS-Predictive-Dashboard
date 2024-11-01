import React from 'react';
import { TrendingUp, Users, CreditCard, Activity, ArrowUpRight, ArrowDownRight, DollarSign, LineChart, UserPlus, Building2 } from 'lucide-react';
import MetricCard from './components/MetricCard';
import Chart from './components/Chart';
import PredictiveInsights from './components/PredictiveInsights';
import CustomerSegment from './components/CustomerSegment';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-[1600px] mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Analytics Dashboard</h1>
          <p className="text-slate-600">Track, analyze, and optimize your SaaS metrics</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="MRR"
            value="$24,500"
            change="+12.5%"
            trend="up"
            icon={<DollarSign className="w-5 h-5" />}
          />
          <MetricCard
            title="Active Users"
            value="1,234"
            change="+8.2%"
            trend="up"
            icon={<Users className="w-5 h-5" />}
          />
          <MetricCard
            title="Churn Rate"
            value="2.1%"
            change="-0.5%"
            trend="down"
            icon={<Activity className="w-5 h-5" />}
          />
          <MetricCard
            title="Customer LTV"
            value="$890"
            change="+15.3%"
            trend="up"
            icon={<CreditCard className="w-5 h-5" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-slate-800">Revenue Growth</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-600 flex items-center">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  23.5%
                </span>
              </div>
            </div>
            <Chart />
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <PredictiveInsights />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <CustomerSegment />
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">Key Insights</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-medium text-green-900">Growth Opportunity</h3>
                  <p className="text-sm text-green-700">Enterprise segment shows 45% higher conversion rate. Consider focusing marketing efforts here.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <UserPlus className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-blue-900">User Acquisition</h3>
                  <p className="text-sm text-blue-700">Referral program driving 32% of new signups. Potential to increase rewards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                <Building2 className="w-5 h-5 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-medium text-purple-900">Market Expansion</h3>
                  <p className="text-sm text-purple-700">EMEA region showing strong product-market fit with 28% MoM growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;