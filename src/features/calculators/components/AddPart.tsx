import { useState, type FormEvent } from "react";
import Select from 'react-select';

interface Props {
    onAddItem: (name: string, quantity: number) => void;
    itemOptions: string[];
}

export default function ItemInputForm({ onAddItem, itemOptions }: Props) {
    const [selectedItem, setSelectedItem] = useState<{ value: string; label: string } | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    const options = itemOptions.map(item => ({
        value: item,
        label: item
    }));

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!selectedItem || quantity <= 0) return;
        onAddItem(selectedItem.value, quantity);
        setSelectedItem(null);
        setQuantity(1);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
                <Select
                    value={selectedItem}
                    onChange={(newValue) => setSelectedItem(newValue)}
                    options={options}
                    placeholder="Search for a part..."
                    className="react-select-container"
                    classNamePrefix="react-select"
                    isClearable
                    isSearchable
                    styles={{
                        control: (base) => ({
                            ...base,
                            minHeight: '42px',
                            backgroundColor: 'rgb(55 65 81)', // dark:bg-gray-700
                            borderColor: 'rgb(75 85 101)', // dark:border-gray-600
                            '&:hover': {
                                borderColor: 'rgb(75 85 101)', // dark:border-gray-600
                            },
                        }),
                        menu: (base) => ({
                            ...base,
                            backgroundColor: 'rgb(55 65 81)', // dark:bg-gray-700
                            border: '1px solid rgb(75 85 101)', // dark:border-gray-600
                        }),
                        option: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused ? 'rgb(75 85 101)' : 'rgb(55 65 81)', // dark:bg-gray-700 and hover
                            color: '#ffffff',
                            '&:active': {
                                backgroundColor: 'rgb(75 85 101)', // dark:border-gray-600
                            },
                        }),
                        singleValue: (base) => ({
                            ...base,
                            color: '#ffffff',
                        }),
                        input: (base) => ({
                            ...base,
                            color: '#ffffff',
                        }),
                        placeholder: (base) => ({
                            ...base,
                            color: '#ffffff',
                            opacity: 0.7,
                        }),
                        valueContainer: (base) => ({
                            ...base,
                            color: '#ffffff',
                        }),
                    }}
                />
            </div>
            <div className="w-full sm:w-32">
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min="1"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
            </div>
            <button 
                type="submit" 
                disabled={!selectedItem || quantity <= 0}
                className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
            >
                Add Item
            </button>
        </form>
    );
}