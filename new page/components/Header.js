function Header() {
    return (
        <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-[#0a0a1a] to-[#1a1a3a] bg-opacity-90 backdrop-blur-sm">
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold" data-name="logo">DataVision AI</h1>
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className="nav-link" data-name="platform-link">Platform</a>
                    <a href="#" className="nav-link" data-name="products-link">Products</a>
                    <a href="#" className="nav-link" data-name="services-link">Services</a>
                    <a href="#" className="nav-link" data-name="resources-link">Resources</a>
                    <a href="#" className="nav-link" data-name="company-link">Company</a>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="nav-link" data-name="sign-in-button">Sign In</button>
                    <button className="button-primary" data-name="try-now-button">Try now</button>
                </div>
            </nav>
        </header>
    );
}
