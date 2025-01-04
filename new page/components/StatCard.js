function StatCard({ icon, title, value, change, viewDetails }) {
    return (
        <div className="stat-card p-6" data-name="stat-card">
            <div className="flex justify-between items-start mb-4">
                <span className="text-2xl">{icon}</span>
                <button className="text-sm text-purple-400 hover:text-purple-300" data-name="view-details-button">
                    View Details
                </button>
            </div>
            
            <h3 className="text-gray-400 mb-2" data-name="stat-title">{title}</h3>
            <div className="flex items-end justify-between">
                <span className="text-4xl font-semibold" data-name="stat-value">{value}</span>
                <span className={`text-sm ${change >= 0 ? 'text-green-400' : 'text-red-400'}`} data-name="stat-change">
                    {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
                </span>
            </div>
        </div>
    );
}
