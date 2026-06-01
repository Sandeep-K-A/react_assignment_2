import type { FunctionComponent as FC } from "react";
import type { Feature } from "../types/feature";

const FeatureCard: FC<Feature> = ({ icon, title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
      <span className="text-3xl mb-3 block">{icon}</span>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
