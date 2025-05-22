import React from "react";
import { Link } from "react-router";

type Calculator = {
  title: string;
  description: string;
  path: string;
  comingSoon?: boolean;
};

const calculators: Calculator[] = [
  {
    title: "Parts to Ores",
    description: "Give how many parts you need and it will tell you how many ores you need to get to make them.",
    path: "/calculator/parts-to-ores",
  },
  {
    title: "Smelting",
    description: "Figure out how to smelt ores and how much ice/volatiles you need.",
    path: "/calculator/smelting",
    comingSoon: true
  },
  {
    title: "Part List",
    description: "Put in a list of parts that you need and will break down all the components required.",
    path: "/calculator/part-list",
    comingSoon: true
  },
  {
    title: "Power Calculator",
    description: "Calculate power requirements and optimize your power grid setup.",
    path: "/calculator/power",
    comingSoon: true
  },
  {
    title: "Base Layout Planner",
    description: "Plan your base layout and optimize your space.",
    path: "/calculator/base-layout",
    comingSoon: true
  },
  {
    title: "Gas Calculator",
    description: "Calculate gas requirements for your parts.",
    path: "/calculator/gas",
    comingSoon: true
  },
  {
    title: "Power Grid",
    description: "Calculate power requirements for your parts.",
    path: "/calculator/power-grid",
    comingSoon: true
  }
  // Add more calculators here
];

const CalculatorCard: React.FC<{ calculator: Calculator }> = ({ calculator }) => {
  const cardContent = (
    <div className={`block rounded-2xl shadow-lg p-6 bg-white dark:bg-gray-800 transition hover:shadow-xl hover:-translate-y-1 border-2 border-gray-200 dark:border-gray-700 ${!calculator.comingSoon ? 'hover:border-blue-500 dark:hover:border-blue-400' : ''}`}>
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{calculator.title}</h2>
        {calculator.comingSoon && (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
            Coming Soon
          </span>
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{calculator.description}</p>
    </div>
  );

  if (calculator.comingSoon) {
    return cardContent;
  }

  return (
    <Link to={calculator.path}>
      {cardContent}
    </Link>
  );
};

const CalculatorPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-8 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
          Choose a Calculator
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc) => (
            <CalculatorCard key={calc.title} calculator={calc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
