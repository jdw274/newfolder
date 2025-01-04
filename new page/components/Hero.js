function Hero() {
    return (
        <div className="pt-32 pb-20 text-center" data-name="hero-section">
            <div className="inline-flex items-center bg-opacity-20 bg-purple-500 px-4 py-2 rounded-full mb-8">
                <span className="mr-2">🎉</span>
                <span data-name="announcement">Introducing AI Analytics Command</span>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 mx-auto max-w-4xl" data-name="hero-title">
                The Future of AI-Powered Analytics Management
            </h1>
            
            <p className="text-gray-400 text-xl mb-12 mx-auto max-w-2xl" data-name="hero-description">
                Transform your data into actionable insights with our unified AI-powered analytics platform for both cloud and on-premise solutions.
            </p>
            
            <div className="flex justify-center gap-4">
                <button className="button-primary" data-name="get-started-button">Get Started</button>
                <button className="button-secondary" data-name="explore-platform-button">Explore Platform</button>
            </div>
        </div>
    );
}
