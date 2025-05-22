export default function HowToUse() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-base font-medium text-gray-900 dark:text-white mb-4">
                How to Use
            </h3>
                    <div className="prose dark:prose-invert max-w-none">
                        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <li>Select a part from the dropdown menu</li>
                            <li>Enter the quantity you need</li>
                            <li>Click "Add Item" to add it to your list</li>
                            <li>Repeat for all parts you need</li>
                            <li>The calculator will show the total raw materials required</li>
                </ol>
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    <p>Note: The calculator includes all raw materials needed, including those required for intermediate parts.</p>
                </div>
            </div>
        </div>
    )
}