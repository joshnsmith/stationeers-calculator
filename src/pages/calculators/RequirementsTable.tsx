import React, { useState, useEffect } from 'react';

interface Props {
    items: { name: string; quantity: number }[];
    recipes: Record<string, Record<string, number | boolean>>;
}

interface MaterialRequirement {
    name: string;
    amount: number;
    subRequirements?: MaterialRequirement[];
    path: string;
}

export default function RequirementsTable({ items, recipes }: Props) {
    const [isAdvancedView, setIsAdvancedView] = useState(false);
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

    useEffect(() => {
        setExpandedItems(new Set());
    }, [items]);

    const toggleItem = (path: string, event: React.MouseEvent) => {
        event.stopPropagation();
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(path)) {
            newExpanded.delete(path);
        } else {
            newExpanded.add(path);
        }
        setExpandedItems(newExpanded);
    };

    const calculateRequirements = (name: string, qty: number, parentPath: string = ''): MaterialRequirement => {
        const recipe = recipes[name];
        const currentPath = parentPath ? `${parentPath}.${name}` : `root.${name}`;
        
        if (!recipe) {
            return { name, amount: qty, path: currentPath };
        }

        const subRequirements: MaterialRequirement[] = [];
        Object.entries(recipe).forEach(([mat, amount]) => {
            if (mat === "smelt") return;
            const total = qty * (amount as number);
            if (recipes[mat]) {
                subRequirements.push(calculateRequirements(mat, total, currentPath));
            } else {
                subRequirements.push({ 
                    name: mat, 
                    amount: total, 
                    path: `${currentPath}.${mat}` 
                });
            }
        });

        return {
            name,
            amount: qty,
            path: currentPath,
            subRequirements
        };
    };

    const requirements: MaterialRequirement[] = items.map(({ name, quantity }) => 
        calculateRequirements(name, quantity)
    );

    const calculateOreTotals = (req: MaterialRequirement): Record<string, number> => {
        const totals: Record<string, number> = {};
        
        const addToTotals = (r: MaterialRequirement) => {
            if (!r.subRequirements) {
                if (r.name.includes('Ore')) {
                    totals[r.name] = (totals[r.name] || 0) + r.amount;
                }
            } else {
                r.subRequirements.forEach(addToTotals);
            }
        };

        addToTotals(req);
        return totals;
    };

    const renderRequirement = (req: MaterialRequirement, level: number = 0) => {
        const hasSubRequirements = req.subRequirements && req.subRequirements.length > 0;
        const isExpanded = expandedItems.has(req.path);

        return (
            <React.Fragment key={req.path}>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="py-3 px-4 text-gray-900 dark:text-white">
                        <div style={{ paddingLeft: `${level * 1.5}rem` }} className="flex items-center">
                            {level > 0 && (
                                <span className="text-gray-400 dark:text-gray-500 mr-2">└─</span>
                            )}
                            {hasSubRequirements && (
                                <button
                                    onClick={(e) => toggleItem(req.path, e)}
                                    className="mr-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                >
                                    {isExpanded ? (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    )}
                                </button>
                            )}
                            {req.name}
                        </div>
                    </td>
                    <td className="py-3 px-4 text-right text-gray-900 dark:text-white">
                        {Math.ceil(req.amount)}
                    </td>
                </tr>
                {isExpanded && req.subRequirements?.map(subReq => renderRequirement(subReq, level + 1))}
            </React.Fragment>
        );
    };

    const renderSimpleView = () => {
        const oreTotals: Record<string, number> = {};
        requirements.forEach(req => {
            const totals = calculateOreTotals(req);
            Object.entries(totals).forEach(([ore, amount]) => {
                oreTotals[ore] = (oreTotals[ore] || 0) + amount;
            });
        });

        return (
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.entries(oreTotals).map(([ore, amount]) => (
                    <tr key={ore} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="py-3 px-4 text-gray-900 dark:text-white">
                            {ore}
                        </td>
                        <td className="py-3 px-4 text-right text-gray-900 dark:text-white">
                            {Math.ceil(amount)}
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-medium text-gray-900 dark:text-white">
                    Part Requirements
                </h2>
                <div className="flex items-center space-x-2">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                        View
                    </p>
                    <button
                        onClick={() => setIsAdvancedView(false)}
                        className={`px-3 py-1 rounded-md text-sm ${
                            !isAdvancedView 
                                ? 'bg-blue-500 text-white' 
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                        Simple
                    </button>
                    <button
                        onClick={() => setIsAdvancedView(true)}
                        className={`px-3 py-1 rounded-md text-sm ${
                            isAdvancedView 
                                ? 'bg-blue-500 text-white' 
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                        Nested
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-300 font-medium text-sm">
                                Part / Ore
                            </th>
                            <th className="text-right py-3 px-4 text-gray-600 dark:text-gray-300 font-medium text-sm">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    {isAdvancedView ? (
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {requirements.map(req => renderRequirement(req))}
                        </tbody>
                    ) : (
                        renderSimpleView()
                    )}
                </table>
            </div>
            {requirements.length === 0 && (
                <div className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm">
                    No requirements calculated yet
                </div>
            )}
        </div>
    );
}