import { Navigation } from "./Navigation";
import { useState, useEffect } from "react";

export default function MainLayout({ children, title }: { children: React.ReactNode, title?: string }) {
    const [showWarning, setShowWarning] = useState(true);

    useEffect(() => {
        const dismissed = localStorage.getItem('warningDismissed');
        if (dismissed) {
            setShowWarning(false);
        }
    }, []);

    const handleDismiss = () => {
        localStorage.setItem('warningDismissed', 'true');
        setShowWarning(false);
    };

    return (<>
        <Navigation />
        {showWarning && (
            <div className="bg-gray-700 border-b border-gray-600 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <p className="text-sm text-gray-200">
                                <span className="font-medium text-yellow-400">Under Development:</span> Not all parts and recipes are available yet. 
                                <a 
                                    href="https://github.com/joshe/stationeers-calculator" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 ml-1 underline"
                                >
                                    Click here to contribute!
                                </a>
                            </p>
                        </div>
                        <button
                            onClick={handleDismiss}
                            className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        )}
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            {title && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">
                        {title}
                    </h1>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"></div>
                </div>
            )}
            <main className="flex-grow">
                {children}
            </main>
        </div>
    </>
    )
}