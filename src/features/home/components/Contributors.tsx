import contributorsData from '@/data/contributors.json';

interface Contributor {
    name: string;
    github: string;
    avatar: string;
    contributions: string[];
}

export default function Contributors() {
    const contributors: Contributor[] = contributorsData.contributors;

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Contributors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contributors.map((contributor) => (
                    <div 
                        key={contributor.github}
                        className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors duration-200"
                    >
                        <div className="flex items-center space-x-4">
                            <img 
                                src={contributor.avatar} 
                                alt={`${contributor.name}'s avatar`}
                                className="w-16 h-16 rounded-full border-2 border-gray-500"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    {contributor.name}
                                </h3>
                                <a
                                    href={`https://github.com/${contributor.github}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 text-sm"
                                >
                                    @{contributor.github}
                                </a>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-300 mb-2">Contributions:</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {contributor.contributions.map((contribution, index) => (
                                    <li key={index} className="text-sm text-gray-400">
                                        {contribution}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 text-center">
                <a
                    href="https://github.com/joshnsmith/stationeers-calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Become a Contributor
                </a>
            </div>
        </div>
    );
}
