import React from 'react';
import BackgroundEffect from './components/BackgroundEffect';
import GlassmorphicCard from './components/GlassmorphicCard';
import GlassmorphicCardDark from './components/GlassmorphicCardDark';

function App() {
    return (
        <div className="relative min-h-screen bg-white" data-name="app-container">
            <BackgroundEffect />
            <div className="relative z-10 container mx-auto px-4 py-20">
                <h1 className="text-4xl text-gray-800 text-center mb-12">
                    Glassmorphic UI Demo
                </h1>
                <div className="flex flex-col gap-8 items-center">
                    {/* Light glassmorphic cards */}
                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-800 text-center mb-8">Light Style</h2>
                        <div className="flex flex-col gap-8">
                            <GlassmorphicCard />
                            <GlassmorphicCard 
                                title="Custom Title" 
                                content="Custom content here with a different message to demonstrate the flexibility of the component."
                            />
                            <GlassmorphicCard 
                                className="w-full md:w-96" 
                                title="Responsive Card"
                                content="This card is fully responsive and will adjust its width based on the screen size."
                            />
                        </div>
                    </div>

                    {/* Dark glassmorphic cards */}
                    <div>
                        <h2 className="text-2xl text-gray-800 text-center mb-8">Dark Style</h2>
                        <div className="flex flex-col gap-8">
                            <GlassmorphicCardDark />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
