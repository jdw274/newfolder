"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function reportError(error) {
  console.error('Error:', error); // Additional error reporting logic can be added here
}

function createZipContent() {
  try {
    var zipContent = {
      'README.md': "# Background Effect Component\n\nA beautiful glowing ring background effect built with React.\n\n## Files included:\n- index.html: Main HTML file\n- app.js: Main React application\n- components/BackgroundEffect.js: The background effect component\n- styles/background.css: Styles for the background effect\n\n## How to use:\n1. Include all required files in your project\n2. Import and use the BackgroundEffect component\n3. Make sure to include the CSS file\n\n## Dependencies:\n- React 18\n- ReactDOM 18\n- Tailwind CSS",
      'index.html': "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Background Effect Demo</title>\n    <script src=\"https://unpkg.com/react@18/umd/react.production.min.js\"></script>\n    <script src=\"https://unpkg.com/react-dom@18/umd/react-dom.production.min.js\"></script>\n    <script src=\"https://unpkg.com/@babel/standalone/babel.min.js\"></script>\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link href=\"styles/background.css\" rel=\"stylesheet\">\n</head>\n<body class=\"min-h-screen bg-gradient-to-br from-[#0a0a1a] to-[#1a1a3a]\">\n    <div id=\"root\"></div>\n    <script type=\"text/babel\" src=\"components/BackgroundEffect.js\"></script>\n    <script type=\"text/babel\" src=\"app.js\"></script>\n</body>\n</html>",
      'app.js': "function App() {\n    return (\n        <div className=\"relative min-h-screen\" data-name=\"app-container\">\n            <BackgroundEffect />\n            <div className=\"relative z-10 container mx-auto px-4 py-20\">\n                <h1 className=\"text-4xl text-white text-center\">\n                    Background Effect Demo\n                </h1>\n            </div>\n        </div>\n    );\n}\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
      'components/BackgroundEffect.js': "function BackgroundEffect() {\n    return (\n        <div data-name=\"background-effects-container\">\n            <div className=\"glowing-ring\" data-name=\"background-effect\"></div>\n            <div \n                className=\"glowing-ring\" \n                style={{transform: 'translate(-50%, -50%) rotate(90deg)'}} \n                data-name=\"background-effect-rotated\"\n            ></div>\n        </div>\n    );\n}",
      'styles/background.css': ".glowing-ring {\n    position: fixed;\n    width: 800px;\n    height: 400px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    background: radial-gradient(ellipse at center, \n        rgba(124, 58, 237, 0) 0%,\n        rgba(124, 58, 237, 0.05) 30%,\n        rgba(124, 58, 237, 0.2) 45%,\n        rgba(163, 117, 237, 0.4) 50%,\n        rgba(124, 58, 237, 0.2) 55%,\n        rgba(124, 58, 237, 0.05) 70%,\n        rgba(124, 58, 237, 0) 100%\n    );\n    filter: blur(30px);\n    animation: glow 8s infinite;\n    pointer-events: none;\n    z-index: 0;\n}\n\n.glowing-ring::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: radial-gradient(ellipse at center, \n        rgba(255, 255, 255, 0) 0%,\n        rgba(255, 255, 255, 0.03) 50%,\n        rgba(255, 255, 255, 0) 100%\n    );\n    filter: blur(15px);\n    opacity: 0.8;\n    animation: pulse 4s infinite;\n}\n\n@keyframes glow {\n    0% {\n        opacity: 0.7;\n        transform: translate(-50%, -50%) scale(1) rotate(0deg);\n    }\n    50% {\n        opacity: 1;\n        transform: translate(-50%, -50%) scale(1.1) rotate(180deg);\n    }\n    100% {\n        opacity: 0.7;\n        transform: translate(-50%, -50%) scale(1) rotate(360deg);\n    }\n}\n\n@keyframes pulse {\n    0% {\n        opacity: 0.3;\n    }\n    50% {\n        opacity: 0.8;\n    }\n    100% {\n        opacity: 0.3;\n    }\n}"
    };
    return zipContent;
  } catch (error) {
    reportError(error);
    throw new Error('Failed to create zip content');
  }
}

function downloadZip() {
  try {
    var zipContent = createZipContent();
    var zip = new JSZip(); // Add files to zip

    Object.entries(zipContent).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          path = _ref2[0],
          content = _ref2[1];

      var folders = path.split('/');

      if (folders.length > 1) {
        // Create folders if needed
        var currentPath = '';

        for (var i = 0; i < folders.length - 1; i++) {
          currentPath += folders[i] + '/';

          if (!zip.folder(currentPath)) {
            zip.folder(currentPath);
          }
        }
      }

      zip.file(path, content);
    }); // Generate and download zip

    zip.generateAsync({
      type: 'blob'
    }).then(function (blob) {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
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
//# sourceMappingURL=downloadUtils.dev.js.map
