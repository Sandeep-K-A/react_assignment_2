import type { FunctionComponent as FC } from "react";
import { Link } from "react-router-dom";
import { features } from "../data/data";
import FeatureCard from "../components/FeatureCard";

const HomePage: FC = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <span className="inline-block bg-gray-900 text-white text-xs uppercase tracking-widest font-medium px-3 py-1 rounded-full mb-4">
          UserDirectory
        </span>
        <h1 className="text-4xl sm:text-5xl  font-bold text-gray-900 mb-4 leading-tight">
          Welcome to <span className="text-indigo-600">UserDirectory</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
          A multi-page React application showcasing client-side routing,
          parameterized routes, and clean component architecture.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/users"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-600 transition-colors duration-200"
          >
            View Users
          </Link>
          <Link
            to="/about"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-900 hover:text-gray-900 transition-colors duration-200"
          >
            About the App
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
