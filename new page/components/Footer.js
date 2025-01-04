import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <p>Follow us on 
                    <a href="#" className="text-blue-400"> Twitter</a>, 
                    <a href="#" className="text-blue-400"> Facebook</a>, 
                    <a href="#" className="text-blue-400"> Instagram</a>
                </p>
            </div>
        </footer>
    );
}
