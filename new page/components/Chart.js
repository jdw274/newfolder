import React from 'react';

function Chart({ title }) {
    return (
        <div className="chart-container p-6" data-name="chart-section">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium" data-name="chart-title">{title}</h3>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 rounded-md bg-opacity-20 bg-purple-500" data-name="day-button">D</button>
                    <button className="px-3 py-1 rounded-md bg-opacity-20 bg-purple-500" data-name="week-button">W</button>
                    <button className="px-3 py-1 rounded-md bg-opacity-20 bg-purple-500" data-name="month-button">M</button>
                    <button className="px-3 py-1 rounded-md bg-opacity-20 bg-purple-500" data-name="year-button">Y</button>
                </div>
            </div>
            
            <div className="h-48 flex items-end justify-between" data-name="chart-placeholder">
                {[40, 70, 30, 85, 50, 65, 75].map((height, index) => (
                    <div 
                        key={index}
                        style={{ height: `${height}%` }}
                        className="w-8 bg-purple-500 bg-opacity-20 rounded-t-md"
                        data-name={`chart-bar-${index}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
