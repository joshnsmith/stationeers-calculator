import {useState} from "react";
import RequirementsTable from "@/pages/calculators/RequirementsTable";
import MainLayout from "@/layouts/MainLayout";
import recipes from "@/data/recipes.json";
import HowToUse from "./components/HowToUse";
import SelectedParts from "./components/SelectedParts";

interface Item {
    name: string;
    quantity: number;
}

export default function HomePageContainer() {
    const [items, setItems] = useState<Item[]>([]);

    const handleAddItem = (name: string, quantity: number) => {
        setItems([...items, { name, quantity }]);
    };

    const handleRemoveItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const handleClearAll = () => {
        setItems([]);
    };

    return (
        <MainLayout title="Parts to Ores">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <SelectedParts items={items} onClearAll={handleClearAll} onRemoveItem={handleRemoveItem} onAddItem={handleAddItem} />

                <RequirementsTable items={items} recipes={recipes} />

                <HowToUse />
            </div>
        </MainLayout>
    )
}