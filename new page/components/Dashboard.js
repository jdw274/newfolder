import React from 'react';
import StatCard from './StatCard';
import Chart from './Chart';

function Dashboard() {
    return (
        <div className="dashboard-container p-6 mx-auto max-w-6xl mt-12" data-name="dashboard">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold" data-name="dashboard-title">Your Analytics Overview</h2>
                <div className="flex items-center space-x-4">
                    <select className="bg-transparent border border-gray-700 rounded-md px-3 py-1" data-name="platform-select">
                        <option>Analytics Platform</option>
                        <option>Data Insights</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard icon="📊" title="Total Processed" value="156,742" change={10} />
                <StatCard icon="👥" title="Active Users" value="45,257" change={-12} />
                <StatCard icon="🔄" title="Real-time Events" value="3,891" change={20} />
                <StatCard icon="☁️" title="Cloud Usage" value="892" change={15} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Chart title="Analytics Performance" />
                <Chart title="User Engagement" />
            </div>
        </div>
    );
}
