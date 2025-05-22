import ItemInputForm from "@/pages/calculators/ItemInputForm";
import recipes from "@/data/recipes.json";
interface Item {
    name: string;
    quantity: number;
}

export default function SelectedParts({ items, onClearAll, onRemoveItem, onAddItem }: { items: Item[], onClearAll: () => void, onRemoveItem: (index: number) => void, onAddItem: (name: string, quantity: number) => void }) {
    
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-medium text-gray-900 dark:text-white">
                    Selected Parts
                </h3>
                {items.length > 0 && (
                    <button
                        onClick={onClearAll}
                        className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                    >
                        Clear All
                    </button>
                )}
            </div>
            <ItemInputForm onAddItem={onAddItem} itemOptions={Object.keys(recipes)} />

            {items.length > 0 && (
                <>
                    <div className="mt-6 space-y-2">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-md p-3 group"
                            >
                                <span className="text-gray-900 dark:text-white">
                                    {item.name}
                                </span>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-600 dark:text-gray-300">
                                        x{item.quantity}
                                    </span>
                                    <button
                                        onClick={() => onRemoveItem(index)}
                                        className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Total Items: {totalItems}
                        </span>
                    </div>
                </>
            )}
        </div>
    )
}