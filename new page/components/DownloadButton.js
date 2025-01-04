function DownloadButton() {
    return (
        <button 
            onClick={downloadZip}
            className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg flex items-center space-x-2 transition-colors duration-200"
            data-name="download-button"
        >
            <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
            </svg>
            <span>Download Code</span>
        </button>
    );
}
