function createZipContent(files) {
    try {
        const zipContent = {
            'README.md': `# Background Effect Component

A beautiful glowing ring background effect built with React.

## Files included:
- index.html: Main HTML file
- app.js: Main React application
- components/BackgroundEffect.js: The background effect component
- styles/background.css: Styles for the background effect

## How to use:
1. Include all required files in your project
2. Import and use the BackgroundEffect component
3. Make sure to include the CSS file

## Dependencies:
- React 18
- ReactDOM 18
- Tailwind CSS`,
            'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Background Effect Demo</title>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"><\/script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="styles/background.css" rel="stylesheet">
<\/head>
<body class="min-h-screen bg-gradient-to-br from-[#0a0a1a] to-[#1a1a3a]">
    <div id="root"><\/div>
    <script type="text/babel" src="components/BackgroundEffect.js"><\/script>
    <script type="text/babel" src="app.js"><\/script>
<\/body>
<\/html>`,
            'app.js': `function App() {
    return (
        <div className="relative min-h-screen" data-name="app-container">
            <BackgroundEffect />
            <div className="relative z-10 container mx-auto px-4 py-20">
                <h1 className="text-4xl text-white text-center">
                    Background Effect Demo
                </h1>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,
            'components/BackgroundEffect.js': `function BackgroundEffect() {
    return (
        <div data-name="background-effects-container">
            <div className="glowing-ring" data-name="background-effect"></div>
            <div 
                className="glowing-ring" 
                style={{transform: 'translate(-50%, -50%) rotate(90deg)'}} 
                data-name="background-effect-rotated"
            ></div>
        </div>
    );
}`,
            'styles/background.css': `.glowing-ring {
    position: fixed;
    width: 800px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(ellipse at center, 
        rgba(124, 58, 237, 0) 0%,
        rgba(124, 58, 237, 0.05) 30%,
        rgba(124, 58, 237, 0.2) 45%,
        rgba(163, 117, 237, 0.4) 50%,
        rgba(124, 58, 237, 0.2) 55%,
        rgba(124, 58, 237, 0.05) 70%,
        rgba(124, 58, 237, 0) 100%
    );
    filter: blur(30px);
    animation: glow 8s infinite;
    pointer-events: none;
    z-index: 0;
}

.glowing-ring::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, 
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.03) 50%,
        rgba(255, 255, 255, 0) 100%
    );
    filter: blur(15px);
    opacity: 0.8;
    animation: pulse 4s infinite;
}

@keyframes glow {
    0% {
        opacity: 0.7;
        transform: translate(-50%, -50%) scale(1) rotate(0deg);
    }
    50% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.1) rotate(180deg);
    }
    100% {
        opacity: 0.7;
        transform: translate(-50%, -50%) scale(1) rotate(360deg);
    }
}

@keyframes pulse {
    0% {
        opacity: 0.3;
    }
    50% {
        opacity: 0.8;
    }
    100% {
        opacity: 0.3;
    }
}`
        };

        return zipContent;
    } catch (error) {
        reportError(error);
        throw new Error('Failed to create zip content');
    }
}

function downloadZip() {
    try {
        const zipContent = createZipContent();
        const zip = new JSZip();

        // Add files to zip
        Object.entries(zipContent).forEach(([path, content]) => {
            const folders = path.split('/');
            if (folders.length > 1) {
                // Create folders if needed
                let currentPath = '';
                for (let i = 0; i < folders.length - 1; i++) {
                    currentPath += folders[i] + '/';
                    if (!zip.folder(currentPath)) {
                        zip.folder(currentPath);
                    }
                }
            }
            zip.file(path, content);
        });

        // Generate and download zip
        zip.generateAsync({ type: 'blob' })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'background-effect.zip';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            });
    } catch (error) {
        reportError(error);
        alert('Failed to download files. Please try again.');
    }
}
