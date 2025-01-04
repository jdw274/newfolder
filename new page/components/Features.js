import React from 'react';

function FeatureCard({ icon, title, description }) {
    return (
        <div className="feature-card p-6" data-name="feature-card">
            <div className="text-3xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-3" data-name="feature-title">{title}</h3>
            <p className="text-gray-400" data-name="feature-description">{description}</p>
        </div>
    );
}

function Features() {
    const features = [
        {
            icon: "🤖",
            title: "AI-Powered Analytics",
            description: "Leverage advanced machine learning algorithms to uncover hidden patterns and insights in your data."
        },
        {
            icon: "⚡",
            title: "Real-time Processing",
            description: "Process and analyze data in real-time with our high-performance computing infrastructure."
        },
        {
            icon: "🔒",
            title: "Enterprise Security",
            description: "Bank-grade security with end-to-end encryption and compliance with major security standards."
        },
        {
            icon: "🔄",
            title: "Automated Workflows",
            description: "Create and automate complex data workflows with our intuitive visual interface."
        }
    ];

    return (
        <section className="py-20" data-name="features-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4" data-name="features-title">
                        Powerful Features for Modern Analytics
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto" data-name="features-description">
                        Everything you need to transform your data into actionable insights
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
