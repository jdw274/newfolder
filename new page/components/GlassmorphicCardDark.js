function GlassmorphicCardDark() {
    return (
        <div className="glass-card p-8" data-name="glassmorphic-card-dark">
            <h2 className="text-2xl font-semibold mb-4 text-white" data-name="card-title">
                Dark Glassmorphic Card
            </h2>
            <p className="text-gray-300 mb-6" data-name="card-description">
                This is a translucent card with a glass-like effect. It features a subtle 
                backdrop blur and a beautiful gradient border.
            </p>
            <div className="flex justify-between items-center" data-name="card-footer">
                <button className="px-4 py-2 bg-white bg-opacity-10 rounded-lg text-white hover:bg-opacity-20 transition-all duration-200" data-name="card-button">
                    Learn More
                </button>
                <span className="text-gray-400" data-name="card-date">
                    2024
                </span>
            </div>
        </div>
    );
}
