function GlassmorphicCard({ 
    title = 'Glassmorphic Card',
    content = 'This is a translucent card with a subtle blur effect, creating a modern glassmorphic appearance.',
    className = '',
    ...props 
}) {
    return (
        <div 
            className={`w-96 p-8 rounded-xl bg-gray-500/20 backdrop-blur-sm border border-gray-200 shadow-lg ${className}`}
            data-name="glassmorphic-card"
            {...props}
        >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4" data-name="card-title">
                {title}
            </h2>
            <p className="text-gray-600" data-name="card-content">
                {content}
            </p>
        </div>
    );
}
